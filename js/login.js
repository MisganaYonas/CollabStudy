const form = document.getElementById('loginForm');
const message = document.getElementById('loginMessage');

if (form) {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value;

        if (!email || !password) {
            showError("Please enter both email and password.");
            return;
        }

        const savedUser = localStorage.getItem("CollabStudyUser");

        if (!savedUser) {
            showError("No account found. Please sign up first.");
            return;
        }

        const user = JSON.parse(savedUser);

        if (email !== user.email || password !== user.password) {
            showError("Invalid email or password.");
            return;
        }

        showSuccess("Login successful! Redirecting...");

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1200);
    });
}

function showError(msg) {
    if (!message) return;
    message.style.color = "red";
    message.textContent = msg;
}

function showSuccess(msg) {
    if (!message) return;
    message.style.color = "green";
    message.textContent = msg;
}