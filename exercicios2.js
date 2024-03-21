// EXERCÍCIO 1
const frase = "Olá, sou o Johnnata!";

console.log(frase.length);
console.log(frase.toUpperCase());

// EXERCÍICO 2
const variavel = null;
let vazia;

console.log(variavel);
console.log(vazia);

// EXERCÍCIO 3
const data = 20;
const estudante = "John";
const estaEstudando = true;

const frase2 = `Eu, ${estudante}, estou estudando muito no dia ${data} de março. ${estaEstudando}`;

console.log(frase2);

// EXERCÍCIO 4
const ano = 2024;
const curso = "26";

const numeroConvertido = String(ano);
const stringConvertida = Number(curso);

console.log(typeof numeroConvertido);
console.log(typeof stringConvertida);

// EXERCÍCIO 5
let texto = "Alura - Desenvolve - 2024"

const uperCase = texto.toUpperCase();
const lowerCase = texto.toLowerCase();
const slice = texto.slice(0, 15);
console.log(uperCase);
console.log(lowerCase);
console.log(slice);
