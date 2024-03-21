const notaFinal = 6;
const faltas = 5;
const advertencias = 0;

if (notaFinal < 7 && faltas > 4) {
  console.log("Reprovado! Se dedique um pouco mais.")
} else {
  console.log("Aprovado! Boas festas.")
}

if (faltas >=2 && !advertencias){
  console.log("Recebeu o bônus!")
} else {
  console.log("Não recebeu o bônus!")
}