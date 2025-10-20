// === DVW3 | Level Progress System ===

export function calculateLevel(totalDistanceKm) {
  // Example: every 10 km = 1 level
  return Math.floor(totalDistanceKm / 10);
}

export function nextLevelProgress(totalDistanceKm) {
  const remainder = totalDistanceKm % 10;
  const percent = Math.round((remainder / 10) * 100);
  return `${percent}%`;
}

// Example usage:
// const level = calculateLevel(42.5);  // -> 4
// const progress = nextLevelProgress(42.5);  // -> "25%"
