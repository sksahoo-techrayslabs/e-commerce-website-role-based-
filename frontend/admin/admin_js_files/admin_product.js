   let form = document.getElementById("productform");
  let table = document.getElementById("producttable");

let products = JSON.parse(localStorage.getItem("products")) || [];

let editIndex = -1;  

//         Show products in table
function showProducts() {

    table.innerHTML = "";

    for (let i = 0; i < products.length; i++) {

        table.innerHTML += `
            <tr>
                <td class="p-3">${products[i].pid}</td>
                <td class="p-3">${products[i].category}</td>
                <td class="p-3">${products[i].name}</td>
                <td class="p-3">₹${products[i].price}</td>
                <td class="p-3">${products[i].stock}</td>
                <td class="p-3">
                    <button onclick="editProduct(${i})"
                        class="px-3 py-1 bg-blue-500 text-white rounded">
                        Edit
                    </button>
                    <button onclick="deleteProduct(${i})"
                        class="px-3 py-1 bg-red-500 text-white rounded">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    }

    localStorage.setItem("products", JSON.stringify(products));
}




//                         Add or Update product
form.addEventListener("submit", function (e) {

    e.preventDefault();

    let product = {
        pid: document.getElementById("pid").value,
        category: document.getElementById("category").value,
        name: document.getElementById("productname").value,
        price: document.getElementById("price").value,
        stock: document.getElementById("stock").value
    };

    if (editIndex === -1) {
        
        products.push(product);
    } else {
        
        products[editIndex] = product;
        editIndex = -1;
    }

    form.reset();
    showProducts();
});











//                                          Delete product
function deleteProduct(index) {
    products.splice(index, 1);
    showProducts();
}




                        // Edit product
function editProduct(index) {

    let p = products[index];

    document.getElementById("pid").value = p.pid;
    document.getElementById("category").value = p.category;
    document.getElementById("productname").value = p.name;
    document.getElementById("price").value = p.price;
    document.getElementById("stock").value = p.stock;

    editIndex = index;
}

showProducts();