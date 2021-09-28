let readlineSync = require('readline-sync');
var nomeEvento;
var nomeParticipante;
var idadeParticipante;
var dataEvento;
var dataAtual;
var qtdeInscritos;
var novoParticipante;

    nomeEvento = readlineSync.question("Informe o Nome do Evento: ");
    dataAtual= readlineSync.question("Informe a Data de Hoje: ");
    dataEvento = readlineSync.question("Informe a Data do Evento: ");
    

while(dataAtual <= dataEvento ){   

    console.log("Cadastro não permitido. Informe uma data anterior a data do evento");

    dataAtual= readlineSync.question("Informe a Data de Hoje: ");  
}
       
        

            
                for(qtdeInscritos = 98; qtdeInscritos <= 100; qtdeInscritos++){

                    

                    if(qtdeInscritos >= 1){

                     novoParticipante = readlineSync.question("Deseja Cadastrar Novo Participante? Sim(s) / Nao(n): ");

                    while(novoParticipante = "s"){
                

                    if(qtdeInscritos => 100){            
    
                    nomeParticipante = readlineSync.question("Informe o Nome do Participante: ");
                    idadeParticipante = readlineSync.question("Informe a Idade do Participante: ");
    
                    while(idadeParticipante <= 18){
                    console.log("Cadastro Não Permitido. Participante Menor de Idade");
                    idadeParticipante = readlineSync.question("Informe a Idade do Participante: ");
    
                    }                   
                    
                     qtdeInscritos++;
                   
                    }else{
                        console.log("Cadastro não permitido. Quantidade Maxima de incritos atingida")
                    }
                    
                }
            }
                
            }
            console.log("Cadastro Finalizado")
                    
            
        

    
