document.addEventListener('DOMContentLoaded', function () {
    // Create stars
    function createStars() {
        const starsContainer = document.querySelector('.stars');
        if (!starsContainer) return;

        const starCount = 200;

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';

            const size = Math.random() * 2 + 0.5;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const opacity = Math.random() * 0.7 + 0.1;
            const duration = Math.random() * 50 + 50;
            const delay = Math.random() * 10;
            const glowSize = size * 2;

            star.style.cssText = `
                --duration: ${duration}s;
                --delay: ${delay}s;
                --glow-size: ${glowSize}px;
                width: ${size}px;
                height: ${size}px;
                left: ${posX}%;
                top: ${posY}%;
                opacity: ${opacity};
            `;

            starsContainer.appendChild(star);
        }
    }

    // Random glitch effect
    function randomGlitch(element) {
        if (!element) return;

        setInterval(() => {
            const duration = Math.random() * 0.5 + 0.2;
            element.style.animation = `glitch-skew ${duration}s linear`;

            setTimeout(() => {
                element.style.animation = '';
            }, duration * 1000);
        }, 5000);
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            console.log('Form submitted:', data);
            alert('Thanks!');
            this.reset();
        });
    }

    // Animate elements on scroll
    const animateOnScroll = function () {
        const elements = document.querySelectorAll('.portfolio-item, .section-title, .form-group');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };

    // Initialize
    createStars();

    const projectTitles = document.querySelectorAll('.project-title, .glitch');
    projectTitles.forEach(title => {
        randomGlitch(title);
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
});