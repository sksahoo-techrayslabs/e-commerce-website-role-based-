// data aniba local storage ru
let products = JSON.parse(localStorage.getItem("products")) || [];

let orders = JSON.parse(localStorage.getItem("orders")) || [];




let users = JSON.parse(localStorage.getItem("users")) || [];

















// data update kariba local storage re jout adashboard re dekheiba

document.getElementById("totalproducts").textContent = products.length;



document.getElementById("totalorders").textContent = orders.length;

document.getElementById("totalusers").textContent = users.length;