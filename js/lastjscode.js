// ------------------------------------
// utilities file
// ------------------------------------
// ==========get value===========
function inputValue(idName){
  const input = document.getElementById(idName);
  const inputValueString = input.value;
  const inputValue = parseFloat(inputValueString);
  return inputValue;
}
// ===========get innerText===========
function inputInnertext(idName){
  const input = document.getElementById(idName);
  const inputValueString = input.innerText;
  const inputValue = parseFloat(inputValueString);
  return inputValue;
}
// ===========get innerText===========
function setInnertext(idName, newValue){
  document.getElementById(idName).innerText = newValue;
}
// ==========set value===========
function setValue(idName, newValue){
  document.getElementById(idName).value = newValue;
}
// -------------------------------------
// mobaile minus button
// -------------------------------------
document.getElementById('btn-phone-minus').addEventListener('click', function(){
  const mobaileInput = inputValue('phone-input-field');
  if(mobaileInput < 1){
    alert('You are kidding me !!!')
    return;
  }
  const newMobaileInputValue = mobaileInput - 1;
  setValue('phone-input-field', newMobaileInputValue);

  inputInnertext('phone-Total');
  const mobaileNewPrice = 1219 * newMobaileInputValue;
  setInnertext('phone-Total', mobaileNewPrice)
});
// ----------------------------------------
// case in minus button
// -----------------------------------------
document.getElementById('btn-case-minus').addEventListener('click', function(){
  const caseInput = inputValue('case-number-field');
  if(caseInput < 1){
    alert('You are kidding me !!!')
    return;
  }
  const newCaseInputValue = caseInput - 1;
  const newMobaileInputValueset = setValue('case-number-field', newCaseInputValue);

  inputInnertext('case-Total');
  const caseNewPrice = 59 * newCaseInputValue;
  setInnertext('case-Total', caseNewPrice)
});

  // -------------------------------------------------
  // mobaile plus button
  // -----------------------------------------------
  document.getElementById('btn-phone-plus').addEventListener('click', function(){

    const mobaileInput = inputValue('phone-input-field');
    const newMobaileInputValue = mobaileInput + 1;
    setValue('phone-input-field', newMobaileInputValue)

    inputInnertext('phone-Total');
    const mobaileNewPrice = 1219 * newMobaileInputValue;
    setInnertext('phone-Total', mobaileNewPrice)
  });
  // ----------------------------------------
// case in plus button
// -----------------------------------------
document.getElementById('btn-case-plus').addEventListener('click', function(){
  const caseInput = inputValue('case-number-field');
  const newCaseInputValue = caseInput + 1;
  setValue('case-number-field', newCaseInputValue);

  const getCasePriceId = inputInnertext('case-Total');
  const caseNewPrice = 59 * newCaseInputValue;
  setInnertext('case-Total', caseNewPrice)
});

// ---------------------------------------------
// check out button
// ---------------------------------------------
document.getElementById('check-out-button').addEventListener('click', function(){
  const mobailePrice = inputInnertext('phone-Total');
  const casePrice = inputInnertext('case-Total');
  const totalPrice = mobailePrice + casePrice;
  setInnertext('sub-total', totalPrice);
  setInnertext('final-total', totalPrice);
})