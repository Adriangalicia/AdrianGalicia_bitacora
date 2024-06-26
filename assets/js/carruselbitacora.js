let carouselPositions = {};

function moveCarousel(carouselId, direction) {
    const carousel = document.querySelector(carouselId + ' ul');
    const items = carousel.querySelectorAll('li');
    const itemWidth = items[0].offsetWidth;
    if (!carouselPositions[carouselId]) {
        carouselPositions[carouselId] = 0;
    }

    carouselPositions[carouselId] += direction;
    if (carouselPositions[carouselId] < 0) {
        carouselPositions[carouselId] = items.length - 1;
    } else if (carouselPositions[carouselId] >= items.length) {
        carouselPositions[carouselId] = 0;
    }

    carousel.style.transform = `translateX(-${carouselPositions[carouselId] * itemWidth}px)`;
}