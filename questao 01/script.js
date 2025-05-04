/* 1. Verificação de número positivo:
Escreva um programa que solicita ao usuário um número e exibe se ele é positivo, negativo ou zero. */

var num = prompt("Digite um número: ");

if(num > 0){
    alert("Número positivo");
}else if(num < 0){
    alert("Número negativo");
}else{
    alert("Número igual a zero");
}