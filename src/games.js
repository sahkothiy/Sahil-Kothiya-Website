export const initGames = () => {
  const modal = document.getElementById("gameModal");
  const openBtn = document.getElementById("openGamesBtn");
  const closeBtn = document.querySelector(".close-modal");
  const ticTacToeBtn = document.getElementById("ticTacToeBtn");
  if (!modal) return;
  let previouslyFocusedElement;

  if (openBtn && modal) {
    openBtn.onclick = () => {
      previouslyFocusedElement = document.activeElement;
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      closeBtn?.focus();
      document.body.style.overflow = "hidden";
    };
  }

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "auto";
    previouslyFocusedElement?.focus();
  };

  if (closeBtn) closeBtn.onclick = closeModal;

  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open"))
      closeModal();
  });

  if (ticTacToeBtn) {
    ticTacToeBtn.onclick = () => {
      window.open("/mini-games/Tic-tac-toe/Tic_Tac_Toe/index.html", "_blank");
    };
  }
};
