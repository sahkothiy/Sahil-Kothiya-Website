export const initGames = () => {
  const modal = document.getElementById("gameModal");
  const openBtn = document.getElementById("openGamesBtn");
  const closeBtn = document.querySelector(".close-modal");
  const ticTacToeBtn = document.getElementById("ticTacToeBtn");

  // Open Modal
  if (openBtn && modal) {
    openBtn.onclick = () => {
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    };
  }

  // Close Modal
  const closeModal = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  };

  if (closeBtn) closeBtn.onclick = closeModal;

  window.onclick = (event) => {
    if (event.target == modal) closeModal();
  };

  // Redirection Logic
if (ticTacToeBtn) {
    ticTacToeBtn.onclick = () => {
      window.open("/mini-games/Tic-tac-toe/Tic_Tac_Toe/index.html", "_blank");
    };
  }};