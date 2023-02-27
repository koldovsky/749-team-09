(function () {

  const recommendedServicesItems = document.querySelectorAll('.whychooseus__recommended-services-item');
  let selectedItem = null;

  recommendedServicesItems.forEach((item) => {
    item.addEventListener('mousedown', (event) => {
      if (selectedItem === item) {
        selectedItem.classList.remove('is-scaled');
        selectedItem.style.transition = 'transform 0.5s ease-out';
        selectedItem.style.transform = 'none';
        setTimeout(() => {
          selectedItem.style.transition = '';
          selectedItem = null;
        }, 500);
      } else {
        if (selectedItem) {
          selectedItem.classList.remove('is-scaled');
          selectedItem.style.transition = 'transform 0.5s ease-out';
          selectedItem.style.transform = 'none';
          setTimeout(() => {
            selectedItem.style.transition = '';
          }, 500);
        }
        selectedItem = item;
        selectedItem.classList.add('is-scaled');
        const rect = selectedItem.getBoundingClientRect();
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const translateX = centerX - rect.left - rect.width / 2;
        const translateY = centerY - rect.top - rect.height / 2;
        selectedItem.style.transition = 'transform 0.5s ease-out';
        selectedItem.style.transform = `translate(${translateX}px, ${translateY}px) scale(3.5)`;
        setTimeout(() => {
          selectedItem.style.transition = '';
        }, 500);
      }
    });
  });
})();
