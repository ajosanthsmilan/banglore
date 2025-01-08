'use strict';

/**
 * Navbar toggle
 */
const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", () => {
  header.classList.toggle("nav-active");
  navToggleBtn.classList.toggle("active");
});

/**
 * Close the navbar when clicking any navbar link
 */
const navbarLinks = document.querySelectorAll("[data-nav-link]");

navbarLinks.forEach(link => {
  link.addEventListener("click", () => {
    header.classList.remove("nav-active");
    navToggleBtn.classList.remove("active");
  });
});

/**
 * Back to top button & sticky header on scroll
 */
const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", () => {
  const isScrolled = window.scrollY >= 100;
  header.classList.toggle("active", isScrolled);
  backTopBtn.classList.toggle("active", isScrolled);
});

/**
 * Dark and Light Mode Toggle
 */
const toggleThemeBtn = document.querySelector(".toggle-theme-btn");
const lightIcon = document.querySelector(".light-icon");
const darkIcon = document.querySelector(".dark-icon");

toggleThemeBtn.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");

  // Toggle icons visibility
  lightIcon.classList.toggle("hidden", isDarkMode);
  darkIcon.classList.toggle("hidden", !isDarkMode);

  // Save theme preference in local storage
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});

/**
 * Apply saved theme on page load
 */
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const isDarkMode = savedTheme === "dark";

  document.body.classList.toggle("dark-mode", isDarkMode);
  lightIcon.classList.toggle("hidden", isDarkMode);
  darkIcon.classList.toggle("hidden", !isDarkMode);
});

/**
 * View PDF Functionality
 * Opens a specified PDF file in a new tab
 * @param {string} pdfFile - The filename of the PDF to open
 */
function viewPDF(pdfFile) {
  const filePath = `./assets/files/${pdfFile}`;
  window.open(filePath, '_blank');
}
