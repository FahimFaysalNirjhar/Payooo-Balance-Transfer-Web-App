let addMoneybtn = document.getElementById("Add-Money-Btn");
addMoneybtn.addEventListener("click", (event) => {
  event.preventDefault();
  // Account Number
  let addMoneyAccountNumber = document.getElementById(
    "addMoney-accountNumber"
  ).value;

  if (addMoneyAccountNumber.length === 11) {
    //pin
    let addMoneyPin = document.getElementById("Add-Money-Pin").value;
    let convertAddMoneyPin = parseInt(addMoneyPin);

    // compare
    if (convertAddMoneyPin === 1234) {
      //select bank
      let addMoneySelectBank = document.getElementById(
        "Add-Money-select-Bank"
      ).value;

      if (addMoneySelectBank === "") {
        alert("No option selected (Bank)");
      } else {
        //amount
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

          // transation history
          let div = document.createElement("div");
          div.classList.add(
            "flex",
            "rounded-xl",
            "border",
            "border-black/10",
            "bg-white",
            "mx-1",
            "mb-2"
          );
          div.style.backgroundColor = "#faedcd";
          // Create inner structure
          div.innerHTML = `
             <div class="rounded-full p-3 bg-[#0808080D]">
                   <img src="assets/wallet1.png" alt="" />
            </div>
            <div class="flex-1 append-new-para"></div>
                                                      `;

          // Append to transaction section
          transactionSection.appendChild(div);

          // Select the inner container inside THIS div
          let appendNewPara = div.querySelector(".append-new-para");

          // Create heading
          let heading = document.createElement("h1");
          heading.innerText = "Add Money";
          heading.classList.add("text-[#080808B3]", "font-outfit", "font-bold");
          heading.style.marginLeft = "10px";

          // Create paragraph
          let para = document.createElement("p");
          let time = new Date();
          let localTime = time.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
          para.innerText = `$${addMoneyAmount} received from ${addMoneySelectBank} at ${localTime}`;
          para.classList.add(
            "font-outfit",
            "text-[var(--primary-gray)]",
            "text-sm"
          );
          para.style.marginLeft = "10px";
          para.style.fontSize = "10px";

          // Append heading and para
          appendNewPara.appendChild(heading);
          appendNewPara.appendChild(para);
          alert(
            `$${addMoneyAmount} received from ${addMoneySelectBank} at ${localTime}`
          );
          addMoneySection.style.display = "none";
        }
      }
    } else {
      alert("Oops! Invalid PIN. Try again.");
    }
  } else {
    alert("Account number must be 11 digits");
  }
});
