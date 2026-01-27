// MOBILE MENU TOGGLE (SHARED)
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  if (!toggle || !menu) return;

  // Ensure closed on load
  menu.classList.remove("active");

  // Toggle menu
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  // Close menu when clicking a link
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
});
