document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".step");
    const sections = document.querySelectorAll(".card-section");

    function activateStep(index) {
        sections.forEach((sec, i) => {
            sec.style.display = i === index ? "block" : "none";
        });
        steps.forEach((step, i) => {
            step.classList.toggle("active", i === index);
        });
    }

    steps.forEach((step, i) => {
        step.addEventListener("click", () => activateStep(i));
    });

    sections.forEach((sec, i) => {
        sec.addEventListener("click", () => activateStep(i));
    });

    activateStep(0);

    const timeCards = document.querySelectorAll(".time-card");
    let selectedTime = null;

    timeCards.forEach(card => {
        card.addEventListener("click", () => {
            timeCards.forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");
            selectedTime = card.querySelector(".time-text strong").textContent;
            console.log("Selected time:", selectedTime);
        });
    });

    const dayChips = document.querySelectorAll(".day-chip");
    let selectedDays = [];

    dayChips.forEach(chip => {
        chip.addEventListener("click", () => {
            const day = chip.textContent;
            if (chip.classList.contains("selected")) {
                chip.classList.remove("selected");
                selectedDays = selectedDays.filter(d => d !== day);
            } else {
                chip.classList.add("selected");
                selectedDays.push(day);
            }
            console.log("Selected days:", selectedDays);
        });
    });

    const rangeInput = document.querySelector(".members-group input[type='range']");
    const rangeValue = document.querySelector(".members-group .slider-value");

    rangeInput.addEventListener("input", () => {
        rangeValue.textContent = rangeInput.value;
    });

    let members = [];
    const addBtn = document.querySelector(".btn-outline");
    const memberInput = document.getElementById("email");

    addBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const email = memberInput.value.trim();
        if (!email) {
            showError("Please enter an email to add.");
            return;
        }
        if (!email.endsWith("@aau.edu.et")) {
            showError("Only AAU email addresses are allowed.");
            return;
        }
        if (members.includes(email)) {
            showError("This email is already added.");
            return;
        }
        members.push(email);
        memberInput.value = "";
        showSuccess(`Added member: ${email}`);
        console.log("Members:", members);
    });

    const createBtn = document.querySelector(".btn-primary");
    const message = document.createElement("div");
    message.style.marginTop = "10px";
    createBtn.parentNode.insertBefore(message, createBtn);

    function showError(msg) {
        message.textContent = msg;
        message.style.color = "red";
    }

    function showSuccess(msg) {
        message.textContent = msg;
        message.style.color = "green";
    }

    createBtn.addEventListener("click", () => {
        const groupNameInput = document.getElementById("group-name");
        const groupName = groupNameInput.value.trim();
        const maxMembers = rangeInput.value;

        if (!groupName) {
            showError("Group name is required.");
            activateStep(0);
            return;
        }
        if (!selectedTime) {
            showError("Please select a meeting time.");
            activateStep(1);
            return;
        }
        if (selectedDays.length === 0) {
            showError("Please select at least one meeting day.");
            activateStep(1);
            return;
        }
        if (members.length === 0) {
            showError("Please add at least one member.");
            activateStep(2);
            return;
        }

        const group = {
            name: groupName,
            time: selectedTime,
            days: selectedDays,
            maxMembers: maxMembers,
            members: members
        };

        let allGroups = JSON.parse(localStorage.getItem("CollabStudyGroups")) || [];
        allGroups.push(group);
        localStorage.setItem("CollabStudyGroups", JSON.stringify(allGroups));
        showSuccess("Study group created successfully!");
        console.log("Saved group:", group);

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1500);
    });
});
