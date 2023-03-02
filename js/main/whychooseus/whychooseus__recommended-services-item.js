(function () {

    const services = [
        {
            svgPicture: 'img/main_whychooseus/cateredmeals.svg',
            name: 'Catered Meals',
            description: 'Our catering service offers delicious, customized meals for any occasion. From corporate events to intimate gatherings, we provide a wide range of menu options that can be tailored to your specific needs and preferences. Our experienced team of chefs and staff ensure that your guests will be satisfied and impressed with our high-quality cuisine and impeccable service'
        },
        {
            svgPicture: 'img/main_whychooseus/conferencerooms.svg',
            name: 'Conference Rooms',
            description: 'Our catering service offers delicious, customized meals for any occasion. From corporate events to intimate gatherings, we provide a wide range of menu options that can be tailored to your specific needs and preferences. Our experienced team of chefs and staff ensure that your guests will be satisfied and impressed with our high-quality cuisine and impeccable service'
        },
        {
            svgPicture: 'img/main_whychooseus/community.svg',
            name: 'Community',
            description: 'Our catering service offers delicious, customized meals for any occasion. From corporate events to intimate gatherings, we provide a wide range of menu options that can be tailored to your specific needs and preferences. Our experienced team of chefs and staff ensure that your guests will be satisfied and impressed with our high-quality cuisine and impeccable service'
        },
        {
            svgPicture: 'img/main_whychooseus/eventsandlearnig.svg',
            name: 'Events & Learning',
            description: 'Our catering service offers delicious, customized meals for any occasion. From corporate events to intimate gatherings, we provide a wide range of menu options that can be tailored to your specific needs and preferences. Our experienced team of chefs and staff ensure that your guests will be satisfied and impressed with our high-quality cuisine and impeccable service'
        },
        {
            svgPicture: 'img/main_whychooseus/working24per7.svg',
            name: 'Working 24/7',
            description: 'Our catering service offers delicious, customized meals for any occasion. From corporate events to intimate gatherings, we provide a wide range of menu options that can be tailored to your specific needs and preferences. Our experienced team of chefs and staff ensure that your guests will be satisfied and impressed with our high-quality cuisine and impeccable service'
        },
        {
            svgPicture: 'img/main_whychooseus/highspeedinternet.svg',
            name: 'High-Speed Internet',
            description: 'Our catering service offers delicious, customized meals for any occasion. From corporate events to intimate gatherings, we provide a wide range of menu options that can be tailored to your specific needs and preferences. Our experienced team of chefs and staff ensure that your guests will be satisfied and impressed with our high-quality cuisine and impeccable service'
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
                    <div class="whychooseus__recommended-services-item-service-description">
                         <p>${service.description}</p>
                    </div>
                </div>
            </div>
            `;
        }
    }

    renderService(services);

})();