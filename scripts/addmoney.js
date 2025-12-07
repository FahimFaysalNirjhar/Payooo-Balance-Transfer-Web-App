let addMoneybtn = document.getElementById("Add-Money-Btn");
addMoneybtn.addEventListener("click", (event) => {
  event.preventDefault();

  let addMoneyAccountNumber = document.getElementById(
    "addMoney-accountNumber"
  ).value;

  if (addMoneyAccountNumber.length === 11) {
    //
    let addMoneyPin = document.getElementById("Add-Money-Pin").value;
    let convertAddMoneyPin = parseInt(addMoneyPin);

    if (convertAddMoneyPin === 1234) {
      //
      let addMoneySelectBank = document.getElementById(
        "Add-Money-select-Bank"
      ).value;

      if (addMoneySelectBank === "") {
        alert("No option selected (Bank)");
      } else {
        //
        let addMoneyAmount = document.getElementById("Add-Money-Amount").value;

        if (addMoneyAmount === "") {
          alert("Please enter an amount. ");
        } else {
          let amount = document.getElementById("amount").innerText;
          let convertAmount = Number(amount);
          let addMoneyAmount =
            document.getElementById("Add-Money-Amount").value;
          let convertAddMoneyAmount = Number(addMoneyAmount);
          let sum = convertAddMoneyAmount + convertAmount;
          document.getElementById("amount").innerText = sum;
        }
      }
    } else {
      alert("Oops! Invalid PIN. Try again.");
    }
  } else {
    alert("Account number must be 11 digits");
  }
});
