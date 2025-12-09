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
          div.style.backgroundColor = "#e9edc9";
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
          heading.innerText = "Cash Out";
          heading.classList.add("text-[#080808B3]", "font-outfit", "font-bold");
          heading.style.marginLeft = "10px";

          // Create paragraph
          let para = document.createElement("p");
          let time = new Date();
          let localTime = time.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
          para.innerText = `$${cashOutAmount} cashed out to ${agentNumber} at ${localTime}`;
          para.classList.add(
            "font-outfit",
            "text-[var(--primary-gray)]",
            "text-sm"
          );
          para.style.marginLeft = "10px";

          // Append heading and para
          appendNewPara.appendChild(heading);
          appendNewPara.appendChild(para);
          alert(
            `$${cashOutAmount} cashed out to ${agentNumber} at ${localTime}`
          );
          cashOutSection.style.display = "none";
        }
      }
    } else {
      alert("Oops! Invalid PIN. Try again.");
    }
  } else {
    alert("Agent number must be 11 digits");
  }
});
