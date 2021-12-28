const registerForm = document.getElementById('register-form');
console.log(registerForm);



registerForm.addEventListener('submit', function (e) {
    // preventDefault() prevents the default behavior of the submitted form
    e.preventDefault();

    const emailInput = document.getElementById('InputEmail');
    const passwordInput = document.getElementById('InputPassword');
    const formMasseges = document.getElementById('messages');
    const termsCheck = document.getElementById('check');
    let errorMessages = '';

    if (emailInput.value === '') {
        errorMessages += 'Email field is required <br>';

    }

    if (passwordInput.value === '') {
        errorMessages += 'Password field is required <br>';

    }

    if (passwordInput.value != '' && passwordInput.value.length < 6) {
        errorMessages += 'Password must be minimum 6 characters long<br>';
    }
    if (termsCheck.checked != true) {
        errorMessages += 'You must agree to the terms<br>';
    }
    console.log(errorMessages)

    if (errorMessages) {
        formMasseges.innerHTML = `<div class="alert alert-danger" role="alert">
        ${errorMessages}
        </div>`;
    }
    else {
        formMasseges.innerHTML = `<div class="alert alert-success" role="alert">
        Form is submitted. You are registered now!
        </div>`;
    }
});

let birthYearOptions = '';
//show year order by Desc - 1920 to 2021 -
// for (let year=1920 ; year <= 2021; year++) {
//     if(year===1990){
//         birthYearOptions += `<option selected>${year}</option>`
//     }
//     else{
//         birthYearOptions += `<option>${year}</option>`;
//     }
   
// }

//show year order by Acse - 2021 to 1920 -
for (let year=2021 ; year >= 1920; year--) {
    if(year===1990){
        birthYearOptions += `<option selected>${year}</option>`
    }
    else{
        birthYearOptions += `<option>${year}</option>`;
    }
   
}
// console.log(birthYearOptions);
document.getElementById('birthYear').innerHTML = birthYearOptions;