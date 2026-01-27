const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ1WQj-H82ASDsrilQSTmcjJ39YnDJJIGqTZpsXOY7VTdSbBWCVZG080WyS1sRZYGwLGpUPbqAyfr78/pub?gid=0&single=true&output=csv";

// 1. SELECT ELEMENTS
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const sliderSection = document.querySelector(".slider");
const templateSlide = document.querySelector(".slide");

// ===============================
// MOBILE MENU LOGIC (CORRECT)
// ===============================

// Ensure menu is closed on load
menu.classList.remove("active");

// Toggle menu
if (menuToggle) {
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("active");
  });
}

// Close menu when clicking a menu link
menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    menu.classList.contains("active") &&
    !menu.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    menu.classList.remove("active");
  }
});

// ===============================
// GOOGLE SHEETS SLIDER LOGIC
// (UNCHANGED)
// ===============================
fetch(SHEET_URL)
  .then(res => res.text())
  .then(csv => {
    const rows = csv.split("\n").slice(1);

    rows.forEach((row, i) => {
      const columns = row.split(",");
      if (columns.length < 3) return;

      const [img, title, subtitle] = columns;
      let currentSlide;

      if (i === 0) {
        currentSlide = templateSlide;
      } else {
        currentSlide = templateSlide.cloneNode(true);
        currentSlide.classList.remove("active");
        sliderSection.appendChild(currentSlide);
      }

      currentSlide.querySelector("img").src = img.trim();
      currentSlide.querySelector("h1").textContent = title.replace(/"/g, "").trim();
      currentSlide.querySelector("p").textContent = subtitle.replace(/"/g, "").trim();
    });

    initSlider();
  });

// ===============================
// SLIDER FUNCTIONALITY
// (UNCHANGED)
// ===============================
function initSlider() {
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  const moveNext = () => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  };

  const movePrev = () => {
    slides[index].classList.remove("active");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("active");
  };

  document.querySelector(".next").onclick = moveNext;
  document.querySelector(".prev").onclick = movePrev;

  setInterval(moveNext, 5000);
}
