//Exercício 1
var nome = window.prompt("Seu nome");
console.log(nome);

//Exercício 2
var email = window.prompt("Seu endereço de email");
document.write("<h4>", nome, "</br>", email, "</h4>");

//Exercício 3
var nota1 = window.prompt("Sua primeira nota");
var nota2 = window.prompt("Sua segunda nota");
document.write("<h3>", parseFloat(nota1) + parseFloat(nota2), "</h3>");

//Exercício 4
console.log((2 == 3 && !-3 <= 4) || 4 == 8);

//Exercício 5
var oddOrEven = window.prompt(
  "Quer saber se um número é PAR ou ÍMPAR? Digite o número de sua escolha!"
);
if (oddOrEven % 2 == 1) {
  document.write("<h3>", "Esse valor é Ímpar", "</h3>");
} else {
  document.write("<h3>", "Esse valor é Par", "</h3>");
}

//Exercício 6



if (nota >= 7) {
  console.log(
    "Parabéns, você tirou a média mínima. Não esqueça de continuar estudando ;)"
  );
  document.write(
    "Parabéns, você tirou a média mínima. Não esqueça de continuar estudando ;)"
  );
} else {
  console.log("Você não foi aprovado");
  document.write("Você não foi aprovado");
}
