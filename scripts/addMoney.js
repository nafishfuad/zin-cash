document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault;
    operator = 'addition';
    const mainBalance = getValueByInnerText("main-balance");
    const amountAdded = getConvertedValueByInput("amount-to-add");
    const pinNumber = getConvertedValueByInput("pin-number");
    const accountNumber = getValueByInput("acc-number");
   
    
    if (accountNumber.length === 11) {
      if (amountAdded) {
        if (pinNumber === 1234) {
          const sum = amountAdded + mainBalance;
          setInnerText("main-balance", sum);

          const mfs = document.getElementById('mfs').value;
          const transactionList = document.getElementById('transaction-history');
          const div = document.createElement("div");
          div.className = "p-3 rounded-xl bg-green-100 mb-4";
          div.innerHTML = `
            <h2 class=" text-xl font-semibold">Added Money</h2>
            <p class="text-base">added: ${amountAdded} tk from ${mfs}. New Balance: ${sum}</p>
            <span id="datetime" class="text-sm "></span>
          `
          transactionList.appendChild(div);
          
          
        } else {
          alert("Incorrect Pin number");
        }
      } else {
        alert("Enter Amount");
      }
    } else {
      alert("Mobile number should be 11 digit");
    }
  });
