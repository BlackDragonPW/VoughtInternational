// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu when clicking a nav item
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Scroll Reveal Animation
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Logo Rotation on Scroll
const logoInner = document.querySelector('.logo-inner');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const rotation = scrollY / 3;
  logoInner.style.transform = `rotateY(${rotation}deg)`;
});

// Scroll to Top Button
const scrollTop = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTop.classList.add('active');
  } else {
    scrollTop.classList.remove('active');
  }
});

scrollTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Hero Section Animation
const subtitle = document.querySelector('.subtitle');
const scrollDown = document.querySelectorAll('.scroll-down span');

setTimeout(() => {
  subtitle.style.opacity = '1';
}, 500);

scrollDown.forEach((span, index) => {
  setTimeout(() => {
    span.style.opacity = '1';
  }, 1000 + (index * 200));
});

// Card Hover Effect Enhancement
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const x = e.clientX - card.getBoundingClientRect().left;
    const y = e.clientY - card.getBoundingClientRect().top;
    
    const centerX = card.offsetWidth / 2;
    const centerY = card.offsetHeight / 2;
    
    const angleX = (y - centerY) / 20;
    const angleY = (centerX - x) / 20;
    
    card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-10px) scale(1.03)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(-10px) scale(1.03)';
  });
});

// Preloader (optional)
window.addEventListener('load', () => {
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 500);
});
