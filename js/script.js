document.addEventListener('DOMContentLoaded', function () {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    let currentTestimonial = 0;

    hideAllTestimonials();
    testimonials[0].style.display = 'block';
    dots[0].classList.add('active');

    function hideAllTestimonials() {
        testimonials.forEach(testimonial => {
            testimonial.style.display = 'none';
        });

        dots.forEach(dot => {
            dot.classList.remove('active');
        });
    }

    function showNextTestimonial() {
        hideAllTestimonials();
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].style.display = 'block';
        dots[currentTestimonial].classList.add('active');
    }

    setInterval(showNextTestimonial, 5000);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            hideAllTestimonials();
            currentTestimonial = index;
            testimonials[currentTestimonial].style.display = 'block';
            dots[currentTestimonial].classList.add('active');
        });
    });

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