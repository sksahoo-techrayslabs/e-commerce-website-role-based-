fetch("/frontend/components/admin_navigation_bar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("adminnavbar").innerHTML = data;
    });