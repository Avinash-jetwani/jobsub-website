const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

// Initial setup
let currentIndex = 1; // Start with the center image

function updateCarousel() {
  // Reset all items
  items.forEach((item, index) => {
    item.classList.remove('center-item');
    item.style.order = index; // Set the default order for CSS layout
  });

  // Set the current center item
  items[currentIndex].classList.add('center-item');
  items[currentIndex].style.order = 0;

  // Set orders for neighbors (circular rotation)
  items[(currentIndex - 1 + items.length) % items.length].style.order = -1; // Left of center
  items[(currentIndex + 1) % items.length].style.order = 1;  // Right of center
}

// Move to the next image
function moveToNext() {
  currentIndex = (currentIndex + 1) % items.length; 
  updateCarousel();
}

// Move to the previous image
function moveToPrev() {
  currentIndex = (currentIndex - 1 + items.length) % items.length; 
  updateCarousel();
}

// Add event listeners for the arrows
rightArrow.addEventListener('click', moveToNext);
leftArrow.addEventListener('click', moveToPrev);

// Initialize the carousel
updateCarousel();

// FAQ Toggle
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        item.classList.toggle('active');

        // Close other active items
        faqItems.forEach((otherItem) => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
    });
});

// Trades Section
const tradesMarquee = document.querySelector('.trades-marquee');

tradesMarquee.addEventListener('mouseenter', () => {
    tradesMarquee.style.animationPlayState = 'paused';
});

tradesMarquee.addEventListener('mouseleave', () => {
    tradesMarquee.style.animationPlayState = 'running';
});

// Testimonials Carousel Logic
// Testimonials Carousel Logic
const testimonialsCarousel = document.querySelector('.testimonials-carousel');
const testimonialItems = document.querySelectorAll('.testimonial-item');
const leftTestimonialArrow = document.querySelector('.left-testimonial-arrow');
const rightTestimonialArrow = document.querySelector('.right-testimonial-arrow');

let testimonialIndex = 0;

function updateTestimonials() {
  // Calculate how far to slide
  const itemWidth = testimonialItems[0].offsetWidth + 20; 
  const offset = testimonialIndex * itemWidth;

  // Move carousel using transform
  testimonialsCarousel.style.transform = `translateX(-${offset}px)`;

  // If you want to highlight the "active" card:
  testimonialItems.forEach((item, index) => {
    item.classList.toggle('active', index === testimonialIndex);
  });
}

function moveToNextTestimonial() {
  testimonialIndex = (testimonialIndex + 1) % testimonialItems.length;
  updateTestimonials();
}

function moveToPrevTestimonial() {
  testimonialIndex = (testimonialIndex - 1 + testimonialItems.length) % testimonialItems.length;
  updateTestimonials();
}

// Arrow Event Listeners
rightTestimonialArrow.addEventListener('click', moveToNextTestimonial);
leftTestimonialArrow.addEventListener('click', moveToPrevTestimonial);

// Autoplay (Optional)
let autoplayInterval = setInterval(moveToNextTestimonial, 5000);

// Pause on Hover
testimonialsCarousel.addEventListener('mouseenter', () => {
  clearInterval(autoplayInterval);
});
testimonialsCarousel.addEventListener('mouseleave', () => {
  autoplayInterval = setInterval(moveToNextTestimonial, 5000);
});

// Keyboard Arrow Support
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    moveToNextTestimonial();
  } else if (e.key === 'ArrowLeft') {
    moveToPrevTestimonial();
  }
});

// Initialize the carousel
updateTestimonials();

// Add Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Button Hover Interaction
  document.querySelectorAll('.btn, .btn-secondary').forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-3px)';
    });
  
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0)';
    });
  });
  
  // Add Lazy Loading for Images
  document.querySelectorAll('img').forEach(img => {
    img.setAttribute('loading', 'lazy');
  });