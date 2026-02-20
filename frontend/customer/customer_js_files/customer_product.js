
// const token = localStorage.getItem("authToken");

// if (!token) {
//     window.location.href = "login_admin.html";
// }

// const user = JSON.parse(atob(token));

// if (user.role !== "admin") {
//     alert("Access denied");
//     window.location.href = "login_admin.html";
// }



let container = document.getElementById("productContainer");

// Get products from localStorage
let products = JSON.parse(localStorage.getItem("products")) || [];

function showProducts() {

    container.innerHTML = "";

    if (products.length === 0) {
        container.innerHTML = "<p>No products available</p>";
        return;
    }

    for (let i = 0; i < products.length; i++) {

        container.innerHTML += `
    <div class="bg-white p-6 rounded-xl shadow">

        <h2 class="text-lg font-bold mb-2">
            ${products[i].name}
        </h2>

        <p>Category: ${products[i].category}</p>
        <p>Price: ₹${products[i].price}</p>
        <p>Stock: ${products[i].stock}</p>

        <div class="flex items-center mt-3 space-x-2">
            <label>Qty:</label>
            <input type="number"
                   id="qty_${i}"
                   value="1"
                   min="1"
                   max="${products[i].stock}"
                   class="w-16 border rounded px-2 py-1">
        </div>

        <button onclick="addToCart(${i})"
            class="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
            Add to Cart
        </button>

    </div>
        `;
    }
}











function addToCart(index) {

    let quantity = document.getElementById("qty_" + index).value;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let product = products[index];

    let item = {
        pid: product.pid,
        name: product.name,
        price: product.price,
        quantity: parseInt(quantity)
    };

    cart.push(item);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to cart!");
}








showProducts();