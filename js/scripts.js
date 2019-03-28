(function() {
    // VARIABLES
    var $form = document.querySelector('#contact-form');
    var $emailInput = document.querySelector('#contact-email');
    var $phoneInput = document.querySelector('#contact-tel');
    var $messageInput = document.querySelector('#contact-mes');

    // validates input in email form
    function validateEmail() {
        var value = $emailInput.value;

        if (!value) {
            showErrorMessage($emailInput, 'Email required');
            return false;
        }

        if (value.indexOf('@') === -1 || value.indexOf('.') === -1) {
            showErrorMessage($emailInput, 'Enter a valid e-mail: example@here.com');
            return false;
        }

        showErrorMessage($emailInput, null);
        return true;
    }

    // validates input in phone form
    function validatePhone() {
        var value = $phoneInput.value;

        if (/\D/.test(value)) {
            showErrorMessage($phoneInput, 'Enter a valid Phone number: 123-123-1234');
            return false;
        }

        showErrorMessage($phoneInput, null);
        return true;
    }

    // validates input in message form
    function validateMessage() {
        var value = $messageInput.value;

        if (!value) {
            showErrorMessage($messageInput, 'Message required');
            return false;
        }

        showErrorMessage($messageInput, null);
        return true;
    }

    // error messages
    function showErrorMessage($input, message) {
        var $container = $input.parentElement;
        var error = $container.querySelector('.error-message');

        if (error) {
            $container.removeChild(error);
        }

        if (message) {
            error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            $container.appendChild(error);
        }
    }

    function validateForm() {
        var isValidEmail = validateEmail();
        var isValidPhone = validatePhone();
        var isValidMessage = validateMessage();
        return isValidEmail && isValidPhone && isValidMessage;
    }

    $form.addEventListener('submit', (e) => {
        e.preventDefault(); // Do not submit to the server
        if (validateForm()) {
            alert('Success!');
        }
    });

    $emailInput.addEventListener('input', validateEmail);
    $phoneInput.addEventListener('input', validatePhone);
    $messageInput.addEventListener('input', validateMessage);
})();
