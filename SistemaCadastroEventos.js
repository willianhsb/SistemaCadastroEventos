let readlineSync = require('readline-sync');
var nomeEvento;
var nomeParticipante;
var idadeParticipante = 0;
var dataEvento;
var dataAtual;
var qtdeInscritos = 3;
var novoParticipante;
var cont = 1;

nomeEvento = readlineSync.question("Informe o Nome do Evento: ");
dataAtual = readlineSync.question("Informe a Data de Hoje: ");
dataEvento = readlineSync.question("Informe a Data do Evento: ");



    while (novoParticipante = true && cont <= 3) {

        if (dataEvento >= dataAtual) {

        if (cont <= qtdeInscritos) {

            nomeParticipante = readlineSync.question("Informe o Nome do Participante: ");
            idadeParticipante = readlineSync.question("Informe a Idade do Participante: ");

            if (idadeParticipante >= 18 && qtdeInscritos == cont) {

                console.log("Participante Maior de Idade. Cadastro Permitido!!");

                cont += 1;

            } else {

                console.log("Participante Menor de Idade. Cadastro Não Permitido!!");
            }

        } else {
            console.log("Cadastro de Evento Não Permitido. Quantidade Maxima de Participantes Atingida!");

        }

        novoParticipante = readlineSync.question("Cadastrar Novo Participante? Digite s para (sim) ou n para (nao)");

        if (novoParticipante = "sim") {

            novoParticipante = true;

        }

        if (novoParticipante = "nao") {

            novoParticipante = false;
        }

    } else {
        console.log("Data para Cadastro de Evento Invalida");
    }
}
console.log("Sistema Finalizado");






