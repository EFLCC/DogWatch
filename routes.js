// === DVW3 | Routes Script ===
document.addEventListener("DOMContentLoaded", () => {
  const routeList = document.getElementById("routeList");

  const routes = [
    { name: "Morning Jog", distance: "5.2 km", date: "Oct 6, 2025" },
    { name: "City Loop", distance: "8.1 km", date: "Oct 4, 2025" },
    { name: "Beach Trail", distance: "10.0 km", date: "Oct 1, 2025" },
  ];

  routes.forEach(r => {
    const li = document.createElement("li");
    li.textContent = `${r.name} — ${r.distance} (${r.date})`;
    routeList.appendChild(li);
  });
});
