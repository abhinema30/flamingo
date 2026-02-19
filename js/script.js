window.addEventListener("load", () => {
  document.querySelector(".loader").style.display = "none";
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you! Our team will contact you shortly.");
    form.reset();
  });
}
