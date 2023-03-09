(function () {

    const events = [
        {
            src: 'img/main_upcomingevents/manoncomputer.png',
            alt: 'Man-on-computer',
            type: 'Courses',
            date: 'June 29, 2023',
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
            date: 'April 19, 2023',
            title: 'Community Management',
            description: 'Your coworking community influences on finding your leading voice.'
        },

    ];

    renderEvent(events);
    countDown();


    function renderEvent(events) {
        const eventsConteiner = document.querySelector('.upcoming-events__inner-events');
        eventsConteiner.innerHTML = '';

        for (const event of events) {

            eventsConteiner.innerHTML += `
            <div class="upcoming-events__inner-events-item">
                <div class="upcoming-events__inner-events-item-event">
                    <div class="upcoming-events__inner-events-item-event-image">
                        <img class="upcoming-events__inner-events-item-event-image-item" src="${event.src}"
                        alt="${event.alt}">
                    </div>
                    <div class="upcoming-events__inner-events-item-event-info">
                    <span class="upcoming-events__inner-events-item-event-info-type">${event.type} </span>
                    <span class="upcoming-events__inner-events-item-event-info-type-devider">|</span>
                    <span class="upcoming-events__inner-events-item-event-info-date">${event.date}</span>
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
                    <div class="upcoming-events__inner-events-item-event-modal-window-style">
                    <div class="upcoming-events__inner-events-item-event-info">
                    <span class="upcoming-events__inner-events-item-event-info-type">${event.type} </span>
                    <span class="upcoming-events__inner-events-item-event-info-type-devider">|</span>
                    <span class="upcoming-events__inner-events-item-event-info-date">${event.date}</span>
                    </div>
                        <div class="upcoming-events__inner-count-down"></div>
                        <p>${event.description} ${event.description} ${event.description}</p>
                        <button class="upcoming-events__inner-events-item-event-button close-window">close</button>
                        </div>
                    </dialog>
                </div>
            </div>
            `;
        }
    };

    function countDown() {
        const intervalId = setInterval(() => {
            const elements = document.querySelectorAll('.upcoming-events__inner-count-down');
            elements.forEach((element, index) => {
                const event = events[index];
                const endDate = new Date(event.date).getTime();
                const now = new Date().getTime();
                const gap = endDate - now;

                const second = 1000;
                const minute = second * 60;
                const hour = minute * 60;
                const day = hour * 24;

                const textDay = Math.floor(gap / day);
                const textHour = Math.floor((gap % day) / hour);
                const textMinute = Math.floor((gap % hour) / minute);
                const textSecond = Math.floor((gap % minute) / second);

                element.innerHTML = `
                <h3>Event starts in:</h3>
                <h3 class="count-down-day">${textDay} days</h3>
                <h3 class="count-down-hour">${textHour} hours</h3>
                <h3 class="count-down-minute">${textMinute} minutes</h3>
                <h3 class="count-down-second">${textSecond} seconds</h3>
            `;
            });
        }, 1000);

        setTimeout(() => {
            clearInterval(intervalId);
        }, 10 * 60 * 1000);
    }

})();