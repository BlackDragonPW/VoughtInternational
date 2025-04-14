// Scroll reveal on scroll
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close menu when clicking a nav item (optional)
document.querySelectorAll(".nav-links a").forEach(link =>
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  })
);
window.addEventListener('scroll', () => {
  const logo = document.querySelector('.logo-inner');
  const notsadWrap = document.querySelector('.notsad-wrap');
  const scrollY = window.scrollY;

  // Vought flip effect
  if (logo) {
    logo.style.transform = `rotateY(${scrollY / 2}deg)`;
  }

  // Notsad slide-in from left
  if (notsadWrap) {
    if (scrollY > 500) {
      notsadWrap.style.transform = 'translateX(0)';
      notsadWrap.style.opacity = '1';
    } else {
      notsadWrap.style.transform = 'translateX(-100%)';
      notsadWrap.style.opacity = '0';
    }
  }
});
