/* 8. Menu com opções até sair:
Mostre um menu no console com as opções:


1 - Dizer Olá 
2 - Mostrar a data atual 
3 - Sair



Use um while para repetir o menu até o usuário escolher a opção 3. */


console.log("1 - Dizer Olá");
console.log("2 - Mostrar a data atual");
console.log("3 - Sair");

var opcao;
var data = new Date();

while(opcao != 3){
    opcao = Number(prompt("Escolha uma opção: "));
    
    switch(opcao){
        case 1:
            console.log("Olá");
            break;
        case 2:
            //console.log("Teste");
            console.log(data);
            break;
        case 3:
            break;
    }
}
