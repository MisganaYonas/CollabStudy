const closeBtn = document.querySelector(".close-btn");
if (closeBtn) {
  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "dashboard.html";
  });
}

const editProfileBtn = document.querySelector(".edit-profile-btn");
const fields = document.querySelectorAll(".info-value");

let editing = false;

if (editProfileBtn) {
  editProfileBtn.addEventListener("click", (e) => {
    e.preventDefault();
    editing = !editing;

    fields.forEach(field => {
      if (editing) {
        field.removeAttribute("readonly");
      } else {
        field.setAttribute("readonly", true);
      }
    });

    editProfileBtn.querySelector("span").textContent = editing
      ? "Save Profile"
      : "Edit Profile";

    if (!editing) {
      alert("Profile saved (placeholder).");
    }
  });
}

const deleteAccountBtn = document.querySelector(".delete-account-btn");
if (deleteAccountBtn) {
  deleteAccountBtn.addEventListener("click", () => {
    const confirmDelete = confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );
    if (confirmDelete) {
      alert("Account deleted (placeholder).");
    }
  });
}
