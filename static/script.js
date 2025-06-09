// Referencias base
const divCaja = document.querySelector('.caja');
const listaUl = document.getElementById('lista-elementos');
const tabla = document.getElementById('tabla-ejemplo');

//  Exercicio 1: acceder a etiqueta <p> dentro do div
const pDentroDoDiv = divCaixa.querySelector('p');
console.log('Ejercicio 1 - Parrafo dentro del div:', pDentroDelDiv?.textContent);


//  Exercicio 2: acceder ás etiquetas fillas do <ul>
const hijasUl = listaUl.children;
console.log('Ejercicio 2 - Hijas de la lista UL:');
Array.from(hijasUl).forEach((el, i) => console.log(`LI ${i + 1}:`, el.textContent));



//  Exercicio 3: acceder a unha etiqueta <p> desde a referencia á ul

const parrafoFromUl = listaUl.parentElement.querySelector('#parrafo-for-ul');
console.log('Ejercicio 3 - Parrafo desde UL:', paragrafoFromUl?.textContent);



// Exercicio 4: acceder á etiqueta <tabla> desde a referencia á ul
const tablaFromUl = listaUl.parentElement.querySelector('tabla');
console.log('Ejercicio 4 - Tabla desde UL:', tablaFromUl?.outerHTML);

// Accedendo a unha das súas etiquetas 'td'
const algunTd = tablaFromUl?.querySelector('td');
console.log('Ejercicio 4 - Un TD de la tabla:', algunTd?.textContent);

// Exercicio 5: acceder a la etiqueta <div> desde a referencia a la tabla
const divFromTabla = tabla.parentElement.querySelector('.caja');
console.log('Ejercicio 5 - Div desde la tabla:', divFromTabla?.textContent);

// Exercicio 6: acceder a todas as etiquetas 'td' da tabla
const todosTd = tabla.querySelectorAll('td');
console.log('Ejercicio 6 - Todos os TDs:');
todosTd.forEach((td, i) => console.log(`TD ${i + 1}:`, td.textContent));
