const loginForm = document.getElementById("customerloginform");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const customer = users.find(user =>
        user.email === email && 
        user.password === password &&
        user.role ==="customer"

    );

    if (!customer) {
        alert("Invalid email or password!");
        return;
    }


    localStorage.setItem("currentUser", JSON.stringify(customer));

    window.location.href = "customer_products.html";//eita change haba
});