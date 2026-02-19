const form = document.getElementById("adminloginform");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const admin = users.find(user =>
        user.email === email &&
        user.password === password &&
        user.role === "admin"
    );

    if (!admin) {
        alert("Invalid admin credentials!");
        return;
    }

    localStorage.setItem("currentUser", JSON.stringify(admin));

    window.location.href = "admin_products.html";
});