console.log("JavaScript connected!");

const form = document.getElementById("registrationForm");

// ==================== FORM SUBMIT ====================

form.addEventListener("submit", function (event) {

    event.preventDefault();

    console.log("Form submitted!");

    // Full Name
    const name = document.getElementById("name").value.trim();
    const nameError = document.getElementById("nameError");
    const nameInput = document.getElementById("name");

    nameInput.classList.remove("valid", "invalid");

    if (name === "") {
        nameError.textContent = "Please enter your full name.";
        nameInput.classList.add("invalid");

    } else if (!/^[A-Za-z ]+$/.test(name)) {
        nameError.textContent = "Name should contain only letters.";
        nameInput.classList.add("invalid");

    } else {
        nameError.textContent = "";
        nameInput.classList.add("valid");
    }


    // Email
    const email = document.getElementById("email").value.trim();
    const emailError = document.getElementById("emailError");
    const emailInput = document.getElementById("email");

    emailInput.classList.remove("valid", "invalid");

    if (email === "") {
        emailError.textContent = "Please enter your email address.";
        emailInput.classList.add("invalid");

    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        emailInput.classList.add("invalid");

    } else {
        emailError.textContent = "";
        emailInput.classList.add("valid");
    }


    // Mobile Number
    const mobile = document.getElementById("mobile").value.trim();
    const mobileError = document.getElementById("mobileError");
    const mobileInput = document.getElementById("mobile");

    mobileInput.classList.remove("valid", "invalid");

    if (mobile === "") {
        mobileError.textContent = "Please enter your mobile number.";
        mobileInput.classList.add("invalid");

    } else if (!/^[0-9]{10}$/.test(mobile)) {
        mobileError.textContent = "Mobile number must contain exactly 10 digits.";
        mobileInput.classList.add("invalid");

    } else {
        mobileError.textContent = "";
        mobileInput.classList.add("valid");
    }


    // College
    const college = document.getElementById("college").value.trim();
    const collegeError = document.getElementById("collegeError");
    const collegeInput = document.getElementById("college");

    collegeInput.classList.remove("valid", "invalid");

    if (college === "") {
        collegeError.textContent = "Please enter your college name.";
        collegeInput.classList.add("invalid");

    } else if (!/^[A-Za-z. ]+$/.test(college)) {
        collegeError.textContent = "College name should contain only letters.";
        collegeInput.classList.add("invalid");

    } else {
        collegeError.textContent = "";
        collegeInput.classList.add("valid");
    }


    // Course
    const course = document.getElementById("course").value;
    const courseError = document.getElementById("courseError");
    const courseInput = document.getElementById("course");

    courseInput.classList.remove("valid", "invalid");

    if (course === "") {
        courseError.textContent = "Please select your course.";
        courseInput.classList.add("invalid");

    } else {
        courseError.textContent = "";
        courseInput.classList.add("valid");
    }


    // Year
    const year = document.getElementById("year").value;
    const yearError = document.getElementById("yearError");
    const yearInput = document.getElementById("year");

    yearInput.classList.remove("valid", "invalid");

    if (year === "") {
        yearError.textContent = "Please select your year.";
        yearInput.classList.add("invalid");

    } else {
        yearError.textContent = "";
        yearInput.classList.add("valid");
    }


    // Password
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");
    const passwordInput = document.getElementById("password");

    passwordInput.classList.remove("valid", "invalid");

    if (password === "") {
        passwordError.textContent = "Please enter a password.";
        passwordInput.classList.add("invalid");

    } else if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        passwordInput.classList.add("invalid");

    } else if (!/[A-Z]/.test(password)) {
        passwordError.textContent = "Password must contain an uppercase letter.";
        passwordInput.classList.add("invalid");

    } else if (!/[a-z]/.test(password)) {
        passwordError.textContent = "Password must contain a lowercase letter.";
        passwordInput.classList.add("invalid");

    } else if (!/[0-9]/.test(password)) {
        passwordError.textContent = "Password must contain a number.";
        passwordInput.classList.add("invalid");

    } else {
        passwordError.textContent = "";
        passwordInput.classList.add("valid");
    }


    // Confirm Password
    const confirmPassword = document.getElementById("confirmPassword").value;
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    confirmPasswordInput.classList.remove("valid", "invalid");

    if (confirmPassword === "") {
        confirmPasswordError.textContent = "Please confirm your password.";
        confirmPasswordInput.classList.add("invalid");

    } else if (confirmPassword !== password) {
        confirmPasswordError.textContent = "Passwords do not match.";
        confirmPasswordInput.classList.add("invalid");

    } else {
        confirmPasswordError.textContent = "";
        confirmPasswordInput.classList.add("valid");
    }


    // Terms & Conditions
    const terms = document.getElementById("terms");
    const termsError = document.getElementById("termsError");

    if (!terms.checked) {
        termsError.textContent = "Please accept the terms and conditions.";

    } else {
        termsError.textContent = "";
    }


    // Check if form is valid
    const errors = document.querySelectorAll("small");

    let hasError = false;

    errors.forEach(function (error) {

        if (error.textContent !== "") {
            hasError = true;
        }

    });

    const successMessage = document.getElementById("successMessage");

    if (!hasError) {
        successMessage.textContent = "Registration Successful!";
    } else {
        successMessage.textContent = "";
    }

});


// ==================== RESET ====================

form.addEventListener("reset", function () {

    document.querySelectorAll("small").forEach(function (error) {
        error.textContent = "";
    });

    document.querySelectorAll("input, select").forEach(function (input) {
        input.classList.remove("valid", "invalid");
    });

    document.getElementById("successMessage").textContent = "";

    document.getElementById("togglePassword").textContent = "👁";
    document.getElementById("toggleConfirmPassword").textContent = "👁";

});


// ==================== REAL-TIME EMAIL ====================

const emailInput = document.getElementById("email");

emailInput.addEventListener("blur", function () {

    const email = emailInput.value.trim();
    const emailError = document.getElementById("emailError");

    emailInput.classList.remove("valid", "invalid");

    if (email === "") {

        emailError.textContent = "Please enter your email address.";
        emailInput.classList.add("invalid");

    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

        emailError.textContent = "Please enter a valid email address.";
        emailInput.classList.add("invalid");

    } else {

        emailError.textContent = "";
        emailInput.classList.add("valid");

    }

});


// ==================== REAL-TIME MOBILE ====================

const mobileInput = document.getElementById("mobile");

mobileInput.addEventListener("blur", function () {

    const mobile = mobileInput.value.trim();
    const mobileError = document.getElementById("mobileError");

    mobileInput.classList.remove("valid", "invalid");

    if (mobile === "") {

        mobileError.textContent = "Please enter your mobile number.";
        mobileInput.classList.add("invalid");

    } else if (!/^[0-9]{10}$/.test(mobile)) {

        mobileError.textContent = "Mobile number must contain exactly 10 digits.";
        mobileInput.classList.add("invalid");

    } else {

        mobileError.textContent = "";
        mobileInput.classList.add("valid");

    }

});


// ==================== REAL-TIME PASSWORD ====================

const passwordInput = document.getElementById("password");

passwordInput.addEventListener("blur", function () {

    const password = passwordInput.value;
    const passwordError = document.getElementById("passwordError");

    passwordInput.classList.remove("valid", "invalid");

    if (password === "") {

        passwordError.textContent = "Please enter a password.";
        passwordInput.classList.add("invalid");

    } else if (password.length < 8) {

        passwordError.textContent = "Password must be at least 8 characters.";
        passwordInput.classList.add("invalid");

    } else if (!/[A-Z]/.test(password)) {

        passwordError.textContent = "Password must contain an uppercase letter.";
        passwordInput.classList.add("invalid");

    } else if (!/[a-z]/.test(password)) {

        passwordError.textContent = "Password must contain a lowercase letter.";
        passwordInput.classList.add("invalid");

    } else if (!/[0-9]/.test(password)) {

        passwordError.textContent = "Password must contain a number.";
        passwordInput.classList.add("invalid");

    } else {

        passwordError.textContent = "";
        passwordInput.classList.add("valid");

    }

});


// ==================== REAL-TIME CONFIRM PASSWORD ====================

const confirmPasswordInput = document.getElementById("confirmPassword");

confirmPasswordInput.addEventListener("blur", function () {

    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    confirmPasswordInput.classList.remove("valid", "invalid");

    if (confirmPassword === "") {

        confirmPasswordError.textContent = "Please confirm your password.";
        confirmPasswordInput.classList.add("invalid");

    } else if (confirmPassword !== password) {

        confirmPasswordError.textContent = "Passwords do not match.";
        confirmPasswordInput.classList.add("invalid");

    } else {

        confirmPasswordError.textContent = "";
        confirmPasswordInput.classList.add("valid");

    }

});


// ==================== EYE BUTTON ====================

const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        togglePassword.textContent = "🙈";

    } else {

        passwordInput.type = "password";
        togglePassword.textContent = "👁";

    }

});


toggleConfirmPassword.addEventListener("click", function () {

    if (confirmPasswordInput.type === "password") {

        confirmPasswordInput.type = "text";
        toggleConfirmPassword.textContent = "🙈";

    } else {

        confirmPasswordInput.type = "password";
        toggleConfirmPassword.textContent = "👁";

    }

});