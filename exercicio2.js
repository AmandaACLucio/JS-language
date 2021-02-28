let imparesMultiplosTres = function(){
    const readline = require('readline');

    const lendoConsole= readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    lendoConsole.question('Qual seria o n? ', (n) => {
        var novaLista = []
        for(var i=0; i<n; i++){
            if((i%2==1) && (i%3==0)){
                novaLista.push(i)
            }
        }
        console.log(`Até ${n}, os impares e múltiplos de 3 são: ${novaLista}`)
     
        lendoConsole.close();
    });    

}
imparesMultiplosTres()