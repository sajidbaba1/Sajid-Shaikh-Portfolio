// Toggle mobile navigation menu
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

// Toggle menu on button click
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Close menu when clicking a nav link
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
  if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
    navMenu.classList.remove('active');
  });
});
