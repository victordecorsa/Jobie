//Gera o número aleatório entre 1.000 e 2.000
let numeroAleatorio = Math.floor(Math.random()*5000)+1000;
//Formata o número gerado para separar as casas decimais. ex = 1000 para 1.000
function formatar(numeroAleatorio){
    return numeroAleatorio.toLocaleString('pt-BR')
}
//insere o valor ao html
document.getElementById("numero").innerHTML = formatar(numeroAleatorio);