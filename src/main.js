import "../styles/modern-normalize.css";
import "../styles/style.css";

import { initGames } from "./games.js";
initGames();

import mobileNav from "./mobile-nav";
mobileNav();

const currentYear = document.getElementById("current-year");
currentYear?.replaceChildren(String(new Date().getFullYear()));

const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(".header__link");
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navigationLinks.forEach((link) => {
          const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("is-active", isCurrent);
          if (isCurrent) link.setAttribute("aria-current", "page");
          else link.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-35% 0px -55% 0px" },
  );
  sections.forEach((section) => sectionObserver.observe(section));
}

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );
  document
    .querySelectorAll(".reveal")
    .forEach((element) => revealObserver.observe(element));
} else {
  document
    .querySelectorAll(".reveal")
    .forEach((element) => element.classList.add("is-visible"));
}

const backToTop = document.querySelector(".back-to-top");
if (backToTop) {
  window.addEventListener(
    "scroll",
    () => {
      backToTop.classList.toggle("is-visible", window.scrollY > 600);
    },
    { passive: true },
  );
  backToTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
}

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.checkValidity()) {
      formStatus.textContent = "Please complete each field before sending.";
      contactForm.reportValidity();
      return;
    }
    const formData = new FormData(contactForm);
    const subject = encodeURIComponent(
      `Portfolio contact from ${formData.get("name")}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`,
    );
    formStatus.textContent = "Opening your email app...";
    window.location.href = `mailto:sahil5082.k@gmail.com?subject=${subject}&body=${body}`;
  });
}
