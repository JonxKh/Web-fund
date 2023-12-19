const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () => hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.form-box.login form');
    const signupForm = document.querySelector('.form-box.signup form');
    const loginEmailInput = document.querySelector('.form-box.login input[type="text"]');
    const loginPasswordInput = document.querySelector('.form-box.login input[type="password"]');
    const signupEmailInput = document.querySelector('.form-box.signup input[type="text"]');
    const signupPasswordInput = document.querySelector('.form-box.signup input[type="password"]');
    const loginButton = document.querySelector('.form-box.login button[type="submit"]');
    const signupButton = document.querySelector('.form-box.signup button[type="submit"]');

    loginButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission (to avoid page reload)
        // Perform login logic here
        const emailValue = loginEmailInput.value;
        const passwordValue = loginPasswordInput.value;

        if (validateEmailAndPassword(emailValue, passwordValue)) {
            // Simulate a successful login by redirecting to a welcome page
            alert('Login Successfully!.');
            window.location.href = 'LoginMain.html';
        } else {
            // Display an error message
            alert('Invalid email or password. Please try again.');
        }
    });

    signupButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission (to avoid page reload)
        // Perform signup logic here
        const emailValue = signupEmailInput.value;
        const passwordValue = signupPasswordInput.value;

        if (validateEmailAndPassword(emailValue, passwordValue)) {
            // Simulate a successful signup by displaying a success message
            alert('Signup successful! Please login.');
        } else {
            // Display an error message
            alert('Invalid email or password. Please try again.');
        }
    });

    // Function to validate email and password (simple validation for demonstration)
    function validateEmailAndPassword(email, password) {
        // Check if the email contains "@" and has characters both before and after "@"
        const atIndex = email.indexOf('@');
        if (atIndex === -1 || atIndex === 0 || atIndex === email.length - 1) {
            alert('Please enter a valid email address with "@" symbol.');
            return false;
        }

        // Check if the password meets the minimum length requirement
        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return false;
        }

        // For demonstration purposes, check against a specific password requirement
        return true;
    }
});
