"use strict";

import { getClass, removeClass, toggleClass } from "./utils.js";



// Regions Dropdown
const RegionsDropdown = getClass(".regions-dropdown"); 
const RegionsDropdownContainer = getClass(".regions-dropdown-container");

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



// Lang Dropdown
const LangDropdown = getClass(".lang-btn");
const LangDropdownContainer = getClass(".lang-dropdown-container");

// Open the dropdown when clicking on the button
LangDropdown.addEventListener("click", (event) => {
  toggleClass(LangDropdownContainer, "lang-dropdown-container-active");
  event.stopPropagation();
});

// Close the dropdown when clicking outside of it
document.addEventListener("click", (event) => {
  const isClickInside = LangDropdown.contains(event.target);

  if (!isClickInside) {
    removeClass(LangDropdownContainer, "lang-dropdown-container-active");
  } else {
    event.stopPropagation();
  }
});
