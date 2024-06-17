"use strict";

import { getId } from "./utils.js";

const ButtonLogout = getId("logout-btn");
const ModalOverlay = getId("modal-overlay");
const Modal = getId("modal");
const LogoutConfirmButton = getId("logout-confirm-btn");
const LogoutCancelButton = getId("logout-cancel-btn");

ButtonLogout.addEventListener("click", () => {
  ModalOverlay.classList.remove("hidden");
  Modal.classList.remove("hidden");

  ModalOverlay.classList.add("modal-overlay", "flex", "align-center", "justify-center");
  Modal.classList.add("modal", "flex", "flex-col");
  document.body.classList.add("no-scroll");
});

ModalOverlay.addEventListener("click", () => {
  ModalOverlay.classList.remove("modal-overlay");
  Modal.classList.remove("modal");
  document.body.classList.remove("no-scroll");

  ModalOverlay.classList.add("hidden");
  Modal.classList.add("hidden");
});

LogoutConfirmButton.addEventListener("click", () => {
  window.location.href = "/";
});

LogoutCancelButton.addEventListener("click", () => {
  ModalOverlay.classList.remove("modal-overlay");
  Modal.classList.remove("modal");
  document.body.classList.remove("no-scroll");

  ModalOverlay.classList.add("hidden");
  Modal.classList.add("hidden");
});
