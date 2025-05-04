/* 5. Senha com tentativas limitadas:
Crie um programa que solicite uma senha ao usuário. Dê a ele 3 tentativas para acertar. Caso erre todas, exiba "Acesso bloqueado". */

var senha;
var tentativas = 3;

while(tentativas >= 1){
    senha = prompt(`Digite a senha(tentativas ${tentativas}): `)
    if(senha === "senha"){
        alert("Acesso permitido")
        break;
    }else{
        alert("Senha incorreta!")
        tentativas--;
        if(tentativas === 0){
            alert("Acesso bloqueado")
        }
    }
}