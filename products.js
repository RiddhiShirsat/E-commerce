document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { name: "Fresh Vegetables", price: 20, img: "veggies1.jpg" },
        { name: "Organic Fruits", price: 30, img: "fruits1.jpg" },
        { name: "Dairy Products", price: 10, img: "dairy1.jpg" }
    ];

    const productContainer = document.getElementById("product-list");

    products.forEach(product => {
        const productCard = `
            <div class="col-md-4">
                <div class="card product-card">
                    <img src="${product.img}" class="card-img-top" alt="${product.name}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">$${product.price} per unit</p>
                        <button class="btn btn-orange add-to-cart" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        productContainer.innerHTML += productCard;
    });

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const name = this.getAttribute("data-name");
            const price = parseFloat(this.getAttribute("data-price"));
            addToCart(name, price);
        });
    });
});

function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} has been added to your cart!`);
}
