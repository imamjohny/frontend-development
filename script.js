// Responsive navigation menu
const menuToggle = document.getElementById("menuToggle");
const primaryNav = document.getElementById("primaryNav");

menuToggle.addEventListener("click", () => {
  const isOpen = primaryNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

// Close the mobile menu after selecting a navigation link.
primaryNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    primaryNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

// Keep the desktop navigation state clean when resizing.
window.addEventListener("resize", () => {
  if (window.innerWidth > 700) {
    primaryNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  }
});
