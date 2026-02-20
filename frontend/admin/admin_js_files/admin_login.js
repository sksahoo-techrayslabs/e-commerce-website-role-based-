document.addEventListener("DOMContentLoaded", function () {



    const form = document.getElementById("adminloginform");

    if (!form) return;

    function generateToken(user) {
        return btoa(JSON.stringify({
            id: user.id,
            name: user.name,
            role: user.role,
            email: user.email
        }));
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();


        //  if i want admin to signup via signup page it works dynamically

        // const users = JSON.parse(localStorage.getItem("users") || "[]");

        // const admin = users.find(user =>
        //     user.email === email &&
        //     user.password === password &&
        //     user.role === "admin"
        // );




        // if (!admin) {
        //     alert("Invalid admin email or password");
        //     return;
        // }


            //  hardcoding admin details
    const admin_email="admin@gmail.com";
    const admin_password="1234567890";
    
    if(email != admin_email || password != admin_password){
        alert("not authorized admin");
        return;
    }


    const admin ={
        id:1,
        name:"admin1",
        email:admin_email,
        role:"admin"
    };



        const token = generateToken(admin);
        localStorage.setItem("authToken", token);
        localStorage.setItem("currentUser", JSON.stringify(admin));

        window.location.href = "admin_products.html";
    });
});