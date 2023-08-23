const text = document.getElementById("item");
let list = [];

window.onload = function () {
  let valorGuardado = localStorage.getItem("valores");
  if (valorGuardado) {
    list = valorGuardado.split(",");
    actualizarContenedor(); 
  }};
document.getElementById("agregar").addEventListener("click", () => {
  const valorNuevo = text.value;
  localStorage.setItem("valores", list.concat(valorNuevo).join(","));
  list.push(valorNuevo);
  actualizarContenedor(); 
  text.value = ""; 
});
document.getElementById("limpiar").addEventListener("click", () => {
  localStorage.removeItem("valores"); 
  list = []; 
  actualizarContenedor(); 
});

function actualizarContenedor() {
  let showValue = document.getElementById("contenedor");

  let contenido = "";
  for (let i = 0; i < list.length; i++) {
    contenido += list[i] + "<br>";
  }
  showValue.innerHTML = contenido;
}