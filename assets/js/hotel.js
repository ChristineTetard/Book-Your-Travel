//===== CAROUSEL =====

// IMAGES

const images = [
    "/Book-Your-Travel/assets/images/hotel/luxury-poolside-experience-where-guests-bask-opulence-cabanas (1).jpg",
    "/Book-Your-Travel/assets/images/hotel/hhyunma-hotel-swimming-pool-1065275_1920 (1).jpg",
    "/Book-Your-Travel/assets/images/hotel/engin_akyurt-resort-4369984_1920 (1).jpg",
    "/Book-Your-Travel/assets/images/hotel/dreamwalker-palm-966994_1920 (1).jpg",
    "/Book-Your-Travel/assets/images/hotel/chair-pool (1) (1).jpg"
];


// ELEMENTS

const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumbnail");
const previousButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

// IMAGE ACTUELLE

let currentIndex = 0;

// AFFICHER UNE IMAGE

function showSlide(index) {
    currentIndex = index;

    /* Change la grande image */
    mainImage.src = images[currentIndex];


    /* Change la petite image active */
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.classList.toggle(
            "active",
            index === currentIndex
        );
    });
}

// BOUTON PREVIOUS

previousButton.addEventListener("click", function () {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showSlide(currentIndex);
});

// BOUTON NEXT

nextButton.addEventListener("click", function () {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showSlide(currentIndex);
});

// PETITES IMAGES

thumbnails.forEach(function (thumbnail) {
    thumbnail.addEventListener("click", function () {

        const index = Number(
            thumbnail.dataset.index
        );

        showSlide(index);
    });
});