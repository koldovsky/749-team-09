(function () {

    const slides = [
        '<div class="team__wrapper-item"><div class="team__ceo"><img class="team__ceo-photo photo" src="img/space_team/ceo.jpg" alt="ceo photo"><h3 class="team__ceo-name name">Andrew Shimmer</h3><span class="team__ceo-position position">CEO</span></div></div>',
        '<div class="team__wrapper-item"><div class="team__marketing"><img class="team__marketing-photo photo" src="img/space_team/marketing.jpg" alt="marketing photo"><h3 class="team__marketing-name name">Ann Maisner</h3><span class="team__marketing-position position">Marketing Director</span></div></div>',
        '<div class="team__wrapper-item"><div class="team__manager"><img class="team__manager-photo photo" src="img/space_team/manager.jpg" alt="manager photo"><h3 class="team__manager-name name">Tomas Abbar</h3><span class="team__manager-position position">Product Manager</span></div></div>',
    ];

    let currentSlide = 0;

    function renderSlides(slides) {
        const slidesContainer = document.querySelector('.team__wrapper');
        slidesContainer.innerHTML = slides[currentSlide];
        if (window.innerWidth > 768) {
            const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slidesContainer.innerHTML += slides[secondSlide];
            if (window.innerWidth > 900) {
                const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
                slidesContainer.innerHTML += slides[thirdSlide];
            }
        }
    }

    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        renderSlides(slides);
    }

    function prevSlide() {
        currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
        renderSlides(slides);
    }

    renderSlides(slides);

    const nextButton = document.querySelector('.team-carousel__next');
    nextButton.addEventListener('click', nextSlide);

    const prevButton = document.querySelector('.team-carousel__prev');
    prevButton.addEventListener('click', prevSlide);

    window.addEventListener('resize', () => {
        renderSlides(slides);
    });
})();