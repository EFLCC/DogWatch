// === DVW3 | Home Script ===

document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startRouteBtn");
  const recentList = document.getElementById("recentList");

  // Example recent activities (replace with Firebase data later)
  const activities = [
    { name: "Morning Run", distance: "5.2 km", date: "Oct 6 2025" },
    { name: "Evening Walk", distance: "3.1 km", date: "Oct 5 2025" },
  ];

  activities.forEach(act => {
    const li = document.createElement("li");
    li.textContent = `${act.name} — ${act.distance} (${act.date})`;
    recentList.appendChild(li);
  });

  startBtn.addEventListener("click", () => {
    alert("Route tracking feature coming soon!");
  });
});
