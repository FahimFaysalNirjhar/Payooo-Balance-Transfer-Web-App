function showTime() {
  let getTime = new Date();
  let change = getTime.toLocaleTimeString();
  let post = (document.querySelector("#date").innerHTML = change);
}
setInterval(showTime, 0);
