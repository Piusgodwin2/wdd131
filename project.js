{
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
        // Build assignment card
        const card = document.createElement("div");
        card.className = "assignment-card";

        card.innerHTML = `
        <h3>${assignment.title}</h3>
        <p><strong>Course:</strong> ${assignment.course}</p>
        <p><strong>Due Date:</strong> ${assignment.dueDate}</p>
        <p>${assignment.notes}</p>
        <button onclick="deleteAssignment(${index})">Delete</button>
        `;

        listSection.appendChild(card);

        // Create reminder if due soon or past
        const dueDate = new Date(assignment.dueDate);
        const diffDays = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));

        if (diffDays < 0) {
        reminderSection.innerHTML += `<p class="overdue">🔔 "${assignment.title}" is overdue!</p>`;
        } else if (diffDays <= 2) {
        reminderSection.innerHTML += `<p class="due-soon">📅 "${assignment.title}" is due in ${diffDays} day(s)!</p>`;
        }
    });
    });

    // Delete assignment by index
    function deleteAssignment(index) {
    const assignments = JSON.parse(localStorage.getItem("assignments")) || [];
    assignments.splice(index, 1);
    localStorage.setItem("assignments", JSON.stringify(assignments));
    location.reload();
    }
}
