"use strict";

import { addClass, getClassAll, removeClass } from "./utils.js";

const Accordions = getClassAll(".accordion");

Accordions.forEach((accordion) => {
  const header = accordion.querySelector(".accordion-header");
  const description = accordion.querySelector(".accordion-description");

  header.addEventListener("click", () => {
    const isActive = accordion.classList.contains("accordion-active");

    Accordions.forEach((acc) => {
      const desc = acc.querySelector(".accordion-description");
      removeClass(acc, "accordion-active");
      desc.style.height = "0px";
    });

    if (!isActive) {
      addClass(accordion, "accordion-active");
      description.style.height = `${description.scrollHeight}px`;
    }
  });

  description.addEventListener("transitionend", (e) => {
    if (!accordion.classList.contains("accordion-active")) {
      description.style.height = "0px";
    }
  });
});
