export const ValidationHandler = (() => {

    const _determineError = (input, typeString) => {
        if (input.validity.valueMissing) {
            if (typeString === 'email address') {
                return `Please enter an ${ typeString }.`;
            } else {
                return `Please enter a ${ typeString }.`;
            }
        } else if (input.validity.typeMismatch) {
            return `Please enter a valid ${ typeString }.`;
        } else if (input.validity.patternMismatch) {
            return `Please enter a valid ${ typeString }.`;
        } else if (input.validity.tooShort) {
            return `Your ${ typeString } should be at least ${ input.minLength } characters long.`;
        }
    };

    const emailHandle = (emailInput) => {
        if (emailInput.validity.valid) {
            return true;
        } else {
            return _determineError(emailInput, 'email address');
        }
    };
    
    const countryHandle = (countryInput) => {
        if (countryInput.validity.valid) {
            return true;
        } else {
            return _determineError(countryInput, 'country');
        }
    };

    const postcodeHandle = (postcodeInput) => {
        if (postcodeInput.validity.valid) {
            return true;
        } else {
            return _determineError(postcodeInput, 'postcode');
        }
    };

    const passwordHandle = (passwordInput) => {
        if (passwordInput.validity.valid) {
            return true;
        } else {
            return _determineError(passwordInput, 'password');
        }
    };

    const passwordConfirmHandle = (passwordConfirmInput, passwordInput) => {
        if (passwordConfirmInput.validity.valid && (passwordConfirmInput.value === passwordInput.value)) {
            return true;
        } else {
            if (passwordConfirmInput.value !== passwordInput.value) {
                return 'Password and password confirmation do not match.';
            } else {
                return _determineError(passwordConfirmInput, 'password');
            }
        }
    };

    const submitHandle = (form) => {
        if (!(emailHandle() === true)) {

        }
    };

    return {
        emailHandle,
        countryHandle,
        postcodeHandle,
        passwordHandle,
        passwordConfirmHandle,
        submitHandle,
    }

})();