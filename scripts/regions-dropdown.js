"use strict";

import { getId, getClass, removeClass, toggleClass } from "./utils.js";

const RegionsDropdown = getClass(".regions-dropdown"); 
const RegionsDropdownContainer = getId("regions-dropdown-container");

// Open the dropdown when clicking on the button
RegionsDropdown.addEventListener("click", (event) => {
  toggleClass(RegionsDropdownContainer, "regions-dropdown-container-active");
  event.stopPropagation();
});

// Close the dropdown when clicking outside of it
document.addEventListener("click", (event) => {
  const isClickInside = RegionsDropdown.contains(event.target);

  if (!isClickInside) {
    removeClass(RegionsDropdownContainer, "regions-dropdown-container-active");
  } else {
    event.stopPropagation();
  }
});
