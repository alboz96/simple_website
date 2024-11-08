// Example JavaScript for button interaction
document.querySelectorAll(".buy-button").forEach((button) => {
  button.addEventListener("click", () => {
    alert("Item added to cart!");
  });
});

let currentIndex = 0;

const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

document.querySelector(".carousel-next").addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % totalItems; // Go to next item
  updateCarousel();
});

document.querySelector(".carousel-prev").addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Go to previous item
  updateCarousel();
});

function updateCarousel() {
  items.forEach((item, index) => {
    item.style.display = index === currentIndex ? "block" : "none"; // Show only current item
  });
}

updateCarousel(); // Initial call to display the first item

// Toggle the menu visibility when the hamburger icon is clicked
document.addEventListener("DOMContentLoaded", function () {
  // Get the menu icon and the menu element
  const menuIcon = document.getElementById("menu-icon");
  const menu = document.getElementById("menu");

  // Check if the elements exist before adding event listeners
  if (menuIcon && menu) {
    menuIcon.addEventListener("click", function () {
      menu.classList.toggle("show"); // Toggle the visibility of the menu
    });
  } else {
    console.error("Menu or Menu Icon not found!");
  }
});
