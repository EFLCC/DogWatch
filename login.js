// === DVW3 | Login Script ===

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    // Placeholder authentication
    if (email === "test@user.com" && password === "password") {
      alert("Login successful!");
      window.location.href = "home.html";
    } else {
      alert("Invalid credentials. Try again.");
    }
  });
});
