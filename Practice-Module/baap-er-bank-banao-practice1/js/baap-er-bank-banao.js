

//                  deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){

  
  const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    let newDepositAmount = parseFloat(newDepositAmountString);

    // if(typeof newDepositAmount != Number){
    //   alert ('please enter e valid number');
  
    // }

    depositField.value = '';
    
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalSting = depositTotalElement.innerText;
    let previousDepositTotal = parseFloat(previousDepositTotalSting)
    // converStringTONumber('deposit-total');

    
    const newDepositTotal = previousDepositTotal + newDepositAmount ;
    


     depositTotalElement.innerText = newDepositTotal;


    //  console.log(previousDepositTotal)

    const balanceField = document.getElementById('balance-total')
    const preciousBalanceAmountSting = balanceField.innerText;
    const previousBalanceAmount = parseFloat(preciousBalanceAmountSting)

    const newBalanceTotal = previousBalanceAmount + newDepositAmount;

    balanceField.innerText = newBalanceTotal;
  })

    //                           button withdraw

    document.getElementById('btn-withdraw').addEventListener('click',function(){


      const withdrawField =  document.getElementById('withdraw-field');
      const withdrawFieldString = withdrawField.value;
      const withdrawAmount = parseFloat(withdrawFieldString)

      // console.log(withdrawAmount);


      withdrawField.value = '';


      const withdrawBalance = document.getElementById('withdraw-total');
      const withdrawBalanceString = withdrawBalance.innerText;
      const withdrawBalanceAmount = parseFloat(withdrawBalanceString);
      // console.log(withdrawBalanceAmount);
      // console.log(withdrawTotal);
      const BalanceField = document.getElementById('balance-total');
      const BalanceFieldString = BalanceField.innerText;
      const balanceFieldAmount = parseFloat(BalanceFieldString);
      // console.log(balanceFieldAmount);
      if(balanceFieldAmount >= withdrawAmount ){
        const withdrawTotal = withdrawAmount + withdrawBalanceAmount;
        withdrawBalance.innerText = withdrawTotal;
        
        const TotalBalanceIs = balanceFieldAmount - withdrawAmount;
        BalanceField.innerText = TotalBalanceIs;
      }
      else{
        alert('Please deposit. You Have not enough money')
      }
      // const TotalBalanceIs = balanceFieldAmount - withdrawAmount;
      // console.log(TotalBalanceIs);
    })
    // const balanceTotalForDeposit = document.getElementById('balance-total');
    // const balanceTotalForDepositNumber = parseFloat(balanceTotalForDeposit.innerText);
    // balanceTotalForDeposit.innerText = balanceTotalForDepositNumber + depositTotalNumber;


/* 
document.getElementById("btn-deposit").addEventListener("click", function() {
    // step-2: get the deposit amount from the deposit input field
    // for input field use value to the value inside the input field
    const depositField = document.getElementById("deposit-field");
    const newDepositAmount = parseFloat(depositField.value);
  
    //   step-3: get the current deposit total
    // for non-input(element other than input, textarea) use innertext to get the text
    const depositTotalElemtnt = document.getElementById("deposit-total");
    const preciousDepositTotal = parseFloat(depositTotalElemtnt.innerText);
  
  
  //   step-4: add numbers to set the total deposit
    const currentDepositTotal = preciousDepositTotal + newDepositAmount;
  
  
    depositTotalElemtnt.innerText= currentDepositTotal;
}); */
// console.log(converStringTONumber('deposit-total'));
