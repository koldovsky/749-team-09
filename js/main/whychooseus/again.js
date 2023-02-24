const recommendedServicesItems = document.querySelectorAll('.whychooseus__recommended-services-item');

recommendedServicesItems.forEach((item) => {
  item.addEventListener('mousedown', (event) => {
    
    const rect = item.getBoundingClientRect();
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const translateX = centerX - rect.left - rect.width / 2;
    const translateY = centerY - rect.top - rect.height / 2;

    item.style.transform = `translate(${translateX}px, ${translateY}px) scale(2)`;
  });
});
