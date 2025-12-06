let login = document.querySelector("#login");
login.addEventListener("click", (event) => {
  event.preventDefault();
  let phoneNumber = document.querySelector("#phoneNumber").value;
  let pin = document.querySelector("#pin").value;
  let convertPin = Number(pin);
  console.log(convertPin);
  if (phoneNumber.length === 11) {
    if (convertPin === 1234) {
      window.location.href = "./main.html";
    }
  } else {
    alert("Invaild Phone Number");
  }
});
