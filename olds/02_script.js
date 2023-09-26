///////////////////// Variáveis Globais /////////////////////
var placarEsquerda = 0, placarDireita = 0
// var nome1="Clique para adicionar um nome"
// var nome2="Blé" 
// var lado = 1
//1: jogador 1 na esquerda
//2: jogador 2 na esquerda
var nomeEsquerda = document.getElementById("botaoNomeEsquerda").textContent
var nomeDireita = document.getElementById("botaoNomeDireita").textContent

var pontuacaoFimDoJogo = 5
/////////////////////////////////////////////////////////////

////////////////////////// Funções do visual //////////////////////////

var MenuLateral = document.getElementById("divMenu");
var clique_Menu = document.getElementById("btnMenuLateral")

clique_Menu.onclick = function (e) {
    e.preventDefault();
    MenuLateral.classList.toggle('.toggleMenuEsquerda');
}

/////////////////////////////////////////////////////////////

////////////////////////// Funções //////////////////////////

function verificaGanhador() {

}

function maisUmEsquerda() {
    placarEsquerda++
    atualizaPlacar()

}

function maisUmDireita() {
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

function mudarNomeEsquerda() {
    nomeEsquerda = prompt("Digite seu nome:")
    if (nomeEsquerda != null && nomeEsquerda.length > 0) {
        document.getElementById("botaoNomeEsquerda").textContent = nomeEsquerda
        atualizaPlacar()
    }
}

function mudarNomeDireita() {
    nomeDireita = prompt("Digite seu nome:")
    if (nomeDireita != null && nomeDireita.length > 0) {
        document.getElementById("botaoNomeDireita").textContent = nomeDireita
    }
}

function atualizaPlacar() {
    document.getElementById("numeroEsquerda").innerHTML = placarEsquerda
    document.getElementById("numeroDireita").innerHTML = placarDireita
    document.getElementById("botaoNomeEsquerda").textContent = nomeEsquerda
    document.getElementById("botaoNomeDireita").textContent = nomeDireita
}

function reset() {
    if (confirm('Tem certeza que você quer resetar o placar?')) {
        alert('Alerta')
    }
}

function escolherPontuacao() {
    var radioEscolhido = document.getElementsByName('pontuacao')
    for (var i = 0; i < 6; i++) {
        if (radioEscolhido[i].checked) {
            // alert('teste ' + i)
            var fimChecado = i
        }
    }

    switch (fimChecado) {
        case 0: document.getElementById('caixaPontuacao').style = 'display: none;'
            pontuacaoFimDoJogo = 3
            break
        case 1: document.getElementById('caixaPontuacao').style = 'display: none;'
            pontuacaoFimDoJogo = 5
            break
        case 2: document.getElementById('caixaPontuacao').style = 'display: none;'
            pontuacaoFimDoJogo = 7
            break
        case 3: document.getElementById('caixaPontuacao').style = 'display: none;'
            pontuacaoFimDoJogo = 10
            break
        case 4: document.getElementById('caixaPontuacao').style = 'display: none;'
            pontuacaoFimDoJogo = 0
            break
        case 5: document.getElementById('caixaPontuacao').style = 'display: block; margin-left: 7px; float: left; margin-top: 5px;'
            pontuacaoFimDoJogo = 5
            break
    }

}