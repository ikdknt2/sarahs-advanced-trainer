let allCases = [];
let problemList = [];
let state = []; // ←唯一のstate（色配列）

// 色対応
const colorMap = {
  "0":"white",
  "1":"green",
  "2":"red",
  "3":"yellow",
  "4":"blue",
  "5":"orange"
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
function generateProblems(){
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

  problemList = allCases.filter(c => selected.includes(c.type));

  console.log("Problems:", problemList.length);
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
}
