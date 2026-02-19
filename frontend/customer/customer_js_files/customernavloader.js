fetch("/frontend/components/user_navigation_bar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("usernavbar").innerHTML = data;
    });