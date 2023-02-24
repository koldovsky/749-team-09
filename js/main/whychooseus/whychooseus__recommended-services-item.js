(function () {

    const services = [
        {
            svgPicture: 'img/main_whychooseus/cateredmeals.svg',
            name: 'Catered Meals'
        },
        {
            svgPicture: 'img/main_whychooseus/conferencerooms.svg',
            name: 'Conference Rooms'
        },
        {
            svgPicture: 'img/main_whychooseus/community.svg',
            name: 'Community'
        },
        {
            svgPicture: 'img/main_whychooseus/eventsandlearnig.svg',
            name: 'Events & Learning'
        },
        {
            svgPicture: 'img/main_whychooseus/working24per7.svg',
            name: 'Working 24/7'
        },
        {
            svgPicture: 'img/main_whychooseus/highspeedinternet.svg',
            name: 'High-Speed Internet'
        },
    ];

    function renderService(services) {
        const servicesConteiner = document.querySelector('.whychooseus__recommended-services');
        servicesConteiner.innerHTML = '';

        for (const service of services) {
            servicesConteiner.innerHTML += `
            <div class="whychooseus__recommended-services-item">
                <div class="whychooseus__recommended-services-item-service">
                    <div class="whychooseus__recommended-services-item-service-icon">
                        <svg class="whychooseus__recommended-services-item-service-icon-svg">
                            <use href="${service.svgPicture}#icon"></use>
                        </svg>
                    </div>
                    <div class="whychooseus__recommended-services-item-service-text">
                         <h3>${service.name}</h3>
                    </div>
                </div>
            </div>
            `;
        }
    }

    renderService(services);

})();