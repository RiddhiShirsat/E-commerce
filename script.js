function addToCart(item, price) {
    alert(item + " has been added to your cart!");
}

// Smooth scrolling effect for better user experience
document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".nav-link");
    let navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (navbarCollapse.classList.contains("show")) {
                navbarCollapse.classList.remove("show");
            }
        });
    });
});

function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let itemIndex = cart.findIndex(item => item.name === name);
    if (itemIndex > -1) {
        cart[itemIndex].quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} has been added to your cart!`);
}
