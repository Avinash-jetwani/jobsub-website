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

// testimonialsCarousel

const testimonialsCarousel = document.querySelector('.testimonials-carousel');
const container = document.querySelector('.testimonials-carousel-container');

let isHoveringLeft = false;
let isHoveringRight = false;
let animationFrame;
let scrollPosition = 0;

// Function to move the carousel smoothly
function smoothScroll(direction) {
    scrollPosition += direction === 'right' ? -1.5 : 1.5;
    testimonialsCarousel.style.transform = `translateX(${scrollPosition}px)`;

    // Restart the animation frame
    animationFrame = requestAnimationFrame(() => smoothScroll(direction));
}

// Start scrolling in the given direction
function startScrolling(direction) {
    stopScrolling(); // Stop any ongoing scrolling
    animationFrame = requestAnimationFrame(() => smoothScroll(direction));
}

// Stop scrolling
function stopScrolling() {
    cancelAnimationFrame(animationFrame);
}

// Event Listeners for mouse movement
container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const hoverArea = rect.width / 4; // Divide the container into hover zones

    if (e.clientX < rect.left + hoverArea) {
        // Hovering on the left
        if (!isHoveringLeft) {
            isHoveringLeft = true;
            isHoveringRight = false;
            startScrolling('left');
        }
    } else if (e.clientX > rect.right - hoverArea) {
        // Hovering on the right
        if (!isHoveringRight) {
            isHoveringRight = true;
            isHoveringLeft = false;
            startScrolling('right');
        }
    } else {
        // Not hovering on edges
        isHoveringLeft = false;
        isHoveringRight = false;
        stopScrolling();
    }
});

// Stop scrolling when mouse leaves the container
container.addEventListener('mouseleave', stopScrolling);

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

  // how it works section
  document.addEventListener('DOMContentLoaded', function () {
    var toggleBtns = document.querySelectorAll('.toggle-btn');
    var timelines = document.querySelectorAll('.timeline');

    toggleBtns.forEach(function(button) {
      button.addEventListener('click', function() {
        // Remove 'active' from all buttons
        toggleBtns.forEach(function(btn) {
          btn.classList.remove('active');
        });
        // Add 'active' to the clicked button
        this.classList.add('active');

        // Hide all timelines
        timelines.forEach(function(timeline) {
          timeline.classList.remove('active');
        });

        // Show the targeted timeline
        var target = this.getAttribute('data-target');
        document.getElementById(target).classList.add('active');
      });
    });
  });