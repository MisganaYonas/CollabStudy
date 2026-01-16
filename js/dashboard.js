console.log("Dashboard loaded");

const menuIcon = document.querySelector(".menu-icon");
const profileArea = document.querySelector(".profile-area");

if (menuIcon && profileArea) {
  menuIcon.addEventListener("click", () => {
    profileArea.classList.toggle("active");
  });
}

document.querySelectorAll(".group-btn.join").forEach(btn => {
  btn.addEventListener("click", () => {
    window.location.href = "groupPage.html";
  });
});

const createBtn = document.querySelector(".btn-create");
if (createBtn) {
  createBtn.addEventListener("click", () => {
    window.location.href = "createGroup.html";
  });
};

const logoutLink = document.querySelector(".header-link-logout");
if (logoutLink) {
  logoutLink.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "index.html";
  });
};
