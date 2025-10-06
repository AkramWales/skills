// Get elements
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links"); 

// Toggle menu on click
if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        navLinks.classList.toggle("active"); 
    });

    // Close menu when a link is clicked
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("active");
            navLinks.classList.remove("active"); 
        });
    });
}