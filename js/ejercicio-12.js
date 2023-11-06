/*
Realiza un script que genere un número aleatorio entre 1 y 99

Ejercicios con String
*/

let numero = parseInt(prompt("Ingrese un número: "));

let aleatorio = Math.floor(Math.random() * 99) + 1;
document.write("El número aleatorio generado es: " + aleatorio.toString());
