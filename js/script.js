document.addEventListener("DOMContentLoaded", () => {
    // Contact form handler
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thanks! Your message has been sent.");
            form.reset();
        });
    }

    // Smooth scroll for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
        link.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
});
