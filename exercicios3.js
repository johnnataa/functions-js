// EXERCÍCIO 1
let saldo = 3000;
const deposito = 200;
const saque = 3500;

const operacao = saldo + deposito - saque;

console.log(operacao);

// EXERCÍCIO 2
const valor = 200;
const valor2 = valor % 2 === 0 ? "par" : "ímpar";

console.log(valor2);
// if (valor % 2 === 0) {
//   console.log("Esse valor é par")
// } else {
//   console.log("Esse valor é ímpar")
// }

// EXERCÍCIO 3
const estaLogado = true;
const permissaoAdm = false;

if (estaLogado === true && permissaoAdm === true) {
  console.log("Liberado");
} else {
  console.log("Não liberado!");
}

// EXERCÍCIO 4
const estaLogado1 = true;
const permissaoAdm1 = false;

if (estaLogado1 === true || permissaoAdm1 === true) {
  console.log("Liberado");
} else {
  console.log("Não liberado!");
}

// EXERCÍCIO 5
const idadeMinima = 18;
const idadeUsuario = 15;

if (idadeUsuario < idadeMinima) {
  console.log("Compra negada!");
} else {
  console.log("Compra liberada");
}
