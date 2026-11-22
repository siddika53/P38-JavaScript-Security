
// Get HTML elements
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

// Display message safely
function showMessage(text) {
    message.textContent = text;
}

// Check password strength
function checkPasswordStrength(password) {

    if (password.length < 8) {
        return false;
    }

    const hasNumber = /[0-9]/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);

    return hasNumber && hasLetter;
}

// Handle login form
loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // Check empty fields
    if (email === "" || password === "") {
        showMessage("Please fill in all fields.");
        return;
    }

    // Check email format
    if (!emailInput.validity.valid) {
        showMessage("Please enter a valid email.");
        return;
    }

    // Check password strength
    if (!checkPasswordStrength(password)) {
        showMessage(
            "Password must contain 8 characters, letters and numbers."
        );
        return;
    }

    showMessage("Input validation successful!");

});

// Security testing
const userInput = document.getElementById("userInput");
const testButton = document.getElementById("testButton");
const output = document.getElementById("output");

testButton.addEventListener("click", function() {

    const inputValue = userInput.value;

    output.textContent = inputValue;

});
