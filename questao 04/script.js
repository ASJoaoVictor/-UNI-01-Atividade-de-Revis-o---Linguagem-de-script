/* 4. Soma de números até zero:
Solicite ao usuário que digite números. Some todos os números inseridos até que o usuário digite zero. Mostre o total.*/

var soma = 0;

var numero;

while(numero != 0){
    numero = Number(prompt("Digite um número(Quando quiser parar digite 0): "))

    soma += numero;
}

alert(soma)