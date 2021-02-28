let triplicaValores = function(numero){
    var novaLista = []
    for(var i=0; i<numero; i++){
       novaLista.push(i*3)
    }
    return novaLista
}

let ultimosTresValores  = function(lista){
    var novaLista = lista.slice((lista.length)-3, lista.length)
    return novaLista
}

let embaralhaValores = function (lista){
    for(var indice, tamanho, numero; tamanho; indice = Math.floor(Math.random() * lista.length)){
      numero = lista[--indice] 
      lista[indice] = lista[j]
      lista[j] = numero
    }
    return lista
  }

let triatro = function(){
    const readline = require('readline');

    const lendoConsole= readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    lendoConsole.question('Qual seria o n? ', (n) => {
        let listaValoresTriplicados = triplicaValores(n)
        console.log("Triplicados:" + listaValoresTriplicados)

        let listaTresUltimosValores = ultimosTresValores(listaValoresTriplicados)
        console.log("Últimos Três:" + listaTresUltimosValores)

        let valoresEmbaralhados = embaralhaValores(listaValoresTriplicados)
        console.log("Embaralhados:" + valoresEmbaralhados)

        lendoConsole.close();
    });    
}

triatro()
