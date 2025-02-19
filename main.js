const dobro = num => num * 2;
 
const dividir = (num1, num2) => num1 / num2;
 
const mensagemBoasVindas = nome => {
    return "Seja bem-vindo, " + nome;
}
 
function executarOperacao(a, b, operacao) {
    return operacao(a, b);
}
 
const precos = [10, 20, 30, 40, 50]
const desconto = precos.map(preco => preco * 0.9)
 
const idades = [14, 22, 24, 8, 43];
const menoresDeIdade = idades.filter(idade => idade <= 18);
 
const numeros = [2, 3, 4];
const produto = numeros.reduce((acc, num) => acc * num, 1);
 
 
console.log(dobro(4));
console.log(dividir(10, 2));
console.log(mensagemBoasVindas('Enzo'));
console.log(executarOperacao(6, 3, (a, b) => a - b));
console.log(executarOperacao(4, 5, (a, b) => a * b));
console.log(executarOperacao(10, 2, (a, b) => a + b));
console.log(executarOperacao(9, 3, (a, b) => a / b));
console.log(desconto);
console.log(menoresDeIdade);
console.log(produto);