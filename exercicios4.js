// EXERCÍCIO 1

function exibeSaudacao(nome) {
  return `Olá, ${nome}, sinta-se à vontade!`
}

console.log(exibeSaudacao("John"));

// EXERCÍCIO 2
function maioridade(idade) {
  if (idade >= 18) {
    return `Você é maior de idade`
  } else {
    return `Você não é maior de idade`
  }
}

console.log(maioridade(15));

// EXERCÍCIO 3
function palindromos(palavra) {
  if (palavra.toLowerCase() === palavra.split('').reverse().join('').toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(palindromos("Adam"));
console.log(palindromos("Arara"));

// EXERCÍCIO 4
function comparandoNumeros(n1, n2, n3) {
  let maior = n1;

  if (n2 > maior) {
    maior = n2;
  }
  if (n3 > maior) {
    maior = n3;
  }
  return maior;
}

console.log(comparandoNumeros(10, 27, 7));

// EXERCÍCIO 5
const calculaPotencia = (base, expoente) => base ** expoente;

const base = 10;
const expoente = 3;
const resultado = calculaPotencia(base, expoente);

console.log(`O resultade de ${base} elevado a ${expoente} é ${resultado}`);