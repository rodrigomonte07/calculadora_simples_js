let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

if (isNaN(num1) || isNaN(num2)) {
    console.log("Erro: digite apenas números válidos.");
} else {

    let soma = num1 + num2;
    let subtracao = num1 - num2;
    let multiplicacao = num1 * num2;
    let divisao = num2 !== 0 ? num1 / num2 : "Erro: divisão por zero";
    let resto = num2 !== 0 ? num1 % num2 : "Erro: divisão por zero";

    console.log("Soma:", soma);
    console.log("Subtração:", subtracao);
    console.log("Multiplicação:", multiplicacao);
    console.log("Divisão:", divisao);
    console.log("Resto:", resto);

    let resultado = num1;

    resultado += num2; 
    console.log("Resultado após += :", resultado);

    resultado -= num2; 
    console.log("Resultado após -= :", resultado);

    resultado *= num2;
    console.log("Resultado após *= :", resultado);

    if (num2 !== 0) {
        resultado /= num2;
        console.log("Resultado após /= :", resultado);

        resultado %= num2;
        console.log("Resultado após %= :", resultado);
    } else {
        console.log("Não é possível usar /= ou %= com zero.");
    }
}