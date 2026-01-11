let hungryCount = 0;
let knightCount = 0;

function login() {
  const name = document.getElementById("nickname").value;
  const slogan = document.getElementById("slogan").value;

  if (name === "") {
    alert("請輸入暱稱");
    return;
  }

  document.getElementById("loginArea").classList.add("hidden");
  document.getElementById("mainArea").classList.remove("hidden");

  document.getElementById("userInfo").innerText =
    `👤 ${name}｜${slogan}`;
}

function selectRole(role) {
  document.getElementById("orderArea").classList.add("hidden");
  document.getElementById("knightArea").classList.add("hidden");

  if (role === "hungry") {
    hungryCount++;
    document.getElementById("orderArea").classList.remove("hidden");
  }

  if (role === "knight") {
    knightCount++;
    document.getElementById("knightArea").classList.remove("hidden");
  }

  updateRatio();
}

function updateRatio() {
  const total = hungryCount + knightCount;
  if (total === 0) return;

  const hungryPercent = Math.round((hungryCount / total) * 100);
  const knightPercent = 100 - hungryPercent;

  document.getElementById("ratioText").innerText =
    `🍔 飢餓者 ${hungryPercent}% ｜ 🛵 騎士 ${knightPercent}%`;
}

function sendOrder() {
  const food = document.getElementById("food").value;
  if (food === "") {
    alert("請輸入想吃的東西！");
    return;
  }
  document.getElementById("orderResult").innerText =
    ` 訂單已送出：${food}`;
}

function setStatus(color) {
  let text = "";
  if (color === "green") text = "🟢 目前方便接單";
  if (color === "yellow") text = "🟡 稍後可接單";
  if (color === "red") text = "🔴 目前不方便";

  document.getElementById("statusText").innerText = text;
}
