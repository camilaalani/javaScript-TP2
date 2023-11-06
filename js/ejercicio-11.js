/*
 Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math()

*/

let nombre1 = prompt("Ingrese el primer nombre: ");
let edad1 = parseInt(prompt("Ingrese la primera edad: "));

let nombre2 = prompt("Ingrese el segundo nombre: ");
let edad2 = parseInt(prompt("Ingrese la segunda edad: "));

let nombre3 = prompt("Ingrese el tercer nombre: ");
let edad3 = parseInt(prompt("Ingrese la tercera edad: "));

let mayor = Math.max(edad1, edad2, edad3);

if (mayor === edad1) {
    document.write(nombre1 + " es el/la mayor.");
} else if (mayor === edad2) {
    document.write(nombre2 + " es el/la mayor.");
} else {
    document.write(nombre3 + " es el/la mayor.");
}



