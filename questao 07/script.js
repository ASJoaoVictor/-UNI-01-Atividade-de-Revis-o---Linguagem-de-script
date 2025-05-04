/* 7. Maior de dois números:
Peça dois números ao usuário e utilize estrutura condicional para mostrar qual é o maior ou se são iguais. */

var num1 = prompt("Digite um número: ")
var num2 = prompt("Digite um número: ")

if(num1 > num2){
    alert(`${num1} é maior `)
}else if(num2 > num1){
    alert(`${num2} é maior`)
}else{
    alert(`${num1} = ${num2}`)
}