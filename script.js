window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Vought card flip
  const logo = document.querySelector('.logo-inner');
  if (logo) {
    logo.style.transform = `rotateY(${scrollY / 2}deg)`;
  }

  // Notsad slide-in from left
  const notsadWrap = document.querySelector('.notsad-wrap');
  if (notsadWrap) {
    if (scrollY > 500) {
      notsadWrap.style.transform = 'translateX(0)';
      notsadWrap.style.opacity = '1';
    } else {
      notsadWrap.style.transform = 'translateX(-100%)';
      notsadWrap.style.opacity = '0';
    }
  }

  // Reveal elements on scroll
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      el.classList.add('revealed');
    } else {
      el.classList.remove('revealed');
    }
  });
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
  });
}
