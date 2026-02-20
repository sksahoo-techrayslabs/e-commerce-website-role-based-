
// const token = localStorage.getItem("authToken");

// if (!token) {
//     window.location.href = "login_admin.html";
// }

// const user = JSON.parse(atob(token));

// if (user.role !== "admin") {
//     alert("Access denied");
//     window.location.href = "login_admin.html";
// }


let container = document.getElementById("ordersContainer");

let orders = JSON.parse(localStorage.getItem("orders")) || [];

function showOrders() {

    container.innerHTML = "";

    if (orders.length === 0) {
        container.innerHTML = `
            <div class="bg-white p-6 rounded shadow text-center">
                No orders placed yet.
            </div>
        `;
        return;
    }

    for (let i = 0; i < orders.length; i++) {

        let orderHTML = `
            <div class="bg-white p-6 rounded-xl shadow">

                <h2 class="text-lg font-bold mb-2">
                    Order ID: ${i + 1}
                </h2>

                <p class="mb-2">Date: ${orders[i].date}</p>

                <div class="border-t pt-3 space-y-2">
        `;

        let items = orders[i].items;
        let total = 0;

        for (let j = 0; j < items.length; j++) {

            let itemTotal = items[j].price * items[j].quantity;
            total += itemTotal;

            orderHTML += `
                <div class="flex justify-between">
                    <span>${items[j].name} × ${items[j].quantity}</span>
                    <span>₹${itemTotal}</span>
                </div>
            `;
        }

        orderHTML += `
                </div>

                <div class="border-t mt-3 pt-3 flex justify-between font-bold">
                    <span>Total</span>
                    <span>₹${total}</span>
                </div>

                <p class="mt-2 text-sm text-gray-600">
                    Status: ${orders[i].status || "Pending"}
                </p>

            </div>
        `;

        container.innerHTML += orderHTML;
    }
}

showOrders();