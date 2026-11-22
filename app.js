
const loginForm = document.getElementById("loginForm");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const message = document.getElementById("message");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (email === "" || password === "") {

        message.textContent = "Please fill in all fields.";

        return;
    }

    if (!emailInput.validity.valid) {

        message.textContent = "Please enter a valid email.";

        return;
    }

    if (password.length < 8) {

        message.textContent = "Password must contain at least 8 characters.";

        return;
    }

    message.textContent = "Input validation successful!";
    

});
const userInput = document.getElementById("userInput");
const testButton = document.getElementById("testButton");
const output = document.getElementById("output");

testButton.addEventListener("click", function() {

    const inputValue = userInput.value;

    output.textContent = inputValue;

});
