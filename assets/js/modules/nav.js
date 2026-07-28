/* Menú de navegación móvil: abre/cierra y sincroniza aria-expanded. */
export function initNav() {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav");
  if (!toggle || !nav) return; // ponytail: si el markup no está, no rompas la página

  const close = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") close();
  });
}
