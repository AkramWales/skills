document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navUl = document.getElementById("nav-links"); 
    // --- 1. Mobile Menu Toggle Logic ---
    if (menuToggle && navUl) {
        menuToggle.addEventListener("click", () => {
            menuToggle.classList.toggle("active");
            navUl.classList.toggle("active");
        });

        // Close menu when a link is clicked
        const navLinks = navUl.querySelectorAll("a"); 
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                menuToggle.classList.remove("active");
                navUl.classList.remove("active"); 
            });
        });
    }

    const allLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname.split('/').pop().toLowerCase(); 

    allLinks.forEach(link => {
        const linkPath = link.getAttribute('href').toLowerCase().replace(/^\.?\/?/,'');
        
        if (linkPath === currentPath || (currentPath === "" && linkPath === "home.html")) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});