function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
}

handleToggle("add-money-section", "block");
handleToggle("cashOut-section", "none");
handleToggle("transaction-history", "none");

document.getElementById("add-money-box").addEventListener("click", function () {
  handleToggle("add-money-section", "block");
  handleToggle("cashOut-section", "none");
  handleToggle("transaction-history", "none");
});
document.getElementById("cash-out-box").addEventListener("click", function () {
  handleToggle("add-money-section", "none");
  handleToggle("cashOut-section", "block");
  handleToggle("transaction-history", "none");
});
document.getElementById("transaction-box").addEventListener("click", function () {
  handleToggle("add-money-section", "none");
  handleToggle("cashOut-section", "none");
  handleToggle("transaction-history", "block");
});
