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

// Vought logo scroll and Notsad slide-in
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Rotate Vought logo
  const logoInner = document.querySelector('.logo-inner');
  if (logoInner) {
    const rotation = scrollY / 2;
    logoInner.style.transform = `rotateY(${rotation}deg)`;
  }

  // Slide in Notsad section
  const notsad = document.querySelector('.notsad-wrap');
  if (notsad) {
    if (scrollY > 500) {
      notsad.style.transform = 'translateX(0)';
      notsad.style.opacity = '1';
    } else {
      notsad.style.transform = 'translateX(-100%)';
      notsad.style.opacity = '0';
    }
  }
});
