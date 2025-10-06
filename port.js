// Get elements
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Toggle menu on click
menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// Close menu when a link is clicked (for better UX)
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");
    });
});
