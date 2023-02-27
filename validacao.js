const div = document.getElementById('chute')
const body = document.getElementById('corpo')


function verificaSeNum(chute){
    const numero = +chute
    if(NotNumber(numero)){
        gameOver(chute)
        div.innerHTML = `<div class = "retorno"> ERRO </div>
        <span class = "box"> fale um número </span>`
        console.log('palavra inválida: fale um número')
    }
    else if(numForaLim(numero)){
        div.innerHTML = `<div class = "retorno"> ERRO </div>
        <span class = "box"> Fale um número entre ${menorValor} e ${maiorValor} </span>`
        console.log(`Numero inválido: Fale um número entre ${menorValor} e ${maiorValor}`)
    }
    else{
        div.innerHTML = `<div class = "retorno"> Você disse</div>
        <span class = "box"> ${numero}</span>`
        verificaChute(numero)
    }
}


function verificaChute(chute){
    console.log(chute)
    if(!(chute == numeroSorteado)){
        console.log('esse não é o número escolhido')
        numeroErrado(chute,numeroSorteado)
    }
    else{
        console.log('você acertou !')
        numeroCerto(chute,numeroSorteado)
    }
}


function numeroErrado(numero,referencia){
    if(numero > referencia){
        div.innerHTML += `<div>O número screto é menor <i class="fa-solid fa-arrow-down"></i> </div>`
        return "O número escolhido é menor"
        
    }
    else if(numero < referencia){
       div.innerHTML += `<div>O número screto é maior <i class="fa-solid fa-arrow-up"></i> </div>`
        return "O número escolhido é maior"
    }
}

function numeroCerto(numero,referencia){
    const botao = document.querySelector("#novoJogo")
    if(numero == referencia){
        document.body.innerHTML = `<h1 class="titulo">Você acertou !</h1>
        <h3 class="dica"> O número secreto era ${referencia} </h3>
        <button class = "botao" id= "novoJogo">Jogar novamente</button>`
        document.body.classList.add('respostaCerta')
        body.addEventListener('click', (event) => {
           if(event.target.id == 'novoJogo')
           { window.location.reload()}
        })
    }
}

function NotNumber(numero){
    return Number.isNaN(numero)
        
}

function numForaLim(numero){
    return numero > maiorValor || numero < menorValor
}

function gameOver(comando){
    if(comando == "game over"){
        body.innerHTML = `<h1 class='titulo'> fim de jogo </h1>
        <button class = "botao" id= "novoJogo">Jogar novamente</button>`
        body.addEventListener('click', (event) => {
            if(event.target.id == 'novoJogo')
            { window.location.reload()}
         })
        return
    }
    else{}
}