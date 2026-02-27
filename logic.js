// logic.js
document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Year for the Footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Interactive Hero Button
    const actionBtn = document.getElementById('actionBtn');
    if (actionBtn) {
        actionBtn.addEventListener('click', () => {
            // You can replace this with a modal, email signup, or redirect later
            alert('Welcome to the gray area. The blindfolds are coming off.');
        });
    }

    // 3. Scroll Reveal Effect for the text content
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Triggers when 15% of the element is visible
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const textContent = document.querySelector('.text-content');
    if (textContent) {
        // Initial state hidden for the fade-in
        textContent.style.opacity = '0';
        textContent.style.transform = 'translateY(30px)';
        textContent.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        scrollObserver.observe(textContent);
    }
});