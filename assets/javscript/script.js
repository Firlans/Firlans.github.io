document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".nav-list");
  const themeSwitch = document.getElementById("themeSwitch");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  hamburger.addEventListener("click", () => {
    navList.classList.toggle("active");
  });

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    updateThemeIcon(theme);
  }

  function updateThemeIcon(theme) {
    const icon = themeSwitch.querySelector("i");
    if (theme === "dark") {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  }

  const currentTheme =
    localStorage.getItem("theme") ||
    (prefersDarkScheme.matches ? "dark" : "light");
  setTheme(currentTheme);

  themeSwitch.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    setTheme(currentTheme === "dark" ? "light" : "dark");
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
