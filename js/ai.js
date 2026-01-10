const inputField = document.querySelector(".input-field");
const sendBtn = document.querySelector(".send-btn");
const chatContainer = document.querySelector(".chat-container");

function addMessage(text, sender = "user") {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message-box");
    if (sender ==="ai") msgDiv.classList.add("ai-message");
    msgDiv.textContent = text;

    const timestamp = document.createElement("div");
    timestamp.classList.add("timestamp");
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    timestamp.textContent = `${hours}:${minutes}`;
    msgDiv.appendChild(timestamp);

    chatContainer.insertBefore(msgDiv, document.querySelector(".spacer"));
    scrollToBottom();
}

function scrollToBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function getAIResponse(userMessage) {
    if (userMessage.toLowerCase().includes("study")) {
        return "I suggest reviewing your lecture notes and forming a study group.";
    } else if (userMessage.toLowerCase().includes("group")) {
        return "You can invite members from your class or study community";
    } else if (userMessage.toLowerCase().includes("course")) {
        return "I can provide information on various courses. Which subject are you interested in?";
    } else if (userMessage.toLowerCase().includes("motivation")) {
        return "Remember, consistency is key! Set small goals and reward yourself for achieving them.";
    } 
    return "I'm here to help! Could you please provide more details about what you need assistance with?";
}

function sendMessage() {
    const text = inputField.value.trim();
    if (!text) return;
    addMessage(text, "user");
    inputField.value = "";
    setTimeout(() => {
        const aiText = getAIResponse(text);
        addMessage(aiText, "ai");
    }, 800);
}

inputField.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        sendMessage();
    }
});