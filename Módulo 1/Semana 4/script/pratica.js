//Objeto e funcionalidades//
// let usuario = {
//   login: "nicksantiago",
//   senha: "12345678",
//   região: "Curitiba",
// };

// console.log(Object.keys(usuario));
// console.log(Object.entries(usuario));
// console.log(usuario.região);

//Atividade//
// let gabinete = {
//   cor: "preto",
//   marca: "Zaphyre",
//   processador: "Intel",
//   modeloFonte: "1200W PSU",
//   quantidadeDeCoolers: 3,
//   altura: "60cm",
//   largura: "20cm",
//   comprimento: "50cm",
//   peso: "7kg",
//   fabricante: "Positivo S.A.",
// };

//Adicionar ou Deletar//
// gabinete.ano = 2015;
// delete gabinete.cor;
// console.log(gabinete);

//Classes//
// class Veiculo {
//   tipo = "carro";
//   modelo = "fusca";
//   cor = "vermelho";
//   buzinar() {}
//   acelerar() {}
// }

// class Endereco {
//   rua;
//   numero;
//   cep;
//   bairro;
//   cidade;
//   estado;
//   validaCEP() {
//     console.log(this.cep);
//   }
// }
// let casa = new Endereco();
// casa.cidade;
// casa.validaCEP();

//Constructor//
// class Moto {
//   modelo;
//   ano;
//   cor;
//   cilindrada;
//   constructor(modelo, ano, cor, cilindrada) {
//     this.modelo = modelo;
//     this.ano = ano;
//     this.cor = cor;
//     this.cilindrada = cilindrada;
//   }
//   dirigir() {}
//   parar() {}
//   frear() {}
//   lavar() {}
// }
// let honda = new Moto("CB600", 2020, "Preta", 600);
// console.log(honda);

//Encapsulamento, Identificador Privado, e GET e SET//
// class Moto {
//   modelo;
//   #ano;
//   cor;
//   #cilindrada;
//   constructor(modelo, ano, cor, cilindrada) {
//     this.modelo = modelo;
//     this.#ano = ano;
//     this.cor = cor;
//     this.#cilindrada = cilindrada;
//   }
//   get ano() {
//     return this.#ano;
//   }
//   set ano(ano) {
//     this.#ano = ano;
//   }
//   dirigir() {}
//   parar() {}
//   frear() {}
//   lavar() {}
// }
// let honda = new Moto("CB600", 2020, "Preta", 600);
// console.log(honda);

//Atividade//
class ContaBancaria {
    #nomeDono;
    #saldo;
    #numeroConta;
    #agencia;
  
    constructor(nomeDono, saldo, numeroConta, agencia) {
      this.#nomeDono = nomeDono;
      this.#saldo = saldo;
      this.#numeroConta = numeroConta;
      this.#agencia = agencia;
    }
    get nomeDono() {
      return this.#nomeDono;
    }
    set nomeDono(nomeDono2){
      this.#nomeDono = nomeDono2;
    }
    get saldo() {
      return this.#saldo;
    }
    set saldo(saldo2){
      this.#saldo = saldo2;
    }
    get numeroConta() {
      return this.#numeroConta;
    }
    set numeroConta(numeroConta2){
      this.#numeroConta = numeroConta2;
    }
    get agencia() {
      return this.#agencia;
    }
    set agencia(agencia2){
      this.#agencia = agencia2;
    }
  }
  