document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector("input[type='text']").value;
    const email = document.querySelector("input[type='email']").value;
    const message = document.querySelector("textarea").value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill in all fields.");
    }
});
