

// const token = localStorage.getItem("authToken");

// if (!token) {
//     window.location.href = "login_admin.html";
// }

// const user = JSON.parse(atob(token));

// if (user.role !== "admin") {
//     alert("Access denied");
//     window.location.href = "login_admin.html";
// }





let cartTable = document.getElementById("cartTable");
let grandTotalElement = document.getElementById("grandTotal");
let placeOrderBtn = document.getElementById("placeOrderBtn");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function showCart() {

    cartTable.innerHTML = "";
    let grandTotal = 0;

    if (cart.length === 0) {
        cartTable.innerHTML = `
            <tr>
                <td colspan="5" class="p-4 text-center">
                    Cart is empty
                </td>
            </tr>
        `;
        grandTotalElement.textContent = 0;
        return;
    }

    for (let i = 0; i < cart.length; i++) {

        let total = cart[i].price * cart[i].quantity;
        grandTotal += total;

        cartTable.innerHTML += `
            <tr>
                <td>${cart[i].name}</td>
                <td>₹${cart[i].price}</td>
                <td>
                    <input type="number"
                        value="${cart[i].quantity}"
                        min="1"
                        onchange="updateQuantity(${i}, this.value)">
                </td>
                <td>₹${total}</td>
                <td>
                    <button onclick="removeItem(${i})">Delete</button>
                </td>
            </tr>
        `;
    }

    grandTotalElement.textContent = grandTotal;

    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateQuantity(index, newQty) {
    cart[index].quantity = parseInt(newQty);
    showCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    showCart();
}

placeOrderBtn.addEventListener("click", function () {

    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }

    window.location.href = "customer_checkout.html";
});

showCart();