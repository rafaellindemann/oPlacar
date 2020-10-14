///////////////////// Variáveis Globais /////////////////////
var placarEsquerda=0, placarDireita=0
// var nome1="Clique para adicionar um nome"
// var nome2="Blé" 
// var lado = 1
    //1: jogador 1 na esquerda
    //2: jogador 2 na esquerda
var nomeEsquerda = document.getElementById("botaoNomeEsquerda").textContent
var nomeDireita = document.getElementById("botaoNomeDireita").textContent
    
/////////////////////////////////////////////////////////////

////////////////////////// Funções //////////////////////////

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
    if (nomeEsquerda != null && nomeEsquerda.length > 0) {
        document.getElementById("botaoNomeEsquerda").textContent = nomeEsquerda
        atualizaPlacar()
    }
}

function mudarNomeDireita()
{
    nomeDireita = prompt("Digite seu nome:")
    if (nomeDireita != null && nomeDireita.length > 0) {
        document.getElementById("botaoNomeDireita").textContent = nomeDireita
    }
}

function atualizaPlacar()
{
    document.getElementById("numeroEsquerda").innerHTML = placarEsquerda
    document.getElementById("numeroDireita").innerHTML = placarDireita
    document.getElementById("botaoNomeEsquerda").textContent = nomeEsquerda
    document.getElementById("botaoNomeDireita").textContent = nomeDireita
}

function reset() {
    if(confirm('Tem certeza que você quer resetar o placar?')) {
        alert('Alerta')
    }
}