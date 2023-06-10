function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldString = caseNumberField.value ;
    const previousCaseNumber = parseInt(caseNumberFieldString);
    let newCaseNumber ;
    if(isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
        }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}
function updateCaseNumberTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-Total');
    caseTotalElement.innerText = caseTotalPrice;
}

function getTextElementValueById(elementId){
    
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString)
    return currentPhoneTotal;
    }

    function setTextElementValueById(elementId, value){
        const subTotalElement = document.getElementById(elementId);
        subTotalElement.innerText = value;

    }
    
    function calculateSubTotal(){
        // calculate  total
        const currentPhoneTotal = getTextElementValueById('phone-Total');
        const currentCaseTotal = getTextElementValueById('case-Total');
        
        const currentSubTotal = currentCaseTotal + currentPhoneTotal;

        setTextElementValueById('sub-total', currentSubTotal);
        

        // calculate tax
        const taxAmount = currentSubTotal * 0.1;
        setTextElementValueById('tax-amount', taxAmount);

        const finalAmount = currentSubTotal + taxAmount;
        setTextElementValueById('final-total', finalAmount)

    
    }

document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
    updateCaseNumberTotalPrice(newCaseNumber);
    calculateSubTotal();
})
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false)
    updateCaseNumberTotalPrice(newCaseNumber);
    calculateSubTotal();
})

