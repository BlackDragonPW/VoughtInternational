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
  const scrollPosition = window.scrollY; // The distance the user has scrolled
  
  // Calculate the rotation angle based on the scroll position
  const rotationDegree = scrollPosition / 2;  // Adjust this divisor to control the flip speed

  // Apply the rotation to the logo
  logoInner.style.transform = `rotateY(${rotationDegree}deg)`;
});
