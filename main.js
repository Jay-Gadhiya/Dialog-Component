const overlay = document.querySelector("#overlay");
const dialogContainer = document.querySelector(".dialog-container");

// alert
const alertBtn = document.querySelector("#alert-dialog-btn");
const alertELe = document.querySelector(".alert-dialog");

alertBtn.addEventListener("click", () => {
  overlay.classList.add("active");
  alertELe.classList.add("alert-active");
});

// simple
const simpleDIalogBtn = document.querySelector("#simple-dialog-btn");
const simpleEle = document.querySelector(".simple-dialogs");

simpleDIalogBtn.addEventListener("click", () => {
  overlay.classList.add("active");
  simpleEle.classList.add("simple-active");
});

// confirmation
const confirmationBtn = document.querySelector("#confirmation-dialog-btn");
const confirmationELe = document.querySelector(".confirmation-dialogs");

confirmationBtn.addEventListener("click", () => {
  overlay.classList.add("active");
  confirmationELe.classList.add("confirmation-active");
});

window.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("active");
    alertELe.classList.remove("alert-active");
    simpleEle.classList.remove("simple-active");
    confirmationELe.classList.remove("confirmation-active");
  }
});
