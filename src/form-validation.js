export default function formValidation() {
  const validateEmail = () => {
    const emailInput = document.getElementById('email');
    const errorMessageElement = document.querySelector('.email-error-message');
    const constraints = [
      '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
      'Please insert a valid email address',
    ];
    const constraint = new RegExp(constraints[0], '');
    if (constraint.test(emailInput.value)) {
      emailInput.setCustomValidity('');
      errorMessageElement.innerText = '';
      emailInput.classList.remove('invalid');
      emailInput.classList.add('valid');
      return;
    } else {
      emailInput.setCustomValidity(constraints[1]);
      errorMessageElement.innerText = constraints[1];
      emailInput.classList.add('invalid');
      emailInput.classList.remove('valid');
    }
  };

  const checkPostalCode = () => {
    const country = document.getElementById('country').value;
    const postalCodeInput = document.getElementById('postal-code');
    const errorMessageElement = document.querySelector('.pc-error-message');
    const constraints = {
      at: [
        '^\\d{4}$',
        "Austria's postal code format consists of four digits, e.g 1234.",
      ],
      be: [
        '^\\d{4}$',
        "Belgium's postal code format consists of four digits, e.g 1234.",
      ],
      de: [
        '^\\d{5}$',
        "Germany's postal code format consists of five digits, e.g 12345.",
      ],
      es: [
        '^\\d{5}$',
        "Spains's postal code format consists of five digits, e.g 12345.",
      ],
      fr: [
        '^\\d{5}$',
        "France's postal code format consists of five digits, e.g 12345.",
      ],
      gb: [
        '^[A-Z]{1,2}d[A-Zd]? \\d[A-Z]{2}$',
        "United Kingdom's postal code format may consist of one or two letters, one or two digits, a space, and then one or two digits followed by two letters.",
      ],
      ie: [
        '^\\[A-Z]{1}[0-9]{1}[A-Z]{1} \\d{1}[A-Z]{2}d{1}$',
        "Ireland's postal code format consists of: one letter, one number, one letter, a space, one number, and two letters.",
      ],
      it: ['^\\d{5}$', "Italy's postal code format consists of five digits."],
      nl: [
        '^\\d{4}[A-Z]{2}$',
        "Netherland's postal code format consists of four digits, a space, and then two letters.",
      ],
      ch: [
        '^\\d{5}$',
        "Switzerland's postal code format consists of five digits.",
      ],
    };
    const constraint = new RegExp(constraints[country][0], '');

    if (constraint.test(postalCodeInput.value)) {
      postalCodeInput.setCustomValidity('');
      errorMessageElement.innerText = '';
      postalCodeInput.classList.remove('invalid');
      postalCodeInput.classList.add('valid');
    } else {
      postalCodeInput.setCustomValidity(constraints[country][1]);
      errorMessageElement.innerText = constraints[country][1];
      postalCodeInput.classList.add('invalid');
      postalCodeInput.classList.remove('valid');
    }
  };

  const checkPassword = () => {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const errorMessageElement = document.querySelector(
      '.password-error-message'
    );
    if (passwordInput.value === confirmPasswordInput.value) {
      passwordInput.setCustomValidity('');
      confirmPasswordInput.setCustomValidity('');
      passwordInput.classList.remove('invalid');
      passwordInput.classList.add('valid');
      confirmPasswordInput.classList.remove('invalid');
      confirmPasswordInput.classList.add('valid');
      errorMessageElement.innerText = '';
      return;
    } else {
      passwordInput.setCustomValidity(
        'Passwords do not match. Please make sure both password fields are identical.'
      );
      confirmPasswordInput.setCustomValidity(
        'Passwords do not match. Please make sure both password fields are identical.'
      );
      errorMessageElement.innerText =
        'Passwords do not match. Please make sure both password fields are identical.';
      passwordInput.classList.add('invalid');
      passwordInput.classList.remove('valid');
      confirmPasswordInput.classList.add('invalid');
      confirmPasswordInput.classList.remove('valid');
    }
  };

  return { validateEmail, checkPostalCode, checkPassword };
}
