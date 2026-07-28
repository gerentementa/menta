/* Carrusel de testimonios: navegación por flechas, puntos y autoplay. */
export function initSlider() {
  const track = document.getElementById("slider-track");
  const dotsBox = document.getElementById("slider-dots");
  if (!track || !dotsBox) return;

  const slides = track.children.length;
  let current = 0;
  let timer;

  const dots = Array.from({ length: slides }, (_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", `Testimonio ${i + 1}`);
    dot.addEventListener("click", () => go(i));
    dotsBox.appendChild(dot);
    return dot;
  });

  const render = () => {
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.setAttribute("aria-selected", String(i === current)));
  };

  const go = (i) => {
    current = (i + slides) % slides;
    render();
    restart();
  };

  const restart = () => {
    clearInterval(timer);
    timer = setInterval(() => go(current + 1), 6000);
  };

  document.querySelector(".slider__nav--prev")?.addEventListener("click", () => go(current - 1));
  document.querySelector(".slider__nav--next")?.addEventListener("click", () => go(current + 1));

  render();
  restart();
}
