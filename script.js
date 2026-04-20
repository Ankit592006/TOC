// REGEX PATTERNS
const regex = {
    name: /^[A-Za-z ]{2,30}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    mobile: /^[6-9]\d{9}$/,
    roll: /^[0-9]{9}[A-Z]{2}[0-9]{3}$/,
    password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
    subject: /^[A-Z]{3}[0-9]{3}$/
};

// Generic validation function
function validateField(id, pattern, msgId, successMsg, errorMsg) {
    const value = document.getElementById(id).value.trim();
    const msg = document.getElementById(msgId);

    if (pattern.test(value)) {
        msg.innerHTML = `<span class="success">${successMsg}</span>`;
        return true;
    } else {
        msg.innerHTML = `<span class="error">${errorMsg}</span>`;
        return false;
    }
}

// Event listeners
document.getElementById("name").addEventListener("input", () => {
    validateField("name", regex.name, "nameMsg", "Valid Name", "Only letters (2–30)");
    checkForm();
});

document.getElementById("email").addEventListener("input", () => {
    validateField("email", regex.email, "emailMsg", "Valid Email", "Invalid Email");
    checkForm();
});

document.getElementById("mobile").addEventListener("input", () => {
    validateField("mobile", regex.mobile, "mobileMsg", "Valid Mobile", "Must start 6-9");
    checkForm();
});

document.getElementById("roll").addEventListener("input", () => {
    validateField("roll", regex.roll, "rollMsg", "Valid Roll", "Invalid format");
    checkForm();
});

document.getElementById("password").addEventListener("input", () => {
    validateField("password", regex.password, "passwordMsg", "Strong Password", "Weak Password");
    checkForm();
});

document.getElementById("subject").addEventListener("input", () => {
    validateField("subject", regex.subject, "subjectMsg", "Valid Code", "Format ABC123");
    checkForm();
});

// DATE
document.getElementById("date").addEventListener("change", () => {
    const date = new Date(document.getElementById("date").value);
    const today = new Date();
    const msg = document.getElementById("dateMsg");

    if (date >= today) {
        msg.innerHTML = `<span class="success">Valid Date</span>`;
    } else {
        msg.innerHTML = `<span class="error">Future date only</span>`;
    }
    checkForm();
});

// FILE
document.getElementById("file").addEventListener("change", () => {
    const file = document.getElementById("file").files[0];
    const msg = document.getElementById("fileMsg");

    if (file && file.type === "application/pdf") {
        msg.innerHTML = `<span class="success">PDF Uploaded</span>`;
    } else {
        msg.innerHTML = `<span class="error">Only PDF allowed</span>`;
    }
    checkForm();
});

// Final check
function checkForm() {
    const valid =
        regex.name.test(name.value) &&
        regex.email.test(email.value) &&
        regex.mobile.test(mobile.value) &&
        regex.roll.test(roll.value) &&
        regex.password.test(password.value) &&
        regex.subject.test(subject.value) &&
        date.value &&
        file.files.length > 0;

    document.getElementById("submitBtn").disabled = !valid;
}

// Submit
document.getElementById("submitBtn").addEventListener("click", () => {
    alert("🎉 Form Submitted Successfully!");
});