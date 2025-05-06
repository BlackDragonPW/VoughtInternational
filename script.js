// Add these at the top of your script.js
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.132.2/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.132.2/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.132.2/examples/jsm/controls/OrbitControls.js';

// 3D Scene Initialization
function init3DScene() {
  // Create 3D background for hero section
  const heroScene = new THREE.Scene();
  const heroCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const heroRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  heroRenderer.setSize(window.innerWidth, window.innerHeight);
  heroRenderer.setClearColor(0x000000, 0);
  document.querySelector('.hero-section').prepend(heroRenderer.domElement);

  // Add floating particles
  const particlesGeometry = new THREE.BufferGeometry();
  const particleCount = 2000;
  const posArray = new Float32Array(particleCount * 3);
  
  for(let i = 0; i < particleCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 10;
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.02,
    color: 0x00bfff,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
  });
  
  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  heroScene.add(particlesMesh);

  // Add animated 3D logo
  const loader = new GLTFLoader();
  loader.load('https://assets.codepen.io/127738/vought_logo.glb', (gltf) => {
    const logo = gltf.scene;
    logo.scale.set(0.5, 0.5, 0.5);
    logo.position.z = -2;
    heroScene.add(logo);
    
    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;
      logo.rotation.y += 0.005;
      heroRenderer.render(heroScene, heroCamera);
    }
    animate();
  });

  heroCamera.position.z = 3;
  
  // Handle window resize
  window.addEventListener('resize', () => {
    heroCamera.aspect = window.innerWidth / window.innerHeight;
    heroCamera.updateProjectionMatrix();
    heroRenderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// Initialize 3D when page loads
window.addEventListener('load', init3DScene);

// Enhanced card hover effect with 3D tilt
cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const angleX = (y - centerY) / 20;
    const angleY = (centerX - x) / 20;
    
    // Add 3D perspective
    card.style.transform = `
      perspective(1000px)
      rotateX(${angleX}deg)
      rotateY(${angleY}deg)
      translateY(-10px)
      scale(1.03)
    `;
    card.style.boxShadow = `
      0 20px 40px rgba(0, 191, 255, 0.3),
      0 0 60px rgba(0, 191, 255, 0.1) inset
    `;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) translateY(-10px) scale(1.03)';
    card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
  });
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

// Close menu when clicking a nav item or logo
document.querySelectorAll('.nav-links a, .nav-logo').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.classList.remove('no-scroll');
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
if (logoInner) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const rotation = scrollY / 3;
    logoInner.style.transform = `rotateY(${rotation}deg)`;
  });
}

// Scroll to Top Button
const scrollTop = document.getElementById('scrollTop');
if (scrollTop) {
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
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  if (anchor.classList.contains('nav-logo')) return; // Skip logo link
  
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

if (subtitle) {
  setTimeout(() => {
    subtitle.style.opacity = '1';
  }, 500);
}

if (scrollDown) {
  scrollDown.forEach((span, index) => {
    setTimeout(() => {
      span.style.opacity = '1';
    }, 1000 + (index * 200));
  });
}

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

// Prevent scrolling when mobile menu is open
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const toggleNoScroll = () => {
    if (navLinks.classList.contains('active')) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  };
  
  hamburger.addEventListener('click', toggleNoScroll);
});
