let payBillBtn = document.getElementById("Pay-Bill-Btn");
payBillBtn.addEventListener("click", (event) => {
  event.preventDefault();

  //biller-account-Number
  let billerAccountNumber = document.getElementById(
    "biller-account-Number"
  ).value;

  if (billerAccountNumber.length === 11) {
    // pin

    let billerPin = document.getElementById("Biller-Pin").value;
    let convertBillerPin = parseInt(billerPin);

    //compare

    if (convertBillerPin === 1234) {
      //Select payment category

      let payBillSelectOption = document.getElementById(
        "pay-bill-select-option"
      ).value;

      //   compare
      if (payBillSelectOption === "") {
        alert("No option selected (Bank)");
      } else {
        // pay amount
        let payAmount = document.getElementById("pay-Amount").value;

        // check
        if (payAmount === "") {
          alert("Please enter an amount. ");
        } else {
          let convertPayAmount = parseInt(payAmount);
          let amount = document.getElementById("amount").innerText;
          let convertAmount = Number(amount);

          //check
          if (convertAmount < convertPayAmount || convertPayAmount < 0) {
            alert("Invalid amount. Please enter a valid amount.");
          } else {
            let minus = convertAmount - convertPayAmount;
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
            div.style.backgroundColor = "#f7e1d7";
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
            heading.innerText = "Pay Bill";
            heading.classList.add(
              "text-[#080808B3]",
              "font-outfit",
              "font-bold"
            );
            heading.style.marginLeft = "10px";

            // Create paragraph
            let para = document.createElement("p");
            let time = new Date();
            let localTime = time.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            });
            para.innerText = `You have paid ${convertPayAmount} to ${payBillSelectOption} at ${localTime}.`;
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
              `You have paid ${convertPayAmount} to ${payBillSelectOption} at ${localTime}.`
            );
            PayBillSection.style.display = "none";
          }
        }
      }
    } else {
      alert("Oops! Invalid PIN. Try again.");
    }
  } else {
    alert("Account number must be 11 digits");
  }
});
