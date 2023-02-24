const items = document.querySelectorAll('.whychooseus__recommended-services-item');

items.forEach((item) => {
    item.addEventListener('mousedown', () => {
        item.classList.add('whychooseus__recommended-services-item-scale');
    });
    item.addEventListener('mouseup', () => {
        item.classList.remove('whychooseus__recommended-services-item-scale');
    });
});