(function() {

    const slides = [
        '<article class="testimonials-carousel__slide"><div class="testimonials-carousel__slide-img"><img src="img/testimonials/testimonials_carousel-slide-1.jpg" alt="Jeff Gordons" width="120" height="120"></div><h3 class="testimonials-carousel__title">Jeff Gordons</h3><h4 class="testimonials-carousel__subtitle">CEO at Clear Thinking</h4><p class="testimonials-carousel__text">“Our company started to work with The Station 4 years ago. We had only positive experience and implemented a lot of projects together. We&apos;re totally satisfied and now we know that we can rely on The Station experts any time.”</p></article>',
        '<article class="testimonials-carousel__slide"><div class="testimonials-carousel__slide-img"><img src="img/testimonials/testimonials_carousel-slide-2.jpg" alt="Jeff Gordons" width="120" height="120"></div><h3 class="testimonials-carousel__title">Jeff Gordons</h3><h4 class="testimonials-carousel__subtitle">CEO at Clear Thinking</h4><p class="testimonials-carousel__text">“Our company started to work with The Station 4 years ago. We had only positive experience and implemented a lot of projects together. We&apos;re totally satisfied and now we know that we can rely on The Station experts any time.”</p></article>',
        '<article class="testimonials-carousel__slide"><div class="testimonials-carousel__slide-img"><img src="img/testimonials/testimonials_carousel-slide-3.jpg" alt="Amanda Peterson" width="120" height="120"></div><h3 class="testimonials-carousel__title">Amanda Peterson</h3><h4 class="testimonials-carousel__subtitle">Marketing Director at Fresh Food Co.</h4><p class="testimonials-carousel__text">“I was happy to work with The Station because their efficient solutions helped us improve plenty of business processes. As a result, our clients receive their products faster and are more satisfied with our services. They deserve the highest grade!”</p></article>',
    ];

    let currentSlide = 0;

    function renderSlides() {
    const slidesContainer = document.querySelector('.testimonials-carousel__slides');
    slidesContainer.innerHTML = slides[currentSlide];
    }

    function navigate(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    renderSlides();
    }

    const nextButton = document.querySelector('.testimonials-carousel__next');
    nextButton.addEventListener('click', () => navigate(1));

    const prevButton = document.querySelector('.testimonials-carousel__prev');
    prevButton.addEventListener('click', () => navigate(-1));

    renderSlides();
    
})(); 