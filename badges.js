// === DVW3 | Badges Script ===
document.addEventListener("DOMContentLoaded", () => {
  const badgeGrid = document.getElementById("badgeGrid");

  const badges = [
    { name: "First Route", img: "images/badges/first_route.jpeg" },
    { name: "5 Routes Complete", img: "images/badges/five_routes.jpeg" },
    { name: "Marathon", img: "images/badges/marathon.jpeg" },
  ];

  badges.forEach(badge => {
    const div = document.createElement("div");
    div.classList.add("badge-card");
    div.innerHTML = `
      <img src="${badge.img}" alt="${badge.name}">
      <p>${badge.name}</p>
    `;
    badgeGrid.appendChild(div);
  });
});
