console.log("Dashboard loaded");

const menuBtn = document.querySelector(".menu-icon");
const profileArea = document.querySelector(".profile-area");

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation(); 
  profileArea.classList.toggle("active");
});

document.addEventListener("click", () => {
  profileArea.classList.remove("active");
});

profileArea.addEventListener("click", (e) => {
  e.stopPropagation(); 
});


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

function toggleGroup(el){
  const card = el.closest(".group-card");
  card.classList.toggle("active");
};

