let cashOutBtn = document.getElementById("Cash-Out-Btn");
cashOutBtn.addEventListener("click", (event) => {
  event.preventDefault();

  //   agent number
  let agentNumber = document.getElementById("Agent-Number").value;
  if (agentNumber.length === 11) {
    // pin number check
    let cashOutPin = document.getElementById("CashOut-Pin").value;
    let convertCashOutPin = parseInt(cashOutPin);

    if (convertCashOutPin === 1234) {
      // amount check
      let cashOutAmount = document.getElementById("Cash-Out-Amount").value;

      if (cashOutAmount === "") {
        alert("Please enter an amount. ");
      } else {
        let convertCashOutAmount = parseInt(cashOutAmount);
        let amount = document.getElementById("amount").innerText;
        let convertAmount = Number(amount);

        // amount validity
        if (convertAmount < convertCashOutAmount || convertCashOutAmount < 0) {
          alert("Invalid amount. Please enter a valid amount.");
        } else {
          let minus = convertAmount - convertCashOutAmount;
          document.getElementById("amount").innerText = minus;
        }
      }
    } else {
      alert("Oops! Invalid PIN. Try again.");
    }
  } else {
    alert("Agent number must be 11 digits");
  }
});
