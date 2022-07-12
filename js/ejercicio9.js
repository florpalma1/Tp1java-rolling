// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt
let texto = prompt("Escribe una frase");
let vocalesTexto = texto.length;
let i;
for (i = 0; i < vocalesTexto; i++) {
if (texto.charAt(i,1) === "a" || texto.charAt(i,1) === "e" || texto.charAt(i,1) === "i" || texto.charAt(i,1) === "o" || texto.charAt(i,1) === "u") {
document.write(texto.charAt(i,1))
}
}