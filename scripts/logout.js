"use strict";

import { getId, addClass, removeClass } from "./utils.js";

const ButtonLogout = getId("logout-btn");
const ModalOverlay = getId("modal-overlay");
const Modal = getId("modal");
const LogoutConfirmButton = getId("logout-confirm-btn");
const LogoutCancelButton = getId("logout-cancel-btn");

function closeModal() {
  removeClass(ModalOverlay, "modal-overlay");
  removeClass(Modal, "modal");
  removeClass(document.body, "no-scroll");

  addClass(ModalOverlay, "hidden");
  addClass(Modal, "hidden");
}



ButtonLogout.addEventListener("click", () => {
  removeClass(ModalOverlay, "hidden");
  removeClass(Modal, "hidden");

  addClass(ModalOverlay, "modal-overlay", "flex", "align-center", "justify-center");
  addClass(Modal, "modal", "flex", "flex-col");
  addClass(document.body, "no-scroll");
});

ModalOverlay.addEventListener("click", closeModal);

LogoutConfirmButton.addEventListener("click", () => {
  window.location.href = "/";
});

LogoutCancelButton.addEventListener("click", closeModal);
