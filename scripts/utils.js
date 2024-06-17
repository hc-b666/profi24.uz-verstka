"use strict";

export const getId = (id) => document.getElementById(id);

export const getClass = (className) => document.querySelector(className);

export const addClass = (element, ...classNames) => element.classList.add(...classNames);

export const removeClass = (element, ...classNames) => element.classList.remove(...classNames);
