const loginSection = document.getElementById("loginSection");
const homeSection = document.getElementById("homeSection");

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

// Check token when page loads
function checkAuth() {
    const token = localStorage.getItem("authToken");

    if (token) {
        loginSection.style.display = "none";
        homeSection.style.display = "block";
    } else {
        loginSection.style.display = "block";
        homeSection.style.display = "none";
    }
}

// Login
loginBtn.addEventListener("click", () => {
    localStorage.setItem("authToken", "abc123");
    checkAuth();
});

// Logout
logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("authToken");
    checkAuth();
});

// Run on page load
checkAuth();

