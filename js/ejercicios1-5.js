// 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
alert("un mensaje");

// 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
document.write("<p> Hello World </p>")
// 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
document.write("<p>3 + 5 es: " + (3 + 5) +"</p>");
// 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
let nombreUsuario = prompt("Escribe tu nombre");
document.write("Hola "+ nombreUsuario);
// 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
let numero1 = prompt("Escribe un número");
let numero2 = prompt("Escribe otro número");
document.write("<p> La suma es: "+ ( parseInt(numero1)+ parseInt(numero2) ) + "</p>");