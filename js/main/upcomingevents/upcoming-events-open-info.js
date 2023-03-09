(function () {

    const modals = document.querySelectorAll('.upcoming-events__inner-events-item-event-modal-window');
    const openModal = document.querySelectorAll('.open-window');
    const closeModal = document.querySelectorAll('.close-window');

    modals.forEach((modal, index) => {
        openModal[index].addEventListener('click', () => modal.showModal());
        closeModal[index].addEventListener('click', () => modal.close());
    });

})();