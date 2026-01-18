const hamburger = document.querySelector(".hamburger-menu");
const headerRight = document.querySelector(".header-right");

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
