// make ready function
function takeThevalue(idName){
const textField = document.getElementById(idName);
const textFieldValueString = textField.value;
const textFieldValue = parseFloat(textFieldValueString);
textField.value = '';
if(isNaN(textField)){
    alert('please provide a valid number')
    return;
}
return textFieldValue;
};

function takeTheInnertext(idName){
const textField = document.getElementById(idName);
const textFieldValueString = textField.innerText;
const textFieldinnertext = parseFloat(textFieldValueString);
return textFieldinnertext;
};

function setValue(idName, newValue){
document.getElementById(idName).innerText = newValue;
};

// deposit related kandokarkhana ekhane shob
document.getElementById('btn-deposit').addEventListener('click', function(){
const depositField = takeThevalue('deposit-field');
const depositTotal = takeTheInnertext('deposit-total');
const totalDeposit = depositField + depositTotal;
setValue('deposit-total', totalDeposit);

const previousBalanceField = takeTheInnertext('balance-total');
const totalBalance = previousBalanceField + depositField;
setValue('balance-total', totalBalance);
});

// withdraw related kandokarkhana ekhane shob
document.getElementById('btn-withdraw').addEventListener('click', function(){
const withdrawField = takeThevalue('withdraw-field');
const withdrawTotal = takeTheInnertext('withdraw-total');
const totalWithdraw = withdrawField + withdrawTotal;
setValue('withdraw-total', totalWithdraw);

const previousBalanceField = takeTheInnertext('balance-total');
const totalBalance = previousBalanceField - withdrawField;
setValue('balance-total', totalBalance); 
});