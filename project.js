document.addEventListener("DOMContentLoaded", function () {
  const assignments = JSON.parse(localStorage.getItem("assignments")) || [];
  const listSection = document.getElementById("assignment-list");
  const reminderSection = document.getElementById("reminder-section");

  if (assignments.length === 0) {
    listSection.innerHTML = "<p>No assignments yet.</p>";
    return;
  }

  const today = new Date();

  assignments.forEach((assignment, index) => {
    const assignmentDate = new Date(assignment.dueDate);
    const daysLeft = Math.ceil((assignmentDate - today) / (1000 * 60 * 60 * 24));

    // Show reminders
    if (daysLeft < 0) {
      reminderSection.innerHTML += `<p class="overdue">🔔 "${assignment.title}" is overdue!</p>`;
    } else if (daysLeft === 0) {
      reminderSection.innerHTML += `<p class="due-soon">📅 "${assignment.title}" is due today!</p>`;
    } else if (daysLeft <= 2) {
      reminderSection.innerHTML += `<p class="due-soon">📅 "${assignment.title}" is due in ${daysLeft} day(s)!</p>`;
    }

    // Display the assignment card
    const card = document.createElement("div");
    card.className = "assignment-card";
    card.innerHTML = `
      <h3>${assignment.title}</h3>
      <p><strong>Course:</strong> ${assignment.course}</p>
      <p><strong>Due Date:</strong> ${assignment.dueDate}</p>
      <p><strong>Notes:</strong> ${assignment.notes}</p>
      <button onclick="deleteAssignment(${index})">Delete</button>
    `;
    listSection.appendChild(card);
  });
});

function deleteAssignment(index) {
  const assignments = JSON.parse(localStorage.getItem("assignments")) || [];
  assignments.splice(index, 1);
  localStorage.setItem("assignments", JSON.stringify(assignments));
  location.reload();
}