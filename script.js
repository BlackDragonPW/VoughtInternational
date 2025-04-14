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
  const scrollY = window.scrollY;

  if (scrollY > 300) {
    logo.style.transform = 'rotateY(180deg)';
  } else {
    logo.style.transform = 'rotateY(0deg)';
  }
});

  // Trigger Notsad drop
  if (scrollY > 300) {
    notsad.style.top = '180px';
    notsad.style.opacity = '1';
  } else {
    notsad.style.top = '-300px';
    notsad.style.opacity = '0';
  }
});
