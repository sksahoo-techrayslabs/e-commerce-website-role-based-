const form = document.getElementById("adminsignupform");

form.addEventListener("submit", function (e) 
{
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (password !== confirmPassword) 
        {
            alert("Passwords do not match!");
            return;
        }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check duplicate email
    const exists = users.some(user => user.email === email);

    if (exists) {
        alert("Email already registered!");
        return;
    }

    const newAdmin = {
        name: name,
        email: email,
        password: password,
        role: "admin"
    };

    users.push(newAdmin);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Admin account created successfully!");

    window.location.href = "login_admin.html";
});