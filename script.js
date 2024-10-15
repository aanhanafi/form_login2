// script.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Mencegah form submit default

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Validasi login
    if (username === "admin123" && password === "admin123") {
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect ke halaman dashboard setelah login sukses
    } else {
        errorMessage.textContent = "Username atau password salah!";
    }
});
