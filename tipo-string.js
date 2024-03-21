const estudante = 'Johnnata';
const docente = 'Ana';
const cumprimento = "Nosso lema é 'Estudar bastante'";
const citacao = `Ju diz: "Nosso lema é 'Estudar bastante!'"`

console.log(cumprimento);
console.log(citacao);

console.log(`O estudante chama ${estudante}`);

// Template String

const senha = 'SenhaSegura123' + estudante.toUpperCase();

console.log(senha);


const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao);
console.log(aMaiusculo);
console.log(tique);
console.log(hiragana);

// CONVERSÃO

String(2); // Retorna '2'
String(true); // Retorna 'true'
