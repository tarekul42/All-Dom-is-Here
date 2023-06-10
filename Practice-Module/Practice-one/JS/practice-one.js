function makeToParseFloat(stringId){
    const maximumValue = document.getElementById(stringId);
    const maximumValueString = maximumValue.innerText;
    const maxValueTotal = parseFloat(maximumValueString)
    return maxValueTotal;
}

function discountApply(PriceId){
    let discountPrice =  PriceId * 0.3 ;
    return discountPrice;
}

function setNewValueInPrevious(ElemntId, newValue){
    const previousValue = document.getElementById(ElemntId);
    previousValue.innerText = newValue;
}

document.getElementById('apply-button').addEventListener('click', function(){
    const priceMaximum = makeToParseFloat('maximum-Price')
    const PriceDiscountAmount = priceMaximum * 0.3 ;

    const afterApplyDiscount = priceMaximum - PriceDiscountAmount;

    setNewValueInPrevious('total-price', afterApplyDiscount)

    // console.log(afterApplyDiscount);

})

// console.log(makeToParseFloat('maximum-Price'));
// console.log(discountApply('maximum-Price'));
