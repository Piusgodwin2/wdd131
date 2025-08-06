document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("assignment-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const course = document.getElementById("course").value.trim();
    const dueDate = document.getElementById("due-date").value;
    const notes = document.getElementById("notes").value.trim();

    const newAssignment = { title, course, dueDate, notes };

    const existing = JSON.parse(localStorage.getItem("assignments")) || [];
    existing.push(newAssignment);
    localStorage.setItem("assignments", JSON.stringify(existing));

    window.location.href = "project.html"; // Redirect to dashboard
  });
});