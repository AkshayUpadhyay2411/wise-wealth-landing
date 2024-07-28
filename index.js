document.addEventListener('DOMContentLoaded', (event) => {
    const carousel = document.querySelector('.carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const navButtons = document.querySelectorAll('.carousel-nav button');
    let currentIndex = 0;

    function showSlide(index) {
      const offset = window.innerWidth <= 768 ? 80 : 80 / 2;
      carousel.style.transform = `translateX(-${index * offset}%)`;
      navButtons.forEach((button, i) => {
        button.classList.toggle('active', i === index);
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % (items.length - (window.innerWidth <= 768 ? 0 : 2));
      showSlide(currentIndex);
    }

    setInterval(nextSlide, 5000);

    navButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
      });
    });

    window.addEventListener('resize', () => {
      showSlide(currentIndex);
    });
  });