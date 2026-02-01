// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Typing animation for the name
const typingElement = document.getElementById('typing-name');
const names = ['Kỹ sư Phần mềm', 'Web Developer', 'Creative Thinker'];
let nameIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 150;

function type() {
    const currentName = names[nameIndex];

    if (isDeleting) {
        typingElement.textContent = currentName.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 100;
    } else {
        typingElement.textContent = currentName.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 200;
    }

    if (!isDeleting && charIndex === currentName.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at the end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        nameIndex = (nameIndex + 1) % names.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

// Initial Call
document.addEventListener('DOMContentLoaded', () => {
    type();

    // Smooth reveal on scroll
    const observers = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observers.observe(section);
    });
});
