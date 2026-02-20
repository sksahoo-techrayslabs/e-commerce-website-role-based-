

document.addEventListener("DOMContentLoaded", function () {

  const loginForm = document.getElementById("customerloginform");
  if (!loginForm) return;

  function generateToken(user) {
    return btoa(JSON.stringify({
      id: user.id,
      name: user.name,
      role: user.role,
      email: user.email
    }));
  }

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const customer = users.find(user =>
      user.email === email &&
      user.password === password &&
      user.role === "customer"
    );

    if (!customer) {
      alert("Invalid customer email or password");
      return;
    }

    const token = generateToken(customer);
    localStorage.setItem("authToken", token);
    localStorage.setItem("currentUser", JSON.stringify(customer));

    window.location.href = "customer_products.html";
  });

});