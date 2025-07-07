import formValidation from './form-validation.js';
const formHandling = formValidation();

export default function eventHandler() {
  const form = document.querySelector('form');
  const emailInput = document.getElementById('email');
  const postalCodeInput = document.getElementById('postal-code');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');

  emailInput.addEventListener('keyup', () => {
    formHandling.validateEmail();
  });

  postalCodeInput.addEventListener('keyup', () => {
    formHandling.checkPostalCode();
  });

  passwordInput.addEventListener('keyup', () => {
    formHandling.checkPassword();
  });

  confirmPasswordInput.addEventListener('keyup', () => {
    formHandling.checkPassword();
  });

  const submitButton = document.querySelector('.submit-btn');
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
    }
  });
}
