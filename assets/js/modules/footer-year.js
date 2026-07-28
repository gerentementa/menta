/* Año actual en el footer. */
export function initYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}
