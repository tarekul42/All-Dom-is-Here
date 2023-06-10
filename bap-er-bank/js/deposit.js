//  step-1 : add event listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function() {
  // step-2: get the deposit amount from the deposit input field
  // for input field use value to the value inside the input field
  const depositField = document.getElementById("deposit-field");
  const newDepositAmount = parseFloat(depositField.value);

  //   step-3: get the current deposit total
  // for non-input(element other than input, textarea) use innertext to get the text
  const depositTotalElemtnt = document.getElementById("deposit-value");
  const preciousDepositTotal = parseFloat(depositTotalElemtnt.innerText);


//   step-4: add numbers to set the total deposit
  const currentDepositTotal = preciousDepositTotal + newDepositAmount;


  depositTotalElemtnt.innerText= currentDepositTotal;


//   step-5: get ballance current total


  const balanceTotalField = document.getElementById("deposit-total");
  const newTotalAmount = parseFloat(balanceTotalField.innerText);

//   step-6: calculate current total balance

const currentBalanceTotal = newTotalAmount + newDepositAmount;

// set the balance total

balanceTotalField.innerText = currentBalanceTotal;

//   step-7: clear the deposit field
  depositField.value = ''
});
