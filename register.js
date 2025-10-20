// Registration
const registerForm = document.getElementById('registerForm');
const registerMessage = document.getElementById('registerMessage');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !email || !password) {
        registerMessage.textContent = "Please fill in all fields.";
        registerMessage.style.color = 'red';
        return;
    }

    // Save user in localStorage
    localStorage.setItem('user', JSON.stringify({ username, email, password }));

    registerMessage.textContent = `Account created successfully for ${username}!`;
    registerMessage.style.color = 'green';

    registerForm.reset();
});

// Login
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const loginUser = document.getElementById('loginUsername').value.trim();
    const loginPass = document.getElementById('loginPassword').value.trim();

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && loginUser === storedUser.username && loginPass === storedUser.password) {
        loginMessage.textContent = `Login successful! Welcome, ${loginUser}.`;
        loginMessage.style.color = 'green';
    } else {
        loginMessage.textContent = "Invalid username or password.";
        loginMessage.style.color = 'red';
    }

    loginForm.reset();
});
