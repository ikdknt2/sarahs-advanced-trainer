let allCases = [];
let problemList = [];

// 色対応
const colorMap = {
  "W":"white",
  "G":"green",
  "R":"red",
  "Y":"yellow",
  "B":"blue",
  "O":"orange"
};

// =====================
// CSV読み込み
// =====================
async function loadCSV(){
  const res = await fetch("cases.csv");
  const text = await res.text();

  const lines = text.trim().split("\n");

  allCases = lines.map(line=>{
    const [type, name, stateStr] = line.split(",");

    return {
      type: type.trim(),
      name: name.trim(),
      // 色配列に変換
      state: stateStr.trim().split("").map(n => colorMap[n])
    };
  });

  console.log("CSV loaded:", allCases.length);
}

// =====================
// 問題生成
// =====================
function generateProblem(){
  const selected = [];

  if(document.getElementById("PiS").checked) selected.push("PiS");
  if(document.getElementById("PiW").checked) selected.push("PiW");
  if(document.getElementById("PiX").checked) selected.push("PiX");
  if(document.getElementById("PiO").checked) selected.push("PiO");
  if(document.getElementById("PiZC").checked) selected.push("PiZC");
  if(document.getElementById("Pi3S").checked) selected.push("Pi3S");
  if(document.getElementById("PiHU").checked) selected.push("PiHU");
  if(document.getElementById("PiVU").checked) selected.push("PiVU");
  if(document.getElementById("PiHZ").checked) selected.push("PiHZ");
  if(document.getElementById("PiSk").checked) selected.push("PiSk");
  if(document.getElementById("PnS").checked) selected.push("PnS");
  if(document.getElementById("PnW").checked) selected.push("PnW");
  if(document.getElementById("PnX").checked) selected.push("PnX");
  if(document.getElementById("PnO").checked) selected.push("PnO");
  if(document.getElementById("PnZC").checked) selected.push("PnZC");
  if(document.getElementById("Pn3S").checked) selected.push("Pn3S");
  if(document.getElementById("PnHU").checked) selected.push("PnHU");
  if(document.getElementById("PnVU").checked) selected.push("PnVU");
  if(document.getElementById("PnHZ").checked) selected.push("PnHZ");
  if(document.getElementById("PnSk").checked) selected.push("PnSk");


  problemList = allCases.filter(c => selected.includes(c.type));

  console.log("Problems:", problemList.length);
}

// =====================
// チェックボックス一括ON/OFF
// =====================
function setAllCaseCheckboxes(checked){
  const caseCheckboxes = document.querySelectorAll('input[type="checkbox"][id^="Pi"], input[type="checkbox"][id^="Pn"]');
  caseCheckboxes.forEach(box => {
    box.checked = checked;
  });
}

function allOn(){
  setAllCaseCheckboxes(true);
}

function allOff(){
  setAllCaseCheckboxes(false);
}

function applyColorNeutralMode(colors){
  const colorNeutralMode = document.getElementById("colorNeutralMode");
  if(!colorNeutralMode || !colorNeutralMode.checked){
    return [...colors];
  }

  const colorOrder = ["white", "green", "red", "orange", "blue", "yellow"];
  const shift = Math.floor(Math.random() * 6) + 1; // 1〜6

  return colors.map(color => {
    const i = colorOrder.indexOf(color);
    if(i === -1) return color;

    const shiftedIndex = (i + shift) % colorOrder.length;
    return colorOrder[shiftedIndex];
  });
}

// =====================
// 次の問題
// =====================
function nextProblem(){
  if(problemList.length === 0){
    alert("問題がありません");
    return;
  }

  const i = Math.floor(Math.random() * problemList.length);
  const picked = problemList[i];

  state = [...picked.state]; // ←色配列コピー

  draw(state);
  document.getElementById("text") = ":"
}
