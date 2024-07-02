let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slideshow");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

document.addEventListener('DOMContentLoaded', (event) => {
    let slides = document.getElementsByClassName('slideshow');
    let slideIndex = 0;

    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = 'block';
        slides[slideIndex - 1].style.transform = 'rotateY(0)';
        setTimeout(() => {
            slides[slideIndex - 1].style.transform = 'rotateY(360deg)';
        }, 1000);
        setTimeout(showSlides, 5000); // Change image every 5 seconds
    }

    showSlides();

    // Creating hearts and cakes falling animation
    for (let i = 0; i < 10; i++) {
        createFallingElement('heart');
        createFallingElement('cake');
    }

    function createFallingElement(className) {
        let element = document.createElement('div');
        element.className = className;
        document.body.appendChild(element);
        element.style.left = Math.random() * 100 + 'vw';
        element.style.animationDelay = Math.random() * 5 + 's';
    }
});
