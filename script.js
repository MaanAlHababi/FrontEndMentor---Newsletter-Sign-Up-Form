const signUpPage = document.getElementById('newsletter-sign-up');
const successMessage = document.getElementById('success-message');

const subscriptionForm = document.getElementById('subscription-form');
const emailInputField = document.getElementById('email-input-field');

const errorMsg = document.getElementById('error-msg');

const dismissMessageBtn = document.getElementById('dismiss-msg-btn');

const userInputBold = document.getElementById('user-input-bold');

const togglePage = () => {
    signUpPage.classList.toggle('hidden');
    if (emailInputField.classList.contains('error')) {
        emailInputField.classList.remove('error');
        errorMsg.classList.toggle('hidden');
    }
    successMessage.classList.toggle('hidden');
}

const updateConfirmationMsg = (userEmail) => {
    userInputBold.innerText = userEmail;
}

const throwError = () => {
    if (!emailInputField.classList.contains('error')) {
        emailInputField.classList.add('error');
        errorMsg.classList.toggle('hidden');
    }
}

const validateEmailFormat = (email) => {
    const emailFormatRegex = /^[\w]+@[\w]+\.[\w]{2,}$/i;
    return emailFormatRegex.test(email);
}

subscriptionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = Object.fromEntries(new FormData(e.target));

    if (validateEmailFormat(emailInput.email)) {
        updateConfirmationMsg(emailInput.email);
        togglePage();
    } else {
        throwError();
    }
});

dismissMessageBtn.addEventListener('click', togglePage);