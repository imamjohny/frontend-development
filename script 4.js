
document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.getElementById("menuBtn");
  var navigation = document.getElementById("siteNav");
  if (!menuButton || !navigation) { return; }
  menuButton.addEventListener("click", function () {
    navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", navigation.classList.contains("open"));
  });
});
