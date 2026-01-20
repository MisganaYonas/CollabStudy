const hamburger = document.querySelector(".hamburger-menu");
const headerRight = document.querySelector(".header-right");
const groupSidebar = document.getElementById("groupSidebar");
const closeSidebar = document.getElementById("closeSidebar");
const groupIcon = document.querySelector(".group-icon");
const groupName = document.querySelector(".group-name");

if (hamburger && headerRight) {
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    headerRight.classList.toggle("active");
  });

  document.addEventListener("click", () => {
    headerRight.classList.remove("active");
  });

  headerRight.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

const backBtn = document.getElementById("backDashboardBtn");
const leaveBtn = document.getElementById("leaveGroupBtn");

if (backBtn) {
  backBtn.addEventListener("click", () => {
    window.location.href = "dashboard.html";
  });
}

if (leaveBtn) {
  leaveBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to leave this group?")) {
      window.location.href = "dashboard.html";
    }
  });
}

const sendBtn = document.querySelector(".send-icon");
const messageInput = document.querySelector(".message-input");
const messagesArea = document.querySelector(".messages-area");

if (sendBtn && messageInput && messagesArea) {
  sendBtn.addEventListener("click", () => {
    const text = messageInput.value.trim();
    if (text === "") return;

    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message");

    msgDiv.innerHTML = `
      <div class="message-avatar">ME</div>
      <div class="message-content">
        <div class="message-sender">You</div>
        <div class="message-bubble"><p>${text}</p></div>
        <div class="message-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
      </div>
    `;

    messagesArea.appendChild(msgDiv);
    messagesArea.scrollTop = messagesArea.scrollHeight;
    messageInput.value = "";
  });

  messageInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendBtn.click();
    }
  });
}

[groupIcon, groupName].forEach(el => {
  el.addEventListener("click", () => {
    groupSidebar.classList.add("active");
  });
});

closeSidebar.addEventListener("click", () => {
  groupSidebar.classList.remove("active");
});

// Star rating logic
const stars = document.querySelectorAll(".star-rating .star");
const ratingText = document.getElementById("ratingText");

let currentRating = 0;

stars.forEach(star => {
  star.addEventListener("click", () => {
    currentRating = Number(star.dataset.value);
    updateStars(currentRating);
    ratingText.innerHTML = `You rated this group <strong>${currentRating}</strong> stars`;
  });

  star.addEventListener("mouseover", () => {
    updateStars(Number(star.dataset.value));
  });

  star.addEventListener("mouseout", () => {
    updateStars(currentRating);
  });
});

function updateStars(rating) {
  stars.forEach(star => {
    star.classList.toggle(
      "filled",
      Number(star.dataset.value) <= rating
    );
  });
}
// Close sidebar when clicking outside of it
document.addEventListener("click", (e) => {
  if (
    groupSidebar.classList.contains("active") &&
    !groupSidebar.contains(e.target) &&
    !groupIcon.contains(e.target) &&
    !groupName.contains(e.target)
  ) {
    groupSidebar.classList.remove("active");
  }
});

// Prevent sidebar clicks from closing it
groupSidebar.addEventListener("click", (e) => {
  e.stopPropagation();
});

