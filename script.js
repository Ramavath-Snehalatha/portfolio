// Toggle mobile menu
const menuToggle = document.getElementById('menuToggle');
const navbar = document.querySelector('.navbar');
menuToggle.addEventListener('click', () => {
  navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');
window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    const height = sec.clientHeight;
    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(link => link.classList.remove('active'));
      const id = sec.getAttribute('id');
      document.querySelector(`.navbar a[href="#${id}"]`).classList.add('active');
    }
  });
});

// Prevent form refresh
document.querySelector('.contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent! (just a demo)');
});
document.addEventListener("DOMContentLoaded", () => {
  const name = "Snehalatha";
  const typingElement = document.getElementById("typing-name");
  let index = 0;
  let isDeleting = false;

  function typeLoop() {
    if (!isDeleting) {
      typingElement.textContent = name.substring(0, index + 1);
      index++;
      if (index === name.length) {
        setTimeout(() => isDeleting = true, 1000); // pause before deleting
      }
    } else {
      typingElement.textContent = name.substring(0, index - 1);
      index--;
      if (index === 0) {
        isDeleting = false;
      }
    }
    setTimeout(typeLoop, isDeleting ? 80 : 150);
  }

  typeLoop();
});
