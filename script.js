const num1 = Number(prompt("Digite o primeiro número:"));
const num2 = Number(prompt("Digite o segundo número:"));

if (isNaN(num1) || isNaN(num2)) {
    console.log("Erro: digite apenas números válidos.");
} else {

    console.log("Soma:", num1 + num2);
    console.log("Subtração:", num1 - num2);
    console.log("Multiplicação:", num1 * num2);

    if (num2 === 0) {
        console.log("Divisão: Erro (divisão por zero)");
        console.log("Resto: Erro (divisão por zero)");
    } else {
        console.log("Divisão:", num1 / num2);
        console.log("Resto:", num1 % num2);
    }

    let resultado = num1;

    resultado += num2;
    console.log("Após += :", resultado);

    resultado -= num2;
    console.log("Após -= :", resultado);

    resultado *= num2;
    console.log("Após *= :", resultado);

    if (num2 !== 0) {
        resultado /= num2;
        console.log("Após /= :", resultado);

        resultado %= num2;
        console.log("Após %= :", resultado);
    } else {
        console.log("Não é possível usar /= ou %= com zero.");
    }
}
