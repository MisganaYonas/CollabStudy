const togglebtn = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

const whyCards = document.querySelectorAll(".why-subsection");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });

}, { threshold: 0.1 });

whyCards.forEach(card => {
    observer.observe(card);
}); 

if (togglebtn && navMenu)
    togglebtn.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });
