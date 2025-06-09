// Exercicio 1: Etiqueta p
const parrafo = document.getElementById('parrafo');
console.log('Parrafo:', parrafo.textContent);

// Exercicio 2: Etiqueta div
const caja = document.querySelector('.caja');
console.log('Div con clase:', caja.textContent);

// Exercicio 3: Lista desordenada
const lista = document.getElementById('lista-elementos');
console.log('Lista completa:', lista.innerHTML);
const elementos = lista.querySelectorAll('li');
elementos.forEach((li, index) => {
  console.log(`Elemento ${index + 1}:`, li.textContent);
});

// Exercicio 4: Boton
const boton = document.getElementById('boton-accion');
console.log('Referencia ó botón:', boton);

// Exercicio 5: Tabla
const cabeceraTh = document.getElementById('cabecera');
const casillaTd = document.querySelector('.casilla-nombre');
const tabla = document.getElementById('tabla-ejemplo');

console.log('Etiqueta TH:', cabeceraTh.textContent);
console.log('Etiqueta TD:', casillaTd.textContent);
console.log('Etiqueta TABLE:', tabla);

// Exercicio final: Contenido en el body
const cuerpo = document.body;
console.log('Contenido completo en el body:', cuerpo.innerHTML);
