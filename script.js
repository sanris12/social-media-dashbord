const toggleMode = document.querySelector(".toggle-mode");

// toggle mode start
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  localStorage.setItem("theme", "dark");
  document.documentElement.classList.add("dark");
  document.querySelector(".bullet").classList.remove("translate-x-9");
} else {
  localStorage.setItem("theme", "light");
  document.documentElement.classList.remove("dark");
}

toggleMode.addEventListener("click", () => {
  if (localStorage.theme === "dark") {
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
    document.querySelector(".bullet").classList.add("translate-x-9");
  } else {
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
    document.querySelector(".bullet").classList.remove("translate-x-9");
  }
});
// toggle mode end
