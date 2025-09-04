const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const darkToggle = document.getElementById('darkToggle');
const body = document.body;

// Mobile menu toggle
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Dark mode toggle
darkToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  darkToggle.innerText = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Dropdown toggle for mobile
const dropdownParents = document.querySelectorAll('.has-dropdown');
dropdownParents.forEach(parent => {
  parent.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      parent.classList.toggle('active');
    }
  });
});


// Optional JavaScript for carousel control (pause on hover)
const carousel = document.querySelector('#heroCarousel');

// Pause auto-slide when mouse is over the carousel
carousel.addEventListener('mouseenter', () => {
  bootstrap.Carousel.getInstance(carousel).pause();
});

// Resume auto-slide when mouse leaves
carousel.addEventListener('mouseleave', () => {
  bootstrap.Carousel.getInstance(carousel).cycle();
});

