const topBar = document.getElementById("topBar");
const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");
const cursorGlow = document.getElementById("cursorGlow");

window.addEventListener("scroll", () => {
  if (window.scrollY > 24) {
    topBar.classList.add("scrolled");
  } else {
    topBar.classList.remove("scrolled");
  }
});

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
  nav.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.classList.remove("active");
    nav.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

window.addEventListener("mousemove", (event) => {
  cursorGlow.style.opacity = "1";
  cursorGlow.style.left = event.clientX + "px";
  cursorGlow.style.top = event.clientY + "px";
});

window.addEventListener("mouseleave", () => {
  cursorGlow.style.opacity = "0";
});