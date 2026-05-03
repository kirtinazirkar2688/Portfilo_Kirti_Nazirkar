document.addEventListener('DOMContentLoaded', () => {
    // Select all progress bars
    const progressBars = document.querySelectorAll('.progress');

    // Create an intersection observer for the skills section
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If skills section is in view, animate progress bars
                progressBars.forEach(bar => {
                    const targetWidth = bar.getAttribute('data-width');
                    bar.style.width = targetWidth;
                });
            } else {
                // Optional: reset width when out of view so it animates again
                progressBars.forEach(bar => {
                    bar.style.width = '0';
                });
            }
        });
    }, { threshold: 0.3 }); // Trigger when 30% of the element is visible

    // Observe the skills section
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }

    // Active Navigation Link on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you! Your message has been sent.');
            this.reset();
        });
    }
});
