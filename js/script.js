
window.onload = function() {
    if (window.location.pathname === "/index.html") {
        alert("Welcome to our website!");
    }
};

const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
    link.addEventListener("mouseover", function() {
        this.style.color = "blue";
    });
    link.addEventListener("mouseout", function() {
        this.style.color = "black";
    });
});
