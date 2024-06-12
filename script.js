const originalTime = new Date().toLocaleTimeString("nb-NO");
const timeElm = document.getElementById("time")
const dateElm = document.getElementById("date")

function updateTime() {
  const current = new Date();
  const time = current.toLocaleTimeString("nb-NO");
  const date = current.toLocaleDateString("nb-NO");

  timeElm.innerHTML = time;
  dateElm.innerHTML = date;
}

setInterval(updateTime,50);
