// Get the carousel indicators
const carouselIndicators = document.querySelectorAll(".carousel-indicators li");

// Get the carousel items
const carouselItems = document.querySelectorAll(".carousel-item");

// Set an index for the active item
let activeIndex = 0;

// Loop through the carousel indicators and add a click event listener to each
carouselIndicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    // Remove the active class from the current item and indicator
    carouselItems[activeIndex].classList.remove("active");
    carouselIndicators[activeIndex].classList.remove("active");

    // Set the new active index
    activeIndex = index;

    // Add the active class to the new item and indicator
    carouselItems[activeIndex].classList.add("active");
    carouselIndicators[activeIndex].classList.add("active");
  });
});
