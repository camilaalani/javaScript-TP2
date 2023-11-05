/*
Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
*/

let cadena = "";
let texto;

do {
    texto = prompt("Ingrese una cadena de texto:");

    if (texto !== null) {
        cadena += texto + "-";
    }
} while (texto !== null);

alert(cadena.slice(0, -1));
