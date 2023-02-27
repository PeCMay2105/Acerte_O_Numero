// variaveis importantes, de escopo global
const numeroSorteado = sorteiaNum() 
const menorValor = 1
const maiorValor = 500
const dica = document.querySelector(".dica")
// chamada das funções
    novaDica()

// declaração das funções
function sorteiaNum(){
const maiorValor = 500
let peca1 = Math.random()

return parseInt(peca1*maiorValor + 1)
}

console.log(`O número secreto é ${numeroSorteado}`)

function novaDica(){
    //let adendo = document.createElement('strong')
   /*  dica.appendChild(adendo) */
    dica.textContent = `O número está entre ${menorValor} e ${maiorValor}`
    let adendo = document.createElement('strong')
    adendo.innerHTML = "DICA"
    
}



