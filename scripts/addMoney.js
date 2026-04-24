document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault;
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    const balanceAdd = document.getElementById("amount-to-add").value;
    const convertedBalanceAdd = parseFloat(balanceAdd);

    const pinNumber = document.getElementById("pin-number").value;
    const convertedPinNumber = parseInt(pinNumber);

    const accNumber = document.getElementById("acc-number").value;
    

    if (accNumber.length === 11) {
      if (convertedBalanceAdd) {
        if (convertedPinNumber === 1234) {
          const sum = convertedBalanceAdd + convertedMainBalance;
          document.getElementById("main-balance").innerText = sum;
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
