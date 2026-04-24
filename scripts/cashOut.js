document
  .getElementById("cashOut-btn")
  .addEventListener("click", function (event) {
    event.preventDefault;
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    const agentNumber = document.getElementById("agent-number").value;

    const cashOutAmount = document.getElementById("amount-to-cashOut").value;
    const convertedCashOutAmount = parseInt(cashOutAmount);

    const pin = document.getElementById("pin-number-cashout").value;
    const ConvertedPin = parseInt(pin);

    if (agentNumber.length === 11) {
        if (cashOutAmount) {
            if (ConvertedPin === 1234) {
                const sum = convertedMainBalance - convertedCashOutAmount;
                document.getElementById("main-balance").innerText = sum;
            } else {
                alert('Invalid Pin number')
            }
        } else {
            
            alert('enter amount')
        }
    } else {
        alert('enter 11 digit agent number')
    }
  });
