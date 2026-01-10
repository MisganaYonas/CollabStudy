
const form = document.getElementById("signupForm");
const message = document.getElementById("formMessage");

if (form) {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const username = document.getElementById("username");
  const department = document.getElementById("department");
  const year = document.getElementById("year");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (
        !username.value ||
        !email.value ||
        !password.value ||
        !confirmPassword.value ||
        !department.value ||
        !year.value
    ) {
        showError("Please fill in all fields.");
        return;
    }
    if (!email.value.endsWith("@aau.edu.et")) {
        showError("Please use a valid AAU email address.");
        return;
    }

    if (password.value.length < 8) {
        showError("Password must be at least 8 characters long.");
        return;
    }

    if (password.value !== confirmPassword.value) {
        showError("Passwords do not match.");
        return;
    }

    const user = {
        username: username.value,
        email: email.value,
        password: password.value,
        department: department.value,
        year: year.value
    };

    localStorage.setItem("CollabStudyUser", JSON.stringify(user));
    showSuccess("Account created successfully! Redirecting to login...");

    setTimeout(() => {
        window.location.href = "login.html";
    }, 1500);

  });

}

function showError(msg) {
    if (!message) return;
    message.textContent = msg;
    message.className = "form-message error";
    message.style.color = "red";
}

function showSuccess(msg) {
    if (!message) return;
    message.textContent = msg;
    message.className = "form-message success";
    message.style.color = "green";
}