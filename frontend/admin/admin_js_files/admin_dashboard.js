



// data aniba local storage ru aniba
let products = JSON.parse(localStorage.getItem("products")) || [];

let orders = JSON.parse(localStorage.getItem("orders")) || [];


let users = JSON.parse(localStorage.getItem("users")) || [];

let admins = users.filter(user => user.role === "admin");

let customers = users.filter(user => user.role === "customer");






// data update kariba local storage re jout adashboard re dekheiba

document.getElementById("totalproducts").textContent = products.length;



document.getElementById("totalorders").textContent = orders.length;

document.getElementById("totalusers").textContent = users.length;

document.getElementById("totaladmins").textContent = admins.length;

document.getElementById("totalcustomer").textContent = customers.length;