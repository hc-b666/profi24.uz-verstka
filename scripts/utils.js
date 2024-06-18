"use strict";

// Get an element by its ID
export const getId = (id) => document.getElementById(id);

// Get an element by its class name
export const getClass = (className) => document.querySelector(className);

// Add one or more classes to an element
export const addClass = (element, ...classNames) => element.classList.add(...classNames);

// Remove one or more classes from an element
export const removeClass = (element, ...classNames) => element.classList.remove(...classNames);

// Toggle one or more classes on an element
export const toggleClass = (element, ...classNames) => element.classList.toggle(...classNames);

// Create an element with one or more classes
export const createElement = (tag, ...classNames) => {
  const element = document.createElement(tag);
  addClass(element, ...classNames);
  return element;
};
