(() => {
  const modal = document.querySelector(".contacts_opened-modal");
  const btnOpenModal = document.querySelector(".contacts__open-cat-fact-modal");
  const btnCloseModal = document.querySelector(".contacts__modal-close");
  const modalMsg = document.querySelector(".contacts__modal-text");

  async function getMeowFacts() {
    const response = await fetch("https://meowfacts.herokuapp.com/");
    const data = await response.json();
    return data["data"];
  }

  btnOpenModal.addEventListener("click", async () => {
    modalMsg.innerText = await getMeowFacts();
    modal.style.display = "block";
  });

  btnCloseModal.addEventListener("click", () => (modal.style.display = "none"));
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
})();
