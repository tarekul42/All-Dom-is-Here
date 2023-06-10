//     //                           button withdraw

//     document.getElementById('btn-withdraw').addEventListener('click',function(){


//         const withdrawField =  document.getElementById('withdraw-field');
//         const withdrawFieldString = withdrawField.value;
//         const withdrawAmount = parseFloat(withdrawFieldString)
  
//         // console.log(withdrawAmount);
  
  
//         withdrawField.value = '';
  
  
//         const withdrawBalance = document.getElementById('withdraw-total');
//         const withdrawBalanceString = withdrawBalance.innerText;
//         const withdrawBalanceAmount = parseFloat(withdrawBalanceString);
//         // console.log(withdrawBalanceAmount);
//         // console.log(withdrawTotal);
//         const BalanceField = document.getElementById('balance-total');
//         const BalanceFieldString = BalanceField.innerText;
//         const balanceFieldAmount = parseFloat(BalanceFieldString);
//         // console.log(balanceFieldAmount);
//         if(balanceFieldAmount >= withdrawAmount ){
//           const withdrawTotal = withdrawAmount + withdrawBalanceAmount;
//           withdrawBalance.innerText = withdrawTotal;
//           const TotalBalanceIs = balanceFieldAmount - withdrawAmount;
//           BalanceField.innerText = TotalBalanceIs;
//         }
//         else{
//           alert('Please deposit. You Have not enough money')
//         }
//         // const TotalBalanceIs = balanceFieldAmount - withdrawAmount;
//         // console.log(TotalBalanceIs);
//       })
//       // const balanceTotalForDeposit = document.getElementById('balance-total');
//       // const balanceTotalForDepositNumber = parseFloat(balanceTotalForDeposit.innerText);
//       // balanceTotalForDeposit.innerText = balanceTotalForDepositNumber + depositTotalNumber;
//   })