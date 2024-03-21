const nota1 = 8;
const nota2 = 6.3;
const nota3 = 7;
const nota4 = 9.3;

let media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 7) {
  media += media * 0.1;
}

console.log(`A média é ${media.toFixed(2)}`);

let resultado;
resultado = 10 + 5 * 2 / 3 - 7 + 15 * 3 / 5 + 20 - 4 * 2;
console.log("O resultado da expressão é:", resultado);