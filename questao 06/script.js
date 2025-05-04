/* 6. Números de 1 a 100 divisíveis por 5:
Use um while para imprimir todos os números de 1 a 100 que são divisíveis por 5. */

var num = 1;

while(num <= 100){
    if(num % 5 == 0){
        console.log(num);
    }
    num++;
}