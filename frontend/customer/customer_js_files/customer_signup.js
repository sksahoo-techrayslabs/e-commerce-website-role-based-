const form = document.getElementById("customersignupform");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    //  check email duplicate is present or not
   const exists = users.some(user => user.email === email);

    if (exists) {
        alert("Email already registered!");
        return;
    }

    const newuser = {
        name: name,
        email: email,
        password: password,
        role: "customer"
    };

    users.push(newuser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Customer account created !");

    window.location.href = "login_customer.html";
});

