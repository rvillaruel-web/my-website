// Live link of the PPE & Semi-Expendable Property System (Apps Script /exec).
// If you deploy a NEW deployment (new ID), change only this line.
const APP_URL = "https://script.google.com/macros/s/AKfycbybGNsv0Ei_HgC5-AJytMMfsICzJ-cHZvRGM-QJsm05A0mHUqRzlpdF6G3nzdbNcgAb/exec";

// Point every "Open the Property System" button to the app
document.querySelectorAll(".js-app").forEach((a) => {
  a.href = APP_URL;
  a.rel = "noopener";
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu toggle
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});

links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  })
);
