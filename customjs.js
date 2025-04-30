/*const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.prev-btn');

let currentIndex = 0;

function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});*/
       // Select the hamburger menu and dropdown
      // Select elements
      document.addEventListener("DOMContentLoaded", () => {
        const hamburger = document.querySelector(".hamburger");
        const hamburgerDropdown = document.querySelector(".hamburger-dropdown");
    
        // Check if elements exist
        if (!hamburger || !hamburgerDropdown) {
            console.error("Required elements are missing in the DOM.");
            return;
        }
    
        // Toggle hamburger menu
        hamburger.addEventListener("click", () => {
            hamburgerDropdown.classList.toggle("visible");
        });
    
        // Handle dropdown menu visibility when "Pages" is clicked
        const pagesLink = document.querySelector("a[href='#']:contains('Pages')");
        const dropdownContent = pagesLink ? pagesLink.nextElementSibling : null;
    
        if (pagesLink && dropdownContent) {
            pagesLink.addEventListener("click", function (e) {
                e.preventDefault(); // Prevent default link behavior
                dropdownContent.style.display =
                    dropdownContent.style.display === "block" ? "none" : "block";
            });
        }
    
        // Close dropdown if clicked outside
        document.addEventListener("click", function (event) {
            if (!hamburger.contains(event.target) && !hamburgerDropdown.contains(event.target)) {
                dropdownContent.style.display = "none"; // Close dropdown
                hamburgerDropdown.classList.remove("visible"); // Close the entire menu
            }
        });
    });
    
      
      

