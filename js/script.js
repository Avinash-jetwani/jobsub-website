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


const testimonialsCarousel = document.querySelector('.testimonials-carousel');
const container = document.querySelector('.testimonials-carousel-container');

let currentTransform = 0;
let isHoveringLeft = false;
let isHoveringRight = false;
let autoScrollInterval;

// Function to handle auto-scrolling
function autoScroll() {
    currentTransform -= 1; // Default left-to-right scrolling
    if (Math.abs(currentTransform) >= testimonialsCarousel.scrollWidth / 2) {
        currentTransform = 0; // Reset position for seamless scrolling
    }
    testimonialsCarousel.style.transform = `translateX(${currentTransform}px)`;
}

// Start Auto-scrolling
autoScrollInterval = setInterval(autoScroll, 30);

// Function to handle directional scrolling
function handleHover(e) {
    const rect = container.getBoundingClientRect();
    const hoverArea = rect.width / 4; // Define left and right corners for hover detection

    if (e.clientX < rect.left + hoverArea) {
        if (!isHoveringLeft) {
            isHoveringLeft = true;
            isHoveringRight = false;
            clearInterval(autoScrollInterval); // Stop auto-scrolling
            autoScrollInterval = setInterval(() => {
                currentTransform += 2; // Scroll to the left
                testimonialsCarousel.style.transform = `translateX(${currentTransform}px)`;
            }, 20);
        }
    } else if (e.clientX > rect.right - hoverArea) {
        if (!isHoveringRight) {
            isHoveringRight = true;
            isHoveringLeft = false;
            clearInterval(autoScrollInterval); // Stop auto-scrolling
            autoScrollInterval = setInterval(() => {
                currentTransform -= 2; // Scroll to the right
                testimonialsCarousel.style.transform = `translateX(${currentTransform}px)`;
            }, 20);
        }
    } else {
        // Reset to auto-scroll when user is not hovering near the edges
        isHoveringLeft = false;
        isHoveringRight = false;
        clearInterval(autoScrollInterval);
        autoScrollInterval = setInterval(autoScroll, 30);
    }
}

// Add Event Listeners for hover
container.addEventListener('mousemove', handleHover);

// Stop scrolling when the mouse leaves the carousel
container.addEventListener('mouseleave', () => {
    isHoveringLeft = false;
    isHoveringRight = false;
    clearInterval(autoScrollInterval);
    autoScrollInterval = setInterval(autoScroll, 30);
});

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