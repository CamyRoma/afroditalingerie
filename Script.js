function toggleModoOscuro() {
    const body = document.body;
    body.classList.toggle("modo-oscuro");
}
const botonModoOscuro = document.getElementById("modoOscuro");
botonModoOscuro.addEventListener("click", toggleModoOscuro);