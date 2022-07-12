// const somaDeDoisNumeros = 1 + 2;
// console.log(somaDeDoisNumeros);

// const somaDeDoisNumerosB = 3 + 2;
// console.log(somaDeDoisNumerosB);

// function soma(num1, num2) {
//   console.log(num1 + num2);
// }
// soma(5, 5);

// var informarParImpar = function (num1) {
//   var resultado;
//   if (num1 % 2 == 0) {
//     resultado = "Par";
//   } else if (num1 % 2 == 1) {
//     resultado = "Ímpar";
//   } else {
//     resultado = "Inválido";
//   }

//   return resultado;
// };

// console.log(informarParImpar(7));

// function imprimirArray(lista = []) {
//   for (let elemento of lista) {
//     console.log(elemento);
//   }

//   return lista.length;
// }

// console.log(imprimirArray([1, 2, 3, 4, 5, 6, 9, 8, 77]));

function imprimirElementosDaLista(plataformas = []) {
  for (let item of plataformas) {
    console.log(item);
  }
  let quantidade = "Quantidade de elementos: " + plataformas.length;
  return quantidade;
}
console.log(imprimirElementosDaLista(["PS5", "XBox", "Switch", "PC"]));
