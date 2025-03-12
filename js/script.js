document.addEventListener('DOMContentLoaded', function () {
    // Testimonial carousel functionality
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    let currentTestimonial = 0;

    // Show only the first testimonial initially
    hideAllTestimonials();
    testimonials[0].style.display = 'block';
    dots[0].classList.add('active');

    // Function to hide all testimonials
    function hideAllTestimonials() {
        testimonials.forEach(testimonial => {
            testimonial.style.display = 'none';
        });

        dots.forEach(dot => {
            dot.classList.remove('active');
        });
    }

    // Function to show next testimonial
    function showNextTestimonial() {
        hideAllTestimonials();
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].style.display = 'block';
        dots[currentTestimonial].classList.add('active');
    }

    // Auto-rotate testimonials every 5 seconds
    setInterval(showNextTestimonial, 5000);

    // Click event for dots to show specific testimonial
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            hideAllTestimonials();
            currentTestimonial = index;
            testimonials[currentTestimonial].style.display = 'block';
            dots[currentTestimonial].classList.add('active');
        });
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}); 