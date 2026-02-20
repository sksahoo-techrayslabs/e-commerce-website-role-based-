
// const token = localStorage.getItem("authToken");

// if (!token) {
//     window.location.href = "login_admin.html";
// }

// const user = JSON.parse(atob(token));

// if (user.role !== "admin") {
//     alert("Access denied");
//     window.location.href = "login_admin.html";
// }


fetch("/frontend/components/customer_navigation_bar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("customernavbar").innerHTML = data;
    });