// add money
let addMoneySection = document.getElementById("addMoneySection");
addMoneySection.style.display = "none";
// transaction
let transactionSection = document.getElementById("transaction-Section");
transactionSection.style.display = "none";
//add money
let addMoney = document.getElementById("addMoney");
addMoney.addEventListener("click", () => {
  addMoneySection.style.display = "block";
  transactionSection.style.display = "none";
});
//transaction
let transaction = document.getElementById("transaction");
transaction.addEventListener("click", () => {
  transactionSection.style.display = "block";
  addMoneySection.style.display = "none";
});
