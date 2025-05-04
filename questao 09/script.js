/* 9. Contar quantos números positivos foram inseridos:
Peça números ao usuário até ele digitar -1. No final, diga quantos números positivos ele digitou. */

var numero;
var numPositivos = 0;

while(numero != -1){
    numero = prompt("Digite um número(digite -1 para parar): ");

    if(numero > 0){
        numPositivos++;
    }
}

alert(`Foram digitados ${numPositivos} números positivos`)