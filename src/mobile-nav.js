const mobileNav = () => {
  const headerBtn = document.querySelector(".header__bars");
  const mobileNavElement = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav_link");
  if (!headerBtn || !mobileNavElement) return;
  let previouslyFocusedElement;

  const setOpen = (isOpen) => {
    if (isOpen) previouslyFocusedElement = document.activeElement;
    headerBtn.setAttribute("aria-expanded", String(isOpen));
    headerBtn.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu",
    );
    mobileNavElement.setAttribute("aria-hidden", String(!isOpen));
    mobileNavElement.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("nav-open", isOpen);
    if (isOpen) mobileLinks[0]?.focus();
    else previouslyFocusedElement?.focus();
  };

  headerBtn.addEventListener("click", () =>
    setOpen(headerBtn.getAttribute("aria-expanded") !== "true"),
  );
  mobileLinks.forEach((link) =>
    link.addEventListener("click", () => setOpen(false)),
  );
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      headerBtn.getAttribute("aria-expanded") === "true"
    )
      setOpen(false);
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) setOpen(false);
  });
};

export default mobileNav;
