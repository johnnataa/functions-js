const nota1 = 8;
const nota2 = 6.3;
const nota3 = -2;
const nota4 = Number.parseInt('5');

const total = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("A média anual é: "+ total.toFixed(2));

// CONVERSÕES
Number("1"); // Retorna 1
Number("Alura"); // Retorna NaN
Number(undefined); // Retorna NaN
Number(null); // Retorna 0
Number(true); // Retorna 1

parseInt('4.5'); // Retorna 4

parseFloat('4.5abc'); // Retorna 4.5