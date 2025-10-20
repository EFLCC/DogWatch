// === DVW3 | Profile Script ===
document.addEventListener("DOMContentLoaded", () => {
  // Example dynamic values (replace with backend or Firebase data)
  const username = "John Doe";
  const level = "Level 7 Explorer";
  const routes = 42;
  const distance = "128.5 km";
  const badges = 8;

  document.getElementById("username").textContent = username;
  document.getElementById("level").textContent = level;
  document.getElementById("routesCount").textContent = routes;
  document.getElementById("distanceTotal").textContent = distance;
  document.getElementById("badgeCount").textContent = badges;
});
