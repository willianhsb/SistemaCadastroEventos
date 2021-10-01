let readlineSync = require('readline-sync');
var nomeEvento;
var nomeParticipante;
var idadeParticipante = 0;
var dataEvento;
var dataAtual;
var qtdeVagas;
var novoParticipante;

nomeEvento = readlineSync.question("Informe o Nome do Evento: ");
dataAtual = readlineSync.question("Informe a Data de Hoje: ");
dataEvento = readlineSync.question("Informe a Data do Evento: ");
qtdeVagas = readlineSync.question("Informe a Quantidade de Vagas  Disponiveis: ");


while (dataEvento >= dataAtual) {

    dataEvento = readlineSync.question("Informe a Data do Evento: ");

    if (dataEvento < dataAtual) {
        console.log("Data para Cadastro de Evento Invalida. Entre com a Nova Data!");
    }

}

for (let int = 0; int <= qtdeVagas; int++) {

    do {

        nomeParticipante = readlineSync.question("Informe o Nome do Participante: ");
        idadeParticipante = readlineSync.question("Informe a Idade do Participante: ");

        if (idadeParticipante >= 18) {

            console.log("Participante Maior de Idade. Cadastro Permitido!!");

        } else {

            console.log("Participante Menor de Idade. Cadastro Não Permitido!!");
        }

        novoParticipante = readlineSync.question("Cadastrar Novo Participante? Digite s para (sim) ou n para (nao)");

        if (novoParticipante = "sim") {

            novoParticipante = true;

        }

        if (novoParticipante = "nao") {

            novoParticipante = false;
        }
    } while (novoParticipante = true);

}


console.log("Sistema Finalizado");

