// 全ケース
let allCases = [];

// 問題リスト
let problemList = [];

// 現在のstate（配列で統一）
let currentState = null;


// =========================
// CSV読み込み（配列に変換）
// =========================
async function loadCSV(){
  const res = await fetch("cases.csv");
  const text = await res.text();

  const lines = text.trim().split("\n");

  allCases = lines.map(line=>{
    const [type, name, stateStr] = line.split(",");

    // ★ここで配列に変換
    const state = stateStr.trim().split("");

    // 安全チェック
    if(state.length !== 30){
      console.warn("state長さおかしい:", stateStr);
    }

    return {
      type: type.trim(),
      name: name.trim(),
      state: state   // ←配列で保存！
    };
  });

  console.log("CSV loaded:", allCases);
}


// =========================
// 問題リスト生成
// =========================
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

  console.log("Problem List:", problemList);
}


// =========================
// 次の問題（配列stateをそのまま使う）
// =========================
function nextProblem(){
  if(problemList.length === 0){
    alert("問題がありません");
    return;
  }

  const i = Math.floor(Math.random() * problemList.length);
  const picked = problemList[i];

  // ★ここ重要：コピーして使う（元データ破壊防止）
  currentState = [...picked.state];

  console.log("Current:", picked.name);

  draw(currentState); // ←配列そのまま渡す
}
