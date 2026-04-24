document
  .getElementById("cashOut-btn")
  .addEventListener("click", function (event) {
    event.preventDefault;
    const mainBalance = getValueByInnerText("main-balance");
    const agentNumber = getValueByInput("agent-number");
    const cashOutAmount = getConvertedValueByInput("amount-to-cashOut");

    const pin = getConvertedValueByInput("pin-number-cashout");

    if (agentNumber.length === 11) {
      if (cashOutAmount) {
        if (pin === 1234) {
          const sum = mainBalance - cashOutAmount;
          setInnerText("main-balance", sum);

          const transactionList = document.getElementById("transaction-history");
          const div = document.createElement("div");
          div.className = "p-3 rounded-xl bg-red-100 mb-4";
          div.innerHTML = `
            <h2 class=" text-xl font-semibold">Cash Out</h2>
            <p class="text-base">added: ${cashOutAmount} tk. New Balance: ${sum}</p>
            <span id="datetime" class="text-sm "></span>
          `;
          transactionList.appendChild(div);

          alert('khamba 10% nibe');

        } else {
          alert("Invalid Pin number");
        }
      } else {
        alert("enter amount");
      }
    } else {
      alert("enter 11 digit agent number");
    }
  });
