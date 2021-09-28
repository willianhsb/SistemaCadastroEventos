let readlineSync = require('readline-sync');
var nomeEvento;
var nomeParticipante;
var idadeParticipante = 0;
var dataEvento;
var dataAtual;
var qtdeInscritos = 98;
var novoParticipante = "sim";

nomeEvento = readlineSync.question("Informe o Nome do Evento: ");
dataAtual = readlineSync.question("Informe a Data de Hoje: ");
dataEvento = readlineSync.question("Informe a Data do Evento: ");

if (dataEvento >= dataAtual) {
    

    do {
        if (qtdeInscritos <= 100) {

            qtdeInscritos++;
            
            nomeParticipante = readlineSync.question("Informe o Nome do Participante: ");
            idadeParticipante = readlineSync.question("Informe a Idade do Participante: ");
            if (idadeParticipante >= 18) {
                console.log("Participante Maior de Idade. Cadastro Permitido!!");

            } else {
                console.log("Participante Menor de Idade. Cadastro Não Permitido!!");
            }


        } else {
            console.log("Cadastro de Evento Não Permitido. Quantidade Maxima de Participantes Atingida!");
           
        } novoParticipante = readlineSync.question("Cadastrar Novo Participante?(sim/nao)");

    } while (novoParticipante = "sim");

} else {
    console.log("Cadastro de Evento Não Permitido");

}






