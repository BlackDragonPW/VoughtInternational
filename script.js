// Scroll reveal effect
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach(reveal => {
    const boxTop = reveal.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      reveal.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
