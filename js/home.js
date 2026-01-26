const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ1WQj-H82ASDsrilQSTmcjJ39YnDJJIGqTZpsXOY7VTdSbBWCVZG080WyS1sRZYGwLGpUPbqAyfr78/pub?gid=0&single=true&output=csv";

const slides = document.querySelectorAll(".slide");
let index = 0;

/* LOAD SLIDES FROM GOOGLE SHEET */
fetch(SHEET_URL)
  .then(res => res.text())
  .then(csv => {
    const rows = csv.split("\n").slice(1);

    rows.forEach((row, i) => {
      if (!slides[i]) return;

      const [img, title, subtitle] = row.split(",");

      const image = slides[i].querySelector("img");
      const h1 = slides[i].querySelector("h1");
      const p = slides[i].querySelector("p");

      image.src = img.trim();
      h1.textContent = title?.trim() || "";
      p.textContent = subtitle?.trim() || "";
    });
  });

/* SLIDER LOGIC — UNCHANGED */
document.querySelector(".next").onclick = () => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
};

document.querySelector(".prev").onclick = () => {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
};

setInterval(() => {
  document.querySelector(".next").click();
}, 5000);
