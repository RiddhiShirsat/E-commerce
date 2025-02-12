document.addEventListener("DOMContentLoaded", function () {
    const cartContainer = document.getElementById("cart-items");
    const totalPriceContainer = document.getElementById("total-price");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        totalPriceContainer.innerHTML = "Total: ₹0";
    } else {
        cartContainer.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            if (!item.quantity) item.quantity = 1; // Fix for existing incorrect cart items
            total += item.price * item.quantity;

            cartContainer.innerHTML += `
                <div class="cart-item d-flex justify-content-between align-items-center p-2 border-bottom">
                    <div>
                        <strong>${item.name}</strong> - ₹${item.price} x ${item.quantity}
                    </div>
                    <button class="btn btn-danger btn-sm remove-item" data-index="${index}">Remove</button>
                </div>
            `;
        });

        totalPriceContainer.innerHTML = `Total: ₹${total}`;

        document.querySelectorAll(".remove-item").forEach(button => {
            button.addEventListener("click", function () {
                removeFromCart(this.getAttribute("data-index"));
            });
        });
    }
});

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload(); // Refresh cart page
}

document.getElementById("checkout-btn").addEventListener("click", function () {
    alert("Proceeding to checkout...");
    localStorage.removeItem("cart");
    location.reload();
});
