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

        star.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: white;
            border-radius: 50%;
            left: ${posX}%;
            top: ${posY}%;
            opacity: ${opacity};
            animation: twinkle ${duration}s linear ${delay}s infinite;
            box-shadow: 0 0 ${size * 2}px ${size}px rgba(255,255,255,0.2);
        `;

        starsContainer.appendChild(star);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    createStars();
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
    
    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.');
            this.reset();
        });
    }
    
    // Add animation to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.portfolio-item, .section-title, .form-group');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
    
    // Add particle effect to hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        createParticles(heroSection);
    }

    const projectTitles = document.querySelectorAll('.project-title');
    projectTitles.forEach(title => {
        randomGlitch(title);
    });
});

function createParticles(container) {
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        // Random color - blue or pink
        const colors = ['#0ff0fc', '#ff2d75'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.backgroundColor = randomColor;
        
        container.appendChild(particle);
    }
}

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