/* Clínica Menta — punto de entrada.
   Importa cada módulo de interacción y lo arranca al cargar el DOM. */
import { initNav } from "./modules/nav.js";
import { initSlider } from "./modules/slider.js";
import { initReveal } from "./modules/reveal.js";
import { initYear } from "./modules/footer-year.js";

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initSlider();
  initReveal();
  initYear();
});
