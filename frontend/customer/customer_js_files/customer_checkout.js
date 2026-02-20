

// const token = localStorage.getItem("authToken");

// if (!token) {
//     window.location.href = "login_admin.html";
// }

// const user = JSON.parse(atob(token));

// if (user.role !== "admin") {
//     alert("Access denied");
//     window.location.href = "login_admin.html";
// }




// let checkoutItems = document.getElementById("checkoutItems");
// let grandTotalElement = document.getElementById("grandTotal");
// let form = document.getElementById("checkoutForm");

// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// function showCheckoutItems() {

//     checkoutItems.innerHTML = "";
//     let grandTotal = 0;

//     if (cart.length === 0) {
//         checkoutItems.innerHTML = "<p>Your cart is empty.</p>";
//         return;
//     }

//     for (let i = 0; i < cart.length; i++) {

//         let total = cart[i].price * cart[i].quantity;
//         grandTotal += total;

//         checkoutItems.innerHTML += `
//             <div class="flex justify-between">
//                 <span>${cart[i].name} × ${cart[i].quantity}</span>
//                 <span>₹${total}</span>
//             </div>
//         `;
//     }

//     grandTotalElement.textContent = grandTotal;
// }

// form.addEventListener("submit", function (e) {

//     e.preventDefault();

//     if (cart.length === 0) {
//         alert("Cart is empty!");
//         return;
//     }

//     let fullname = document.getElementById("fullname").value;
//     let address = document.getElementById("address").value;
//     let phone = document.getElementById("phone").value;

//     let orders = JSON.parse(localStorage.getItem("orders")) || [];

//     let newOrder = {
//         date: new Date().toLocaleString(),
//         items: cart,
//         customer: {
//             name: fullname,
//             address: address,
//             phone: phone
//         },
//         total: grandTotalElement.textContent,
//         status: "Pending"
//     };

//     orders.push(newOrder);

//     localStorage.setItem("orders", JSON.stringify(orders));

//     localStorage.removeItem("cart");

//     alert("Order placed successfully!");

//     window.location.href = "orders.html";
// });

// showCheckoutItems();







let checkoutItems = document.getElementById("checkoutItems");
let totalElement = document.getElementById("grandTotal");
let form = document.getElementById("checkoutForm");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function showCheckout() {

    checkoutItems.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        checkoutItems.innerHTML = "<p>Cart is empty</p>";
        totalElement.textContent = 0;
        return;
    }

    for (let i = 0; i < cart.length; i++) {

        let itemTotal = cart[i].price * cart[i].quantity;
        total += itemTotal;

        checkoutItems.innerHTML += `
            <div class="flex justify-between mb-2">
                <span>${cart[i].name} × ${cart[i].quantity}</span>
                <span>₹${itemTotal}</span>
            </div>
        `;
    }

    totalElement.textContent = total;
}

form.addEventListener("submit", function (e) {

    e.preventDefault();

    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }

    let name = document.getElementById("fullname").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    let newOrder = {
        date: new Date().toLocaleString(),
        items: cart,
        name: name,
        address: address,
        phone: phone,
        total: totalElement.textContent
    };

    orders.push(newOrder);

    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.removeItem("cart");

    alert("Order placed successfully!");

    window.location.href = "customer_order.html";
});

showCheckout();