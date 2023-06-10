// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get th eemail address in the input field
    // always remember to usse value to gset text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get password
    // 3.a : set id on the html element 
    // 3.b : get the element 
    // 3.c : get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // step-4:verify email and password
    if(email === 'sontan@gmail.com' && password === 'secret'){
        window.location.href = 'bank.html'
    }
    else{
        alert('Invalid user')
    }

})