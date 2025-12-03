document.addEventListener('DOMContentLoaded', function() {
    
    const myCarousel = document.querySelector('#carouselExampleDark');
    
    // Inicializa o Carousel do Bootstrap
    if (myCarousel && typeof bootstrap !== 'undefined') {
        const carousel = new bootstrap.Carousel(myCarousel, {
            interval: 4000,
            ride: 'carousel'
        });
    }
});
