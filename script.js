const flower = document.querySelector("#mainFlower");
const options = document.querySelectorAll(".flower-option");

const flowerTemplates = {
  girasol: `
    <div class="petals sunflower-petals">
      ${Array.from({ length: 16 }, () => '<span class="petal"></span>').join("")}
    </div>
    <div class="center"><div class="center-light"></div></div>
  `,

  tulipan: `
    <div class="tulip-petals">
      ${Array.from({ length: 7 }, () => '<span class="tulip-petal"></span>').join("")}
    </div>
    <div class="tulip-center"></div>
  `,

  rosa: `
    <div class="rose-petals">
      ${Array.from({ length: 12 }, () => '<span class="rose-petal"></span>').join("")}
    </div>
    <div class="rose-center">
      <span></span><span></span><span></span>
    </div>
  `,

  margarita: `
    <div class="petals daisy-petals">
      ${Array.from({ length: 20 }, () => '<span class="daisy-petal"></span>').join("")}
    </div>
    <div class="daisy-center"></div>
  `
};

function changeFlower(type) {
  if (!flowerTemplates[type]) return;

  flower.classList.remove("girasol", "tulipan", "rosa", "margarita", "flower-changing");
  flower.classList.add("flower-changing");
  flower.dataset.type = type;
  flower.setAttribute("aria-label", type);

  window.setTimeout(() => {
    flower.innerHTML = flowerTemplates[type];
    flower.classList.add(type);
    flower.classList.remove("flower-changing");
  }, 180);

  options.forEach((option) => {
    const selected = option.dataset.flower === type;
    option.classList.toggle("active", selected);
    option.setAttribute("aria-pressed", selected ? "true" : "false");
  });
}

options.forEach((option) => {
  option.addEventListener("click", () => changeFlower(option.dataset.flower));
});

// Movimiento suave de la flor principal con el mouse.
document.addEventListener("mousemove", (event) => {
  if (!flower) return;

  const x = (event.clientX / window.innerWidth - 0.5) * 2;
  const y = (event.clientY / window.innerHeight - 0.5) * 2;

  flower.style.setProperty("--mouse-x", x.toFixed(3));
  flower.style.setProperty("--mouse-y", y.toFixed(3));
});

// En celular no hay mouse: dejamos los valores centrados.
window.addEventListener("touchstart", () => {
  flower.style.setProperty("--mouse-x", "0");
  flower.style.setProperty("--mouse-y", "0");
}, { passive: true });

changeFlower("girasol");
