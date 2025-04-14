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
  const logoInner = document.querySelector('.logo-inner');
  const notsad = document.querySelector('.notsad-drop');
  const scrollY = window.scrollY;

  // Rotate logo based on scroll
  const rotation = scrollY / 2;
  logoInner.style.transform = `rotateY(${rotation}deg)`;

window.addEventListener('scroll', () => {
  const notsadWrap = document.querySelector('.notsad-wrap');
  const scrollY = window.scrollY;

  // You can tweak 500 to where on the page you want this to trigger
  if (scrollY > 500) {
    notsadWrap.style.transform = 'translateX(0)';
    notsadWrap.style.opacity = '1';
  } else {
    notsadWrap.style.transform = 'translateX(-100%)';
    notsadWrap.style.opacity = '0';
  }
});

