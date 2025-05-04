/* 10. Tabuada com verificação:
Peça ao usuário um número entre 1 e 10. Se ele estiver fora do intervalo, mostre um erro. Se for válido, use while para exibir a tabuada do número. */

var numero = prompt("Digite um número de 1 a 10: ");

if(numero >= 1 && numero <= 10){
    let cont = 1;
    while(cont <= 10){
        console.log(`${numero} * ${cont} = ${numero*cont}`);
        document.writeln(`${numero} * ${cont} = ${numero*cont} <br>`);
        cont++;
    }
}else{
    alert("Número fora de intervalo")
}