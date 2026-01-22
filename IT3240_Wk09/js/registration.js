/* JavaScript for the week 9 registration.html file. 
   This script provides form validation including password matching and HTML5 validation.
 */

/**
 * Configures form validation for the registration form
 * Sets up event listeners and prevents default form submission
 * 
 * CHANGES MADE:
 * - Implemented event listener on submit button to validate form
 * - Prevents form submission to keep user on same page
 * - Calls checkPassword() to validate password fields match
 * - Uses form.checkValidity() for HTML5 validation
 * - Displays validation messages in result div without alerts/popups
 * - Uses reportValidity() to show native browser validation messages
 */
const configureFormValidation = function() {
    // Block form submission - need to stay on same page. Note use of action="#", too, in the HTML
    // CHANGE: Prevent default form submission behavior
    document.getElementsByTagName("form").item(0).onsubmit = function(event) {
        event.preventDefault();
    }
    const submitButton = document.getElementById("reg-submit-button")
    submitButton.addEventListener("click", function() {
        // Find the form by id and save the form object to a variable
        // CHANGE: Get form element to access validation methods
        const form = document.getElementById("reg-form")

        // Get the div with the id reg-result-message and save it to a variable
        // CHANGE: Get result message div to display validation feedback
        const resultMessage = document.getElementById("reg-result-message")

        // Call the checkPassword() function to make sure input in the password fields is valid & that they  match.
        // CHANGE: Validate passwords match and meet requirements
        const passwordsValid = checkPassword()

        /* Use the form's checkValidity() function to validate the form's input. Display an appropriate message
           in the div for the result message. Don't use an alert or popup for the message.
         */
        
        // Check if both form validation and password check pass
        // CHANGE: Combine HTML5 validation with custom password validation
        if (form.checkValidity() && passwordsValid) {
            // CHANGE: Display success message in green when all validation passes
            resultMessage.textContent = "Registration successful!"
            resultMessage.style.color = "green"
        } else {
            // CHANGE: Display error message in red when validation fails
            resultMessage.textContent = "Please correct the errors in the form."
            resultMessage.style.color = "red"
            // reportValidity() will show native browser validation messages
            // CHANGE: Show browser's built-in validation messages near input fields
            form.reportValidity()
            
            // Find and focus on the first invalid field
            // CHANGE: Set focus on first erroneous field for better user experience
            const firstInvalidField = form.querySelector(':invalid')
            if (firstInvalidField) {
                firstInvalidField.focus()
            }
        }
    })
}

/**
 * Validates password fields to ensure they meet requirements and match
 * @returns {boolean} - Returns true if passwords are valid and match, false otherwise
 * 
 * CHANGES MADE:
 * - Implemented password field validation using checkValidity()
 * - Clears custom validity before checking to reset error states
 * - Compares password and verify password fields using strict equality (===)
 * - Sets custom validity message when passwords don't match
 * - Returns boolean to indicate validation success/failure
 */
const checkPassword = function() {
    const passwordField = document.getElementById("reg-password-input")
    const verifyPasswordField = document.getElementById("reg-password-verify-input")
    /* Clear custom validity property for password fields before checking the validity of the form */
    // CHANGE: Reset custom validity to clear any previous error messages
    passwordField.setCustomValidity("")
    verifyPasswordField.setCustomValidity("")
    // Complete code compare password & verify password.
    // Use JavaScript's checkValidity() to confirm that the requirements in the HTML have been met.
    // When comparing the values in the password and password verification fields, use ===
    // Use setCustomValidity() to assign an error string when there is a problem.
    // Setting the custom validity to an empty string means the input is valid
    
    // Check if password field meets HTML5 validation requirements (required, minlength)
    // CHANGE: Validate password meets required and minlength="8" attributes
    if (!passwordField.checkValidity()) {
        return false
    }
    
    // Check if verify password field meets HTML5 validation requirements
    // CHANGE: Validate verify password field is not empty (required attribute)
    if (!verifyPasswordField.checkValidity()) {
        return false
    }
    
    // Compare password and verify password fields
    // CHANGE: Use strict equality to ensure passwords match exactly
    if (passwordField.value !== verifyPasswordField.value) {
        // Set custom validity message for mismatch
        // CHANGE: Set custom error message to display when passwords don't match
        verifyPasswordField.setCustomValidity("Passwords do not match")
        return false
    }
    
    // All validations passed
    // CHANGE: Return true when all password validations succeed
    return true
}

/**
 * Window onload event handler to initialize form validation
 * 
 * CHANGES MADE:
 * - Implemented window.onload to ensure DOM is fully loaded
 * - Calls configureFormValidation() to set up event listeners
 */
// Event handler called when page has loaded
window.onload = () => {
    // Add code here to call function to configure validation when page has loaded
    // CHANGE: Initialize form validation when DOM is ready
    configureFormValidation()
}