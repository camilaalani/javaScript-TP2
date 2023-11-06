/*
Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/

let texto = prompt("Ingrese una cadena de texto: ");
let resultado = "";

for (let i = texto.length - 1; i >= 0; i--) {
    resultado += texto.charAt(i);
}

document.write(resultado);
