// CSV全データ
let allCases = [];

// 抽出された問題リスト
let problemList = [];

// 現在の問題
let currentCase = null;


// =========================
// CSV読み込み
// =========================
async function loadCSV(){
  const res = await fetch("cases.csv");
  const text = await res.text();

  const lines = text.trim().split("\n");

  // ヘッダー除外
  allCases = lines.map(line=>{
    const [type, name, state] = line.split(",");

    return {
      type: type.trim(),
      name: name.trim(),
      state: state.trim()
    };
  });

  console.log("CSV loaded:", allCases);
}


// =========================
// 問題リスト生成
// =========================
function generateProblems(){
  // チェックされてる分類を取得
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

  // フィルター
  problemList = allCases.filter(c => selected.includes(c.type));

  console.log("Problem List:", problemList);
}


// =========================
// ランダムで1問選ぶ
// =========================
function nextProblem(){
  if(problemList.length === 0){
    alert("問題がありません");
    return;
  }

  const i = Math.floor(Math.random() * problemList.length);
  currentCase = problemList[i];

  console.log("Current:", currentCase);

  applyState(currentCase.state);
}


// =========================
// state → 色配列 → draw
// =========================
function applyState(stateStr){
  const colorMap = {
    "0":"white",
    "1":"green",
    "2":"red",
    "3":"yellow",
    "4":"blue",
    "5":"orange"
  };

  const colors = stateStr.split("").map(n => colorMap[n]);

  // draw.jsの関数を呼ぶ
  draw(colors);
}


// =========================
// 初期化
// =========================
window.addEventListener("load", async ()=>{
  await loadCSV();
});
