// Año automático en el pie de página
document.getElementById('year').textContent = new Date().getFullYear();

// Resalta en el menú la sección que se está viendo
const links = document.querySelectorAll('.main-nav a');
const sections = [...links]
  .map(link => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(link =>
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id)
      );
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(section => observer.observe(section));
