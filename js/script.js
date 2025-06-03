// Скрипт для звездного фона (опционально можно заменить на canvas-анимацию)
document.addEventListener("DOMContentLoaded", () => {
    const starsContainer = document.querySelector('.stars');

    // Можно создать динамическое количество звезд
    // В текущем стиле используется фоновое изображение, но можно оживить звезды:
    /*
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        starsContainer.appendChild(star);
    }
    */

    // Обработка формы отправки (будет работать, если подключить бэкенд или email API)
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! Your message has been sent.');
            form.reset();
        });
    }
});
