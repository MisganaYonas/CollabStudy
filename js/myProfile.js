const closeBtn = document.querySelector(".close-btn");
if (closeBtn) {
  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "dashboard.html";
  });
}

const editProfileBtn = document.querySelector(".edit-profile-btn");
if (editProfileBtn) {
  editProfileBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Edit Profile functionality is not implemented yet.");
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
