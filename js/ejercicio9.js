// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt
let texto = prompt("Escribe una frase");
let nText = texto.length;
let i;
for (i = 0; i < nText; i++) {
if (texto.substr(i,1) === "a" || texto.substr(i,1) === "e" || texto.substr(i,1) === "i" || texto.substr(i,1) === "o" || texto.substr(i,1) === "u") {
document.write(texto.substr(i,1))
}
}