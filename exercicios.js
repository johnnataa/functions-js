// ATIVIDADE 1
const nome = 'Johnnata';
let idade = 26;
var solteiro = true;

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof solteiro);

// ATIVIDADE 2
const nome1 = 'Joohnnata';
const sobrenome = 'Silva';
const nomeCompleto = nome1 + " " + sobrenome;
const nomeCompleto1 = `${nome1} ${sobrenome}`;

console.log(nomeCompleto);
console.log(nomeCompleto1);

// ATIVIDADE 3
const ano = 2024;
const curso = 'Alura';
const frase = `O curso da ${curso} é excelente e eu o fiz em ${ano}.`;

console.log(frase);

// ATIVIDADE 4
let dia = 'Terça';
console.log(dia);

dia = 'Quarta';
console.log(dia);

// ATIVIDADE 5
var mes = 'Março';
let tipo = 'Back';

if (mes == 'Março') {
  var data = 19;
  let tipo2 = 'Front';
  console.log(mes);
  console.log(tipo);
}


console.log(data);
// console.log(tipo2);

// ATIVIDADE 6
const estaChovendo = 'true';

if (estaChovendo) {
  console.log("Está chovendo, leve um guarda-chuva!");
} else {
  console.log("Não está chovendo, por isso, não precisa levar um guarda-chuva!");

}
