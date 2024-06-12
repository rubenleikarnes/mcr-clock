const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const originalTime = new Date().toLocaleTimeString("nb-NO");
const timeElm = document.getElementById("time")
const dateElm = document.getElementById("date")
const weekdayElm = document.getElementById("weekday")

function updateTime() {
  const current = new Date();
  const weekday = days[current.getDay()];
  const month = months[current.getMonth()]
  const time = current.toLocaleTimeString("nb-NO");
  const date = current.toLocaleDateString("nb-NO");
 	const date2 = month + " " + current.getDate() + " " + current.getFullYear()


  timeElm.innerHTML = time;
  dateElm.innerHTML = weekday + ", " + date2;
}

setInterval(updateTime,50);
