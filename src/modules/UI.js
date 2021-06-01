import { ValidationHandler } from './ValidationHandler'

export const UI = (() => {
    // Form
    const form = document.getElementById('practiceForm')

    // Form Inputs
    const emailInput = document.getElementById('mail')
    const countryInput = document.getElementById('country')
    const postcodeInput = document.getElementById('postcode')
    const passwordInput = document.getElementById('pass')
    const passwordConfirmInput = document.getElementById('passConfirm')

    // Form error areas
    const emailError = document.getElementById('mailError')
    const countryError = document.getElementById('countryError')
    const postcodeError = document.getElementById('postcodeError')
    const passwordError = document.getElementById('passwordError')
    const passwordConfirmError = document.getElementById('passwordConfirmError')

    const init = () => {
        _initListeners()
    }

    const _initListeners = () => {
        emailInput.addEventListener('blur', _handleEmail)
        countryInput.addEventListener('blur', _handleCountry)
        postcodeInput.addEventListener('blur', _handlePostcode)
        passwordInput.addEventListener('blur', _handlePassword)
        passwordConfirmInput.addEventListener('blur', _handlePasswordConfirm)

        form.addEventListener('submit', function (event) {
            _handleSubmit(event)
        })
    }

    const displayError = (input, error) => {
        input.textContent = error
    }

    const _handleEmail = () => {
        const valid = ValidationHandler.emailHandle(emailInput)
        if (valid === true) {
            emailError.textContent = ''
        } else {
            displayError(emailError, valid)
        }
    }

    const _handleCountry = () => {
        const valid = ValidationHandler.countryHandle(countryInput)
        if (valid === true) {
            countryError.textContent = ''
        } else {
            displayError(countryError, valid)
        }
    }

    const _handlePostcode = () => {
        const valid = ValidationHandler.postcodeHandle(postcodeInput)
        if (valid === true) {
            postcodeError.textContent = ''
        } else {
            displayError(postcodeError, valid)
        }
    }

    const _handlePassword = () => {
        const valid = ValidationHandler.passwordHandle(passwordInput)
        if (valid === true) {
            passwordError.textContent = ''
        } else {
            displayError(passwordError, valid)
        }
    }

    const _handlePasswordConfirm = () => {
        const valid = ValidationHandler.passwordConfirmHandle(
            passwordConfirmInput,
            passwordInput
        )
        if (valid === true) {
            passwordConfirmError.textContent = ''
        } else {
            displayError(passwordConfirmError, valid)
        }
    }

    const _handleSubmit = (event) => {
        ValidationHandler.submitHandle(
            event,
            emailInput,
            countryInput,
            postcodeInput,
            passwordInput,
            passwordConfirmInput,
            emailError,
            countryError,
            postcodeError,
            passwordError,
            passwordConfirmError
        )
    }

    return {
        init,
        displayError,
    }
})()
