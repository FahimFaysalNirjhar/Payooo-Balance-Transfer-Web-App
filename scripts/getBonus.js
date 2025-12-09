let bonusBtn = document.getElementById("Bonus-Btn");
bonusBtn.addEventListener("click", (event) => {
  event.preventDefault();

  //bonus coupon
  let enterBonusCoupon = document.getElementById("Enter-Bonus-Coupon").value;
  if (
    enterBonusCoupon === "ADDM100" ||
    enterBonusCoupon === "BONUS10" ||
    enterBonusCoupon === "FIRST50"
  ) {
    if (enterBonusCoupon === "ADDM100") {
      let amount = document.getElementById("amount").innerText;
      let convertAmount = Number(amount);
      let bonusMoney = 100 + convertAmount;
      document.getElementById("amount").innerText = bonusMoney;

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
      div.style.backgroundColor = "#b0c4b1";
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
      heading.innerText = "Get Bonus";
      heading.classList.add("text-[#080808B3]", "font-outfit", "font-bold");
      heading.style.marginLeft = "10px";

      // Create paragraph
      let para = document.createElement("p");
      let time = new Date();
      let localTime = time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      para.innerText = `You received a bonus $${100} for using coupon ${enterBonusCoupon} at ${localTime}.`;
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
        `You received a bonus $${100} for using coupon ${enterBonusCoupon} at ${localTime}.`
      );
      getBonusSection.style.display = "none";

      //BONUS10
    } else if (enterBonusCoupon === "BONUS10") {
      let amount = document.getElementById("amount").innerText;
      let convertAmount = Number(amount);
      let bonusMoney = 10 + convertAmount;
      document.getElementById("amount").innerText = bonusMoney;

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
      div.style.backgroundColor = "#b0c4b1";
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
      heading.innerText = "Get Bonus";
      heading.classList.add("text-[#080808B3]", "font-outfit", "font-bold");
      heading.style.marginLeft = "10px";

      // Create paragraph
      let para = document.createElement("p");
      let time = new Date();
      let localTime = time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      para.innerText = `You received a bonus $${10} for using coupon ${enterBonusCoupon} at ${localTime}.`;
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
        `You received a bonus $${10} for using coupon ${enterBonusCoupon} at ${localTime}.`
      );
      getBonusSection.style.display = "none";
    }

    // FIRST50
    else {
      let amount = document.getElementById("amount").innerText;
      let convertAmount = Number(amount);
      let bonusMoney = 50 + convertAmount;
      document.getElementById("amount").innerText = bonusMoney;

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
      div.style.backgroundColor = "#b0c4b1";
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
      heading.innerText = "Get Bonus";
      heading.classList.add("text-[#080808B3]", "font-outfit", "font-bold");
      heading.style.marginLeft = "10px";

      // Create paragraph
      let para = document.createElement("p");
      let time = new Date();
      let localTime = time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      para.innerText = `You received a bonus $${50} for using coupon ${enterBonusCoupon} at ${localTime}.`;
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
        `You received a bonus $${50} for using coupon ${enterBonusCoupon} at ${localTime}.`
      );
      getBonusSection.style.display = "none";
    }
  } else {
    alert("This coupon code is incorrect. Please check and try again.");
  }
});
