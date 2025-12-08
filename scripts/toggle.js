// add money
let addMoneySection = document.getElementById("addMoneySection");
addMoneySection.style.display = "none";

// transaction
let transactionSection = document.getElementById("transaction-Section");
transactionSection.style.display = "none";

// cash out
let cashOutSection = document.getElementById("cashout-section");
cashOutSection.style.display = "none";

//add money
let addMoney = document.getElementById("addMoney");
addMoney.addEventListener("click", () => {
  addMoneySection.style.display = "block";
  transactionSection.style.display = "none";
  cashOutSection.style.display = "none";
});

//transaction
let transaction = document.getElementById("transaction");
transaction.addEventListener("click", () => {
  transactionSection.style.display = "block";
  addMoneySection.style.display = "none";
  cashOutSection.style.display = "none";
});

//chas out
let cashOut = document.getElementById("CashOut");
cashOut.addEventListener("click", () => {
  addMoneySection.style.display = "none";
  transactionSection.style.display = "none";
  cashOutSection.style.display = "block";
});
