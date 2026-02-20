

function getToken() {
  return localStorage.getItem("authToken");
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}

function requireLogin() {
  const token = getToken();
  if (!token) {
    window.location.href = "../../index.html";
  }
}

function requireAdmin() {
  const user = getCurrentUser();
  if (!user || user.role !== "admin") {
    window.location.href = "../../index.html";
  }
}

function logout() {
  localStorage.removeItem("authToken");
  localStorage.removeItem("currentUser");
  window.location.href = "../../index.html";
}