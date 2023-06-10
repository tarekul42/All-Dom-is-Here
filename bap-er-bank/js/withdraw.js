//  step-1 :
document.getElementById("btn-withdraw").addEventListener("click", function() {
    // step-2:
    const withdrawField = document.getElementById("Withdraw-field");
    const newWithdrawAmount = parseFloat(withdrawField.value);

        //   step-7: clear the deposit field
        withdrawField.value = ''

        if(isNaN(newWithdrawAmount)){
            alert('please provide a valid number')
            return;
        }
  
    //   step-3: get the current deposit total
    // for non-input(element other than input, textarea) use innertext to get the text
    const withdrawTotalElemtnt = document.getElementById("withdraw-value");
    const preciousWithdrawTotal = parseFloat(withdrawTotalElemtnt.innerText);
  
  
    //   step-5: get ballance current total
    
  
    const balanceTotalField = document.getElementById("deposit-total");
    const newTotalAmount = parseFloat(balanceTotalField.innerText);
    
    //   step-7: clear the deposit field
      withdrawField.value = ''

    if(newWithdrawAmount > preciousWithdrawTotal){
        alert('Baaaper bank e ato taka nai')
        return;
    }
    
    //   step-4: add numbers to set the total deposit
      const currentWithdrawTotal = preciousWithdrawTotal + newWithdrawAmount;
    
    
      withdrawTotalElemtnt.innerText= currentWithdrawTotal;
    
    //   step-6: calculate current total balance
    
  const currentBalanceTotal = newTotalAmount - newWithdrawAmount;
  
  // set the balance total
  
  balanceTotalField.innerText = currentBalanceTotal;
  });
  