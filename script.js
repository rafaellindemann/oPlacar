///////////////////// Variáveis Globais /////////////////////
var pontosJogador1=0, pontosJogador2=0
// var nome1="Clique para adicionar um nome"
// var nome2="Blé" 
var lado = 1
    //1: jogador 1 na esquerda
    //2: jogador 2 na esquerda
var nomeJogador1 = document.getElementById("nomeEsquerda").textContent
var nomeJogador2 = 'Nome 2'
    
/////////////////////////////////////////////////////////////

////////////////////////// Funções para o jogo //////////////////////////

// inicializa()

// function inicializa()
// {
//     document.getElementById("nomeEsquerda").textContent = nomeJogador1
//     document.getElementById("nomeDireita").textContent = nomeJogado2
// }

function maisUmEsquerda () {
    pontosJogador1++
    atualizaPlacar()

}

function maisUmDireita () {
    pontosJogador2++
    atualizaPlacar()

}

function menosUmEsquerda() {
    if(pontosJogador1 > 0) {
    pontosJogador1--
    atualizaPlacar()
    }
}

function menosUmDireita() {
    if(pontosJogador2 > 0) {
    pontosJogador2--
    atualizaPlacar()
    }
}

function mudarLados() {
    
    if(lado==1) lado=2
    else lado = 1
    atualizaPlacar()
}

function zerarPlacar() {
    pontosJogador1 = 0
    pontosJogador2 = 0

    atualizaPlacar()
}

function nomeEsquerda()
{   
    nomeJogador1 = prompt("Digite seu nome:")
    if (nomeJogador1 != null) {
        document.getElementById("nomeEsquerda").textContent = nomeJogador1
    }
}

function nomeDireita()
{
    nomeJogador2 = prompt("Digite seu nome:")
    if (nomeJogador2 != null) {
        document.getElementById("nomeDireita").textContent = nomeJogador2
    }
}

function atualizaPlacar()
{
    if(lado == 1)
    {
        document.getElementById("numeroEsquerda").innerHTML = pontosJogador1
        
        document.getElementById("numeroDireita").innerHTML = pontosJogador2
        
        document.getElementById("nomeEsquerda").textContent = nomeJogador1
        
        document.getElementById("nomeDireita").textContent = nomeJogador2
    }else
    {
        document.getElementById("numeroEsquerda").innerHTML = pontosJogador2
        
        document.getElementById("numeroDireita").innerHTML = pontosJogador1

        document.getElementById("nomeEsquerda").textContent = nomeJogador2
        
        document.getElementById("nomeDireita").textContent = nomeJogador1
    }
    
    // document.getElementById("numeroDireita").innerHTML = ""
    
    // document.getElementById("numeroEsquerda").innerHTML = ""
}

/////////////////////////////////////////////////////////////////////////////

////////////////////////// Funções para o visual ///////////////////////////////
function abrirMenu () {

}

function Visual1() {
    document.getElementsByTagName("body")[0].setAttribute("class", "Visual1"); 
  }
////////////////////////////////////////////////////////////////////////////////