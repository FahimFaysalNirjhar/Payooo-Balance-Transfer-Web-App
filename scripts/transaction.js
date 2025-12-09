let transferBtn = document.getElementById("Transfer-Btn");
transferBtn.addEventListener("click", (event) => {
  event.preventDefault();

  // User-Account-Number
  let userAccountNumber = document.getElementById("User-Account-Number").value;

  if (userAccountNumber.length === 11) {
    // pin
    let transferPin = document.getElementById("Transfer-Pin").value;
    let convertTransferPin = parseInt(transferPin);

    if (convertTransferPin === 1234) {
      //amount check
      let transferAmount = document.getElementById("Transfer-Amount").value;

      if (transferAmount === "") {
        alert("Please enter an amount. ");
      } else {
        let convertTransferAmount = parseInt(transferAmount);

        //amount
        let amount = document.getElementById("amount").innerText;
        let convertAmount = Number(amount);

        //transfer validity
        if (
          convertAmount < convertTransferAmount ||
          convertTransferAmount < 0
        ) {
          alert("Invalid amount. Please enter a valid amount.");
        } else {
          let minus = convertAmount - convertTransferAmount;
          document.getElementById("amount").innerText = minus;

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
          div.style.backgroundColor = "#ffe6a7";
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
          heading.innerText = "Transfer Money";
          heading.classList.add("text-[#080808B3]", "font-outfit", "font-bold");
          heading.style.marginLeft = "10px";

          // Create paragraph
          let para = document.createElement("p");
          let time = new Date();
          let localTime = time.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
          para.innerText = `$${convertTransferAmount} Transfer Money to ${userAccountNumber} at ${localTime}`;
          para.classList.add(
            "font-outfit",
            "text-[var(--primary-gray)]",
            "text-sm"
          );
          para.style.marginLeft = "10px";
          para.style.fontSize = "12px";

          // Append heading and para
          appendNewPara.appendChild(heading);
          appendNewPara.appendChild(para);
          alert(
            `$${convertTransferAmount} Transfer Money to ${userAccountNumber} at ${localTime}`
          );
          transferMoneySection.style.display = "none";
        }
      }
    } else {
      alert("Oops! Invalid PIN. Try again.");
    }
  } else {
    alert("User Account number must be 11 digits");
  }
});
