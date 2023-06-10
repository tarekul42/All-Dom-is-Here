function updatePhoneNumber(isIncrease){
    const caseNumberField = document.getElementById('phone-input-field');
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


function updatePhoneNumberTotalPrice(newPhoneNumber){
    const caseTotalPrice = newPhoneNumber * 1219;
    const caseTotalElement = document.getElementById('phone-Total');
    caseTotalElement.innerText = caseTotalPrice;
}

function getTextElementValueById(elementId){
// calculate total
const phoneTotalElement = document.getElementById(elementId);
const currentPhoneTotalString = phoneTotalElement.innerText;
const currentPhoneTotal = parseInt(currentPhoneTotalString)
return currentPhoneTotal;
}

function calculateSubTotal(){
    const currentPhoneTotal = getTextElementValueById('phone-Total');
    const currentCaseTotal = getTextElementValueById('case-Total');
    
    const currentSubTotal = currentCaseTotal + currentPhoneTotal;
    
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currentSubTotal;

}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newCaseNumber = updatePhoneNumber(true);
    updatePhoneNumberTotalPrice(newCaseNumber);

    // calculate  total
    calculateSubTotal();

})


document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newCaseNumber = updatePhoneNumber(false)
    updatePhoneNumberTotalPrice(newCaseNumber);
    calculateSubTotal();
})

document.getElementById('final-total').addEventListener('click', function(){
    const totalPrice = document.getElementById('phone-Total');
    const totalPriceString = totalPrice.innerText;
    const totatPriceCost = parseInt(totalPriceString);

    const cost = totatPriceCost + document.getElementById('phone-Total') ;
    totalPrice.innerText = cost;

})