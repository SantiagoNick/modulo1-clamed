var nome = window.prompt("Seu nome");
var sobrenome = window.prompt("Seu sobrenome");

console.log(nome + " " + sobrenome);
document.write(nome + " " + sobrenome);

var nota = window.prompt("Sua nota");
if (nota >= 7) {
  console.log(
    "Parabéns, você tirou a média mínima. Não esqueça de continuar estudando ;)"
  );
} else {
  console.log("Você não foi aprovado");
}