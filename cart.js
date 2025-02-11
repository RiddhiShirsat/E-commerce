document.addEventListener("DOMContentLoaded", function () {
    const cartContainer = document.getElementById("cart-items");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach((item, index) => {
            const cartItem = `
                <div class="cart-item">
                    <p>${item.name} - $${item.price}</p>
                    <button class="btn btn-danger remove-item" data-index="${index}">Remove</button>
                </div>
            `;
            cartContainer.innerHTML += cartItem;
        });

        document.querySelectorAll(".remove-item").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                removeFromCart(index);
            });
        });
    }
});

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload(); // Refresh the page to update cart
}

document.getElementById("checkout-btn").addEventListener("click", function () {
    alert("Proceeding to checkout...");
    localStorage.removeItem("cart");
    location.reload();
});
