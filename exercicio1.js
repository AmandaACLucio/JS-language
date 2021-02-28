let pegaNumeroAleatorio = function(max) {
    min = 1
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}

let escolhendoNumero = function(numeroAleatorio){
  
    const readline = require('readline');

    const lendoConsole= readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    lendoConsole.question('Qual seria o número que eu estou pensando? (Para desistir aperte ENTER) ', (numeroEscolhido) => {

        if(numeroEscolhido==''){
            console.log("Poxa! Que pena! O número que eu estava pensando era "+numeroAleatorio)
            lendoConsole.close();
            return
        }
        if(numeroAleatorio!=numeroEscolhido){

            console.log("ERROU!")
            lendoConsole.close();
            return escolhendoNumero(numeroAleatorio)
        }
        else
            console.log("Parabéns! O número que eu estava pensando era "+numeroAleatorio)
        lendoConsole.close();
    });    
}

let tentativaErro = function(){
    const readline = require('readline');

    const lendoConsole= readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    lendoConsole.question('Vamos gerar um número aleatório entre 1 e n. Qual valor você escolhe para n? ', (nMaximo) => {

        let numeroAleatorio = pegaNumeroAleatorio(nMaximo)
        lendoConsole.close();
        return escolhendoNumero(numeroAleatorio)
    });    
}

tentativaErro() 

