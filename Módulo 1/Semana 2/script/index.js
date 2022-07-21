//Exercício 1
// var nome = window.prompt("Seu nome");
// console.log(nome);

// //Exercício 2
// var email = window.prompt("Seu endereço de email");
// document.write("<h4>", nome, "</br>", email, "</h4>");

// //Exercício 3
// var nota1 = window.prompt("Sua primeira nota");
// var nota2 = window.prompt("Sua segunda nota");
// document.write("<h3>", parseFloat(nota1) + parseFloat(nota2), "</h3>");

// //Exercício 4
// console.log((2 == 3 && !-3 <= 4) || 4 == 8);

// //Exercício 5
// var oddOrEven = window.prompt(
//   "Quer saber se um número é PAR ou ÍMPAR? Digite o número de sua escolha!"
// );
// if (oddOrEven % 2 == 1) {
//   document.write("<h3>", "Esse valor é Ímpar", "</h3>");
// } else {
//   document.write("<h3>", "Esse valor é Par", "</h3>");
// }

//Exercício 6
// var peso = window.prompt("Indique seu peso"), altura = window.prompt("Indique sua altura");
// var imc = Number(peso) / (Number(altura) * Number(altura));
// if (imc >= 25) {
//   window.alert("Você está acima do peso, procure um médico");
//   console.log(imc);
// } else if (imc >= 18.5 && imc <= 24.9) {
//   document.write("PARABÉNS!! Você está no peso ideal");
// } else if (imc < 18.5) {
//   document.write("Você está abaixo do peso, procure um médico.");
// } else {};

//Exercício 7
// var contador = 0,
//   avaliação,
//   pessoas = 0;
// while (contador < 4) {
//   avaliação = window.prompt(
//     "Sua avaliação da séria 'Stranger Things'! (Ruim, Bom, ou Excelente)"
//   );
//   switch (avaliação) {
//     case "ruim":
//       pessoas++;
//       break;
//     case "bom":
//       break;
//     case "excelente":
//       break;
//     default:
//       avaliação = window.prompt(
//         "Avaliações aceitas: 'Bom', 'Ruim', ou 'excelente'.\n Avalie novamente"
//       );
//       if (avaliação == "Ruim") {
//         pessoas++;
//       }
//   }
//   contador++;
// }
// console.log("Quantidade de avaliações 'Ruim': ", pessoas);

//Exercício 8
// for (var i = 1; i <= 10; i++) {
//   var resultado = 5 * i;
//   console.log(resultado);
//   document.write("<p>5 x ", i ," = ", resultado, "</p>");
// }

// Exercício 9
// var tipoProduto;
// var quantidadeProduto = 0;
// var produto;
// function selecionarProduto() {
//   produto = Number(
//     window.prompt(
//       "Selecione as opções: 1 - Hortifruti, 2 - Laticínios, 3 - Carnes, 4 - Peixes, 5 - Aves, 6 - Fechar pedido"
//     )
//   );
//   switch (produto) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//       console.log(produto);
//       quantoProduto();
//       selecionarProduto();
//     case 6:
//       break;
//     default:
//       window.alert(
//         "Só serão aceitos as opções: 1-Hortifruti, 2-Laticínios, 3-Carnes, 4-Peixes, 5-Aves, 6-Fechar pedido "
//       );
//       selecionarProduto();
//   }
// }
// function quantoProduto() {
//   var quantidade = Number(
//     window.prompt("Digite a quantidade de produto desejado;")
//   );
//   if (quantidade > quantidadeProduto) {
//     quantidadeProduto = quantidade;
//     escolherProduto();
//   } else if (isNaN(quantidade)) {
//     window.alert("Só são aceitos valores númericos");
//     quantoProduto();
//   }
// }
// function escolherProduto() {
//   switch (produto) {
//     case 1:
//       tipoProduto = "Hortifruti";
//       break;
//     case 2:
//       tipoProduto = "Laticínios";
//       break;
//     case 3:
//       tipoProduto = "Carnes";
//       break;
//     case 4:
//       tipoProduto = "Peixes";
//       break;
//     case 5:
//       tipoProduto = "Aves";
//       break;
//   }
// }
// selecionarProduto();
// console.log(tipoProduto);
// window.alert(
//   "O produto selecionado com maior quantidade foi " + tipoProduto + ": " + quantidadeProduto
// );


//Exercício 10
var nome = window.prompt("Seu nome");
var notas = [];
while (notas < 4) {
    window.prompt("Sua nota");
    notas.push;
    notas++;
}
for (notas = 0; notas < 4; notas++) {
    console.log((notas[0] + notas[1] + notas[2] + notas[3])/4);
}

// document.write("<h4>", nome, "</br>", email, "</h4>");
// document.write("<h3>", parseFloat(nota1) + parseFloat(nota2), "</h3>");
