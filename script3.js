// AccessHub - small, defensive enhancement layer
(function () {
  "use strict";

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.getElementById("primary-nav");
  const announceButton = document.getElementById("announce-button");
  const liveStatus = document.getElementById("live-status");

  function announce(message) {
    if (!liveStatus) return;
    liveStatus.textContent = "";
    window.setTimeout(function () {
      liveStatus.textContent = message;
    }, 20);
  }

  if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      announce(isOpen ? "Navigation menu opened." : "Navigation menu closed.");
      if (isOpen) {
        const firstLink = nav.querySelector("a");
        if (firstLink) firstLink.focus();
      }
    });

    nav.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.focus();
        announce("Navigation menu closed.");
      }
    });
  }

  if (announceButton) {
    announceButton.addEventListener("click", function () {
      announce("This is an accessible live-region announcement.");
    });
  }
})();
