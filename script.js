// Por ahora la animación funciona completamente con CSS.
// Dejamos este archivo preparado para añadir interacción con el mouse/touch
// cuando decidamos cómo quieres que reaccione la flor.

const flower = document.querySelector(".flower");

document.addEventListener("mousemove", (event) => {
  if (!flower) return;

  const x = (event.clientX / window.innerWidth - 0.5) * 2;
  const y = (event.clientY / window.innerHeight - 0.5) * 2;

  flower.style.setProperty("--mouse-x", x.toFixed(3));
  flower.style.setProperty("--mouse-y", y.toFixed(3));
});
