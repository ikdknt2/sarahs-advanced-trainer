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
  const isChecked = (id) => {
    const element = document.getElementById(id);
    return Boolean(element && element.checked);
  };

  if(isChecked("PiS")) selected.push("PiS");
  if(isChecked("PiW")) selected.push("PiW");
  if(isChecked("PiX")) selected.push("PiX");
  if(isChecked("PiO")) selected.push("PiO");
  if(isChecked("PiZC")) selected.push("PiZC");
  if(isChecked("Pi3S")) selected.push("Pi3S");
  if(isChecked("PiHU")) selected.push("PiHU");
  if(isChecked("PiVU")) selected.push("PiVU");
  if(isChecked("PiH")) selected.push("PiHZ");
  if(isChecked("PiZ")) selected.push("PiHZ");
  if(isChecked("PiSk")) selected.push("PiSk");
  if(isChecked("PnS")) selected.push("PnS");
  if(isChecked("PnW")) selected.push("PnW");
  if(isChecked("PnX")) selected.push("PnX");
  if(isChecked("PnO")) selected.push("PnO");
  if(isChecked("PnZC")) selected.push("PnZC");
  if(isChecked("Pn3S")) selected.push("Pn3S");
  if(isChecked("PnHU")) selected.push("PnHU");
  if(isChecked("PnVU")) selected.push("PnVU");
  if(isChecked("PnH")) selected.push("PnHZ");
  if(isChecked("PnZ")) selected.push("PnHZ");
  if(isChecked("PnSk")) selected.push("PnSk");


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

  const canonicalOrder = ["W", "G", "R", "Y", "B", "O"];
  const front = ["W", "G", "R"];
  const pairMap = {"W":"Y", "G":"B", "R":"O"};

  // WGR を 1〜2 だけ循環シフト
  const shift = Math.floor(Math.random() * 2) + 1;
  const shiftedFront = front.map((_, i) => {
    const src = (i - shift + front.length) % front.length;
    return front[src];
  });

  // 対応色で後半を作成（W-Y, G-B, R-O）
  const shiftedBack = shiftedFront.map(c => pairMap[c]);

  // 前半・後半の入れ替えをランダム化
  const arranged = Math.random() < 0.5
    ? [...shiftedFront, ...shiftedBack]
    : [...shiftedBack, ...shiftedFront];

  const letterToColor = {
    "W":"white",
    "G":"green",
    "R":"red",
    "Y":"yellow",
    "B":"blue",
    "O":"orange"
  };
  const colorToLetter = {
    "white":"W",
    "green":"G",
    "red":"R",
    "yellow":"Y",
    "blue":"B",
    "orange":"O"
  };

  const remap = {};
  canonicalOrder.forEach((src, i) => {
    remap[src] = arranged[i];
  });

  return colors.map(color => {
    const srcLetter = colorToLetter[color];
    if(!srcLetter) return color;

    const dstLetter = remap[srcLetter];
    return letterToColor[dstLetter] || color;
  });
}

// =====================
// 次の問題
// =====================
function nextProblem(){
  if(problemList.length === 0){
    alert("You have to choose cases");
    return;
  }

  const i = Math.floor(Math.random() * problemList.length);
  const picked = problemList[i];

  const caseLabel = picked.type.length > 2
    ? picked.type.slice(0, 2) + "+" + picked.type.slice(2)
    : picked.type;

  state = applyColorNeutralMode(picked.state); // ←色配列コピー + Color Neutral Mode対応
  log = caseLabel + ":";
  document.getElementById("text").textContent = log;
  draw(state);
}
