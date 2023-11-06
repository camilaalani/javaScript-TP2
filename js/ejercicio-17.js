//Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

let texto = prompt("Ingrese un texto: ");
let posicion = -1;

for (let i = 0; i < texto.length; i++) {
    let letra = texto.charAt(i).toLowerCase();
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        posicion = i;
        break;
    }
}

if (posicion === -1) {
    document.write("No se encontraron vocales en el texto.");
} else {
    document.write("La vocal '" + texto.charAt(posicion) + "' está en la posición " + (posicion + 1).toString());
}
