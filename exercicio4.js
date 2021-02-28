let cartas = function(listaUm, listaDois){
    var combinacao = []
    for(var i=0; i<listaUm.length; i++){
        for(var j=0; j<listaDois.length; j++){
            let texto ={valor: `${listaUm[i]}`, naipe: `${listaDois[j]}`}
            combinacao.push(texto)
        }
    }
    return combinacao
}

valores = ["Ás", "Valete", "Rei", "Rainha"];
naipes = ["Espadas", "Paus", "Copas", "Ouros"];
let combinacao = cartas(valores, naipes)
console.log(combinacao)