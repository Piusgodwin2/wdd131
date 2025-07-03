// Get current year
const currentYear = new Date().getFullYear();
document.getElementById("copyright");

// Get last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last modified: ${lastModified}`;
