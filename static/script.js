// Ejercicio 1
document.getElementById("botonSaludo").addEventListener("click", () => {
  console.log("Hola a todos");
});

// Ejercicio 2
document.getElementById("botonParrafo").addEventListener("click", () => {
  const parrafo = document.getElementById("parrafo");
  console.log("Etiqueta:", parrafo);
  console.log("Texto:", parrafo.textContent);
});

// Ejercicio 3
document.getElementById("botonLista").addEventListener("click", () => {
  const lista = document.getElementById("lista");
  console.log("Etiqueta UL:", lista);
});

// Ejercicio 4
const primerElemento = document.querySelector("#lista li:nth-child(1)");
primerElemento.addEventListener("click", () => {
  const lista = document.getElementById("lista");
  console.log("Lista completa:", lista);
  console.log("Texto del primer elemento:", primerElemento.textContent);
});

// Ejercicio 5
const tercerElemento = document.querySelector("#lista li:nth-child(3)");
tercerElemento.addEventListener("click", () => {
  const lista = document.getElementById("lista");
  console.log("Lista completa:", lista);
  console.log("Texto del tercer elemento:", tercerElemento.textContent);
});
