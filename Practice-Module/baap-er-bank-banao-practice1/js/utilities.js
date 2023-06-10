// duration 8:44 
// lasst video module

function getInputFieldValueById(inputId){
    var inputField = document.getElementById(inputId);
    var inputFieldString = inputField.value ;
    var inputFieldAmount = parseFloat(inputFieldString);
    inputField.value = '';
    return inputFieldAmount;
}
function getElementFieldValueById(elementId){
    var inputField = document.getElementById(elementId);
    var inputFieldString = inputField.innerText;
    var inputFieldAmount = parseFloat(inputFieldString);
    return inputFieldAmount;
}
function addNewNumber(inputId, NewNumber){
    var NewNumberAmount = document.getElementById(inputId)
    NewNumberAmount.innerText = NewNumber;
}