(function () {

    const events = [
        {
            src: 'img/main_upcomingevents/manoncomputer.png',
            alt: 'Man-on-computer',
            type: 'Courses',
            date: 'July 29, 2023',
            title: 'Turn an Idea into a Startup',
            description: 'Learn how to successfully transform your startup idea into reality in just a few hours.'
        },
        {
            src: 'img/main_upcomingevents/peoplewithhandsup.png',
            alt: 'People-with-hands-up',
            type: 'Art',
            date: 'July 25, 2023',
            title: '3-Day Collage Workshop',
            description: 'We offer you a 2-day course on how to create artwork out of the recycled magazines.'
        },
        {
            src: 'img/main_upcomingevents/peopleonmeeting.png',
            alt: 'People-on-meeting',
            type: 'Community',
            date: 'July 19, 2023p',
            title: 'Community Management',
            description: 'Your coworking community influences on finding your leading voice.'
        },

    ];

    function renderEvent(events) {
        const eventsConteiner = document.querySelector('.upcoming-events__inner-events');
        eventsConteiner.innerHTML = '';

        for (const event of events) {
            eventsConteiner.innerHTML += `
            <div class="upcoming-events__inner-events-item upcoming-events__inner-events-item-button">
                <div class="upcoming-events__inner-events-item-event">
                    <div class="upcoming-events__inner-events-item-event-image">
                        <img class="upcoming-events__inner-events-item-event-image-item" src="${event.src}"
                        alt="${event.alt}">
                    </div>
                    <div class="upcoming-events__inner-events-item-event-info">
                        <span class="upcoming-events__inner-events-item-event-info-type">${event.type} <span
                            class="upcoming-events__inner-events-item-event-info-type-devider">|</span>
                        ${event.date}</span>
                    </div>
                    <div class="upcoming-events__inner-events-item-event-inner">
                        <div class="upcoming-events__inner-events-item-event-inner-title">
                            <h3 class="upcoming-events__inner-events-item-event-inner-title-text">${event.title}</h3>
                        </div>
                        <div class="upcoming-events__inner-events-item-event-inner-description">
                            <p>${event.description}</p>
                        </div>
                    </div>
                    <button class="upcoming-events__inner-events-item-event-button open-window">more information</button>
                    <dialog class="upcoming-events__inner-events-item-event-modal-window">
                        <p>${event.description} ${event.description} ${event.description}</p>
                        <button class="upcoming-events__inner-events-item-event-button open-window">more information</button>
                    </dialog>
                </div>
            </div>
            `;
        }
    }

    renderEvent(events);

})();