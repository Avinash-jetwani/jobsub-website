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
        // Toggle active state
        item.classList.toggle('active');

        // Close other items
        faqItems.forEach((otherItem) => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
    });
});