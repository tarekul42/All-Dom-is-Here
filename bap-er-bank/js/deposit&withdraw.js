document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('i got the deposit button');

    // step-1: got the value from deposit input form
    const depositField = document.getElementById('deposit-field');
    const depositFieldValueString = depositField.value;
    const despositFieldValue = parseFloat(depositFieldValueString);
    // console.log(typeof despositFieldValue);

    // validation
    if(isNaN(depositField)){
        alert('please provide a valid number')
        return;
    }

    // step-2: blank the input field
    depositField.value = '';

    // step-3: got the deposit field
    const depositTotal = document.getElementById('deposit-total');
    const depositotalsting = depositTotal.innerText
    const depositTotalValue = parseFloat(depositotalsting)
    // console.log(depositTotalValue);

    // step-4: sum input value and deposit value and update deposit value
    const totalDeposit = despositFieldValue + depositTotalValue;
    depositTotal.innerText = totalDeposit;

    // step-5: got the balance field
    const previousBalanceField = document.getElementById('balance-total');
    const previousBalanceFieldString = previousBalanceField.innerText;
    const previousBalanceFieldTotal = parseFloat(previousBalanceFieldString)
    // console.log(previousBalanceFieldTotal);

    // step-6: sum input value and balance and update deposit value
    const totalBalance = previousBalanceFieldTotal + despositFieldValue;
    previousBalanceField.innerText = totalBalance;
  });



  document.getElementById('btn-withdraw').addEventListener('click', function(){
    // console.log('i got the deposit button');

    // step-1: got the value from deposit input form
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldValueString = withdrawField.value;
    const withdrawFieldValue = parseFloat(withdrawFieldValueString);
    // console.log(typeof despositFieldValue);

    // validation
    if(isNaN(withdrawField)){
        alert('please provide a valid number')
        return;
    }

    // step-2: blank the input field
    withdrawField.value = '';

    // step-3: got the deposit field
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawtotalsting = withdrawTotal.innerText
    const withdrawTotalValue = parseFloat(withdrawtotalsting)
    // console.log(depositTotalValue);

    // step-4: sum input value and deposit value and update deposit value
    const totalWithdraw = withdrawFieldValue + withdrawTotalValue;
    withdrawTotal.innerText = totalWithdraw;

    // step-5: got the balance field
    const previousBalanceField = document.getElementById('balance-total');
    const previousBalanceFieldString = previousBalanceField.innerText;
    const previousBalanceFieldTotal = parseFloat(previousBalanceFieldString)
    // console.log(previousBalanceFieldTotal);

    // step-6: sum input value and balance and update deposit value
    const totalBalance = previousBalanceFieldTotal - withdrawFieldValue;
    previousBalanceField.innerText = totalBalance;
  });