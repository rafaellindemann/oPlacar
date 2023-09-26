
var inteiro, real = 2.1

inteiro = parseInt(real)


function calculaMedia(n1, n2)
{
    var media = (n1+n2)/2
    return media
}

mediaCalculada = calculaMedia(6, 10)
alert(mediaCalculada)

///////////////////// Variáveis Globais /////////////////////
var placarEsquerda=0, placarDireita=0
// var nome1="Clique para adicionar um nome"
// var nome2="Blé" 
// var lado = 1
    //1: jogador 1 na esquerda
    //2: jogador 2 na esquerda
var nomeEsquerda = document.getElementById("nomeEsquerda").textContent
var nomeDireita = document.getElementById("nomeDireita").textContent
    
/////////////////////////////////////////////////////////////

////////////////////////// Funções //////////////////////////
// inicializa()

// function inicializa()
// {
//     document.getElementById("nomeEsquerda").textContent = nomeEsquerda
//     document.getElementById("nomeDireita").textContent = nomeJogado2
// }

function maisUmEsquerda () {
    placarEsquerda++
    atualizaPlacar()

}

function maisUmDireita () {
    placarDireita++
    atualizaPlacar()

}

function menosUmEsquerda() {
    placarEsquerda--
    atualizaPlacar()

}

function menosUmDireita() {
    placarDireita--
    atualizaPlacar()

}

function mudarLados() {
    var temp = placarEsquerda
    placarEsquerda = placarDireita
    placarDireita = temp

    temp = nomeEsquerda
    nomeEsquerda = nomeDireita
    nomeDireita = temp

    // if(lado==1) lado=2
    // else lado = 1

    //*** *
    atualizaPlacar()
}

function zerarPlacar() {
    placarEsquerda = 0
    placarDireita = 0

    atualizaPlacar()
}

function mudarNomeEsquerda()
{   
    nomeEsquerda = prompt("Digite seu nome:")
    if (nomeEsquerda != null) {
        document.getElementById("nomeEsquerda").textContent = nomeEsquerda
    }
}

function mudarNomeDireita()
{
    nomeDireita = prompt("Digite seu nome:")
    if (nomeDireita != null) {
        document.getElementById("nomeDireita").textContent = nomeDireita
    }
}

function atualizaPlacar()
{
    document.getElementById("numeroEsquerda").innerHTML = placarEsquerda
    document.getElementById("numeroDireita").innerHTML = placarDireita
    document.getElementById("nomeEsquerda").textContent = nomeEsquerda
    document.getElementById("nomeDireita").textContent = nomeDireita
    
    // document.getElementById("numeroDireita").innerHTML = ""
    
    // document.getElementById("numeroEsquerda").innerHTML = ""
}