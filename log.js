// === DVW3 | Route Log Utility ===

export function logActivity(name, distance, date = new Date()) {
  const entry = {
    name,
    distance,
    date: date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  };

  // Store in localStorage for now (replace with Firebase later)
  const existing = JSON.parse(localStorage.getItem("routeLog") || "[]");
  existing.unshift(entry);
  localStorage.setItem("routeLog", JSON.stringify(existing));

  console.log("Activity logged:", entry);
}

export function getActivityLog() {
  return JSON.parse(localStorage.getItem("routeLog") || "[]");
}
