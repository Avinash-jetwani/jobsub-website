const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

    // Start with the second item (index=1) as the center
    let currentIndex = 1; 

    function updateCarousel() {
      // Hide all items by default
      items.forEach((item) => {
        item.style.display = 'none'; 
        item.classList.remove('center-item');
        item.style.order = '0';
        item.style.opacity = '0.5';
        item.style.transform = 'scale(0.8)';
      });

      // Show center item
      items[currentIndex].style.display = 'flex';
      items[currentIndex].classList.add('center-item');
      items[currentIndex].style.order = '0';
      items[currentIndex].style.opacity = '1';
      items[currentIndex].style.transform = 'scale(1)';

      // Determine left and right neighbor indexes (circularly)
      const leftIndex = (currentIndex - 1 + items.length) % items.length;
      const rightIndex = (currentIndex + 1) % items.length;

      // Show left neighbor
      items[leftIndex].style.display = 'flex';
      items[leftIndex].style.order = '-1';

      // Show right neighbor
      items[rightIndex].style.display = 'flex';
      items[rightIndex].style.order = '1';
    }

    function moveToNext() {
      currentIndex = (currentIndex + 1) % items.length; 
      updateCarousel();
    }

    function moveToPrev() {
      currentIndex = (currentIndex - 1 + items.length) % items.length; 
      updateCarousel();
    }

    // Arrow listeners
    rightArrow.addEventListener('click', moveToNext);
    leftArrow.addEventListener('click', moveToPrev);

    // Initialize carousel
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

// const testimonialsCarousel = document.querySelector('.testimonials-carousel');
// const container = document.querySelector('.testimonials-carousel-container');

// let isHoveringLeft = false;
// let isHoveringRight = false;
// let animationFrame;
// let scrollPosition = 0;

// // Function to move the carousel smoothly
// function smoothScroll(direction) {
//     scrollPosition += direction === 'right' ? -1.5 : 1.5;
//     testimonialsCarousel.style.transform = `translateX(${scrollPosition}px)`;

//     // Restart the animation frame
//     animationFrame = requestAnimationFrame(() => smoothScroll(direction));
// }

// // Start scrolling in the given direction
// function startScrolling(direction) {
//     stopScrolling(); // Stop any ongoing scrolling
//     animationFrame = requestAnimationFrame(() => smoothScroll(direction));
// }

// // Stop scrolling
// function stopScrolling() {
//     cancelAnimationFrame(animationFrame);
// }

// Event Listeners for mouse movement
// container.addEventListener('mousemove', (e) => {
//     const rect = container.getBoundingClientRect();
//     const hoverArea = rect.width / 4; // Divide the container into hover zones

//     if (e.clientX < rect.left + hoverArea) {
//         // Hovering on the left
//         if (!isHoveringLeft) {
//             isHoveringLeft = true;
//             isHoveringRight = false;
//             startScrolling('left');
//         }
//     } else if (e.clientX > rect.right - hoverArea) {
//         // Hovering on the right
//         if (!isHoveringRight) {
//             isHoveringRight = true;
//             isHoveringLeft = false;
//             startScrolling('right');
//         }
//     } else {
//         // Not hovering on edges
//         isHoveringLeft = false;
//         isHoveringRight = false;
//         stopScrolling();
//     }
// });

// Stop scrolling when mouse leaves the container
// container.addEventListener('mouseleave', stopScrolling);

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
  // Wait until DOM is ready
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
        var targetId = this.getAttribute('data-target');
        var targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.classList.add('active');
        }
      });
    });
  });