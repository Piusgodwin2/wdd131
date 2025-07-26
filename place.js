  // Get current year and insert it
  const currentYear = new Date().getFullYear();
  document.getElementById("copyright").textContent = `${currentYear} ⚓ Pius Godwin ⚓`;

  // Get last modified date of the HTML file
  const lastModified = document.lastModified;
  document.getElementById("lastModified").textContent = `Last modified: ${lastModified}`;
