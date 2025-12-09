// add money
let addMoneySection = document.getElementById("addMoneySection");
addMoneySection.style.display = "none";

// transaction
let transactionSection = document.getElementById("transaction-Section");
transactionSection.style.display = "none";

// cash out
let cashOutSection = document.getElementById("cashout-section");
cashOutSection.style.display = "none";

// transfer money
let transferMoneySection = document.getElementById("transfer-money-section");
transferMoneySection.style.display = "none";

// Get Bonus
let getBonusSection = document.getElementById("get-bonus-section");
getBonusSection.style.display = "none";

//Pay Bill
let PayBillSection = document.getElementById("Pay-Bill-Section");
PayBillSection.style.display = "none";

//add money
let addMoney = document.getElementById("addMoney");
addMoney.addEventListener("click", () => {
  addMoneySection.style.display = "block";
  transactionSection.style.display = "none";
  cashOutSection.style.display = "none";
  transferMoneySection.style.display = "none";
  getBonusSection.style.display = "none";
  PayBillSection.style.display = "none";
});

//transaction
let transaction = document.getElementById("transaction");
transaction.addEventListener("click", () => {
  transactionSection.style.display = "block";
  addMoneySection.style.display = "none";
  cashOutSection.style.display = "none";
  transferMoneySection.style.display = "none";
  getBonusSection.style.display = "none";
  PayBillSection.style.display = "none";
});

//cash out
let cashOut = document.getElementById("CashOut");
cashOut.addEventListener("click", () => {
  addMoneySection.style.display = "none";
  transactionSection.style.display = "none";
  cashOutSection.style.display = "block";
  transferMoneySection.style.display = "none";
  getBonusSection.style.display = "none";
  PayBillSection.style.display = "none";
});

//transfer money
let transferMoney = document.getElementById("transfer-money");
transferMoney.addEventListener("click", () => {
  addMoneySection.style.display = "none";
  transactionSection.style.display = "none";
  cashOutSection.style.display = "none";
  getBonusSection.style.display = "none";
  PayBillSection.style.display = "none";
  transferMoneySection.style.display = "block";
});

//Get Bonus
let getBonus = document.getElementById("get-bonus");
getBonus.addEventListener("click", () => {
  addMoneySection.style.display = "none";
  transactionSection.style.display = "none";
  cashOutSection.style.display = "none";
  transferMoneySection.style.display = "none";
  PayBillSection.style.display = "none";
  getBonusSection.style.display = "block";
});

//Pay Bill
let payBill = document.getElementById("Pay-Bill");
payBill.addEventListener("click", () => {
  addMoneySection.style.display = "none";
  transactionSection.style.display = "none";
  cashOutSection.style.display = "none";
  transferMoneySection.style.display = "none";
  getBonusSection.style.display = "none";
  PayBillSection.style.display = "block";
});
