let slideIndex = 1; // Start at the first slide
showSlides(slideIndex); // Call to show the first slide immediately

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");

    // If n exceeds the number of slides, loop back to the first slide
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    // If n is less than 1, loop back to the last slide
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides by default
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block"; // Use the active index to show the correct image
}
