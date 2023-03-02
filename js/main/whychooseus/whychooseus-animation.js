(function () {

  const services = document.querySelectorAll('.whychooseus__recommended-services-item');

  services.forEach((service, index) => {
    service.addEventListener('click', () => {

      const isServiceActive = service.classList.contains("active");

      services.forEach((otherService, otherIndex) => {

        otherService.classList.remove('active');
        otherService.classList.remove('is-inactive');

        if (!isServiceActive && index !== otherIndex) {
          otherService.classList.add("is-inactive");
        }
      });

      if (!isServiceActive) service.classList.add("active");
    });
  });

})();
