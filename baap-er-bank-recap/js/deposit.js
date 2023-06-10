/* document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString); */

document.getElementById("btn-deposit").addEventListener("click", function() {
  let depositField = document.getElementById("deposit-field");
  let newDepositAmountString = depositField.value;
  let newDepositAmount = parseFloat(newDepositAmountString);

  depositField.value = '';

  let depositTotalElemtnt = document.getElementById("deposit-total");
  let previousDepositTotalNumber = depositTotalElemtnt.innerText;
  let previousDepositTotal = parseFloat(previousDepositTotalNumber);

  const newDepositAmountTotal = previousDepositTotal + newDepositAmount;
  depositTotalElemtnt.innerText = newDepositAmountTotal;

  let totalBalanceAmount = document.getElementById('balance-total');
  let totalBalanceAmountInner =parseFloat( totalBalanceAmount.innerText);

  let totalBalance = totalBalanceAmountInner + newDepositAmount;
  totalBalanceAmount.innerText = totalBalance;
});