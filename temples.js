// Copyright Year
document.getElementById("year").textContent = new Date().getFullYear();

// Last Modified
document.getElementById("lastModified").textContent = document.lastModified;

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");

  // Toggle between hamburger and X
  if (menuToggle.textContent === "☰") {
    menuToggle.textContent = "✖"; // X
  } else {
    menuToggle.textContent = "☰";
  }
});
