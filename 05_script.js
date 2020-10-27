///////////////////// Variáveis Globais /////////////////////
var placarEsquerda = 0, placarDireita = 0, vitoriaEsquerda = 0, vitoriaDireita = 0
var menuAMostra = false
var nomeEsquerda = document.getElementById("botaoNomeEsquerda").textContent
var nomeDireita = document.getElementById("botaoNomeDireita").textContent
var permitidoNegativo
var pontuacaoFimDoJogo = 5

console.log(window)
/////////////////////////////////////////////////////////////

////////////////////////// Funções do visual //////////////////////////

var MenuLateral = document.getElementById("divMenuLateral");
var clique_Menu = document.getElementById("btnMenuLateral");
var Botao = document.getElementById("divBotaoMenu")

var mensagemFinalDePartida = document.getElementById('divMensagemFinalDePartida'); // mensagem de vencedor
var painelFinalDePartida = document.getElementById('divPainelFinalDePartida') // quadro voador do LeoSilva

var Body = document.getElementById("Body")
var clique_Radio = document.getElementById("rdoVisual1")

clique_Menu.onclick = function (e) { // isso abre o menuLateral
    e.preventDefault();
    if (menuAMostra == false){
    MenuLateral.classList.toggle('toggleMenuEsquerda');

    menuAMostra = true
    Botao.style = 'display: none;'
    console.log(menuAMostra)
    } 
}



clique_Radio.onchange = function (e) {
    var teste = document.getElementsByTagName('input')
    for(i=0; i<teste.length; i++)
    {
        teste[i].style.setProperty('--border-hover', 'blue')
    }
    e.preventDefault()
    Body.classList.toggle('Visual1');

    // document.getElementsByTagName('body')[0].setAttribute("class", "Visual1");
    // alert("é")
}

/////////////////////////////////////////////////////////////

////////////////////////// Funções do Menu Lateral //////////////////////////

// function bla() // alternativa viajenta para a função escolherPontuacao()
// {
//     var radioEscolhido = document.getElementsByName('pontuacao')
//     var presetsFimDeJogo = [3,5,7,10,Infinity]
//     for (var i = 0; i < 6; i++) {
//         if (radioEscolhido[i].checked) {
//             // alert('teste ' + i)
//             var fimChecado = i
//         }
//     }

//     if(fimChecado<5)
//     {
//         document.getElementById('caixaPontuacao').style = 'display: none;'
//         pontuacaoFimDoJogo = presetsFimDeJogo[i]   
//     }else if(fimChecado == 5)
//     {
//         document.getElementById('caixaPontuacao').style = 'display: block; margin-left: 7px; float: left; margin-top: 5px;'
//     }
// }

function pontuarNegativo() {
    permitidoNegativo = document.getElementById('pontoNegativo').checked

    if (permitidoNegativo == false) {
        if (placarDireita < 0) {
            placarDireita = 0
        }

        if (placarEsquerda < 0) {
            placarEsquerda = 0
        }
    }

    atualizaPlacar()
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
            pontuacaoFimDoJogo = Infinity
            break
        case 5: document.getElementById('caixaPontuacao').style = 'display: block; margin-left: 7px; float: left; margin-top: 5px;'
            break
    }
}

function salvarPontuacao() {
    pontuacaoFimDoJogo = document.getElementById('outraPontuacao').value
}
/////////////////////////////////////////////////////////////

////////////////////////// Funções //////////////////////////

function verificaGanhador() {
    if (placarDireita == pontuacaoFimDoJogo) {
        // divPainelFinalDePartida entra num cavalo branco
        vitoriaDireita++
        mensagemFinalDePartida.innerHTML = `${nomeDireita} VENCEU!`;
    } else if (placarEsquerda == pontuacaoFimDoJogo) {
        // divPainelFinalDePartida entra num cavalo branco
        vitoriaEsquerda++
        mensagemFinalDePartida.innerHTML = `${nomeEsquerda} VENCEU!`;
    } else if (placarDireita > pontuacaoFimDoJogo || placarEsquerda > pontuacaoFimDoJogo) {
        zerarPlacar();
    }
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
    if (placarEsquerda > 0 || permitidoNegativo == true) {
        placarEsquerda--
    }
    atualizaPlacar()
}

function menosUmDireita() {
    if (placarDireita > 0 || permitidoNegativo == true) {
        placarDireita--
    }
    atualizaPlacar()
}

function mudarLados() {
    var temp = placarEsquerda
    placarEsquerda = placarDireita
    placarDireita = temp

    temp = nomeEsquerda
    nomeEsquerda = nomeDireita
    nomeDireita = temp

    temp = vitoriaDireita
    vitoriaDireita = vitoriaEsquerda
    vitoriaEsquerda = temp

    atualizaPlacar()
}

function zerarPlacar() {

    // console.log(painelFinalDePartida.) // *** teste pra achar o z
    placarEsquerda = 0
    placarDireita = 0

    atualizaPlacar()
    mensagemFinalDePartida.innerHTML = ''
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
    document.getElementById('vitoriasDireita').innerHTML = vitoriaDireita
    document.getElementById('vitoriasEsquerda').innerHTML = vitoriaEsquerda
    verificaGanhador()
}

function reset() {
    if (confirm('Tem certeza que você quer resetar o placar?')) {
        alert('Testando reset.')
    }
}

function avisaVencedor(vencedor) {
    // criar a div LeoSilva com a festinha do vencedor e o resultado
    // zerar a partida?
}

function abrirMenu() {

}

// -- TESTE PARA ESCONDER O MENU CLICANDO FORA --


console.log(menuAMostra)
// 
var menu = document.getElementById('divMenuLateral')
var html = document.body.parentNode

html.onclick = function (event) {
    // console.log(event)
    // console.log(event.path[1].id == "btnMenuLateral")
    // if(event.path[1].id == "btnMenuLateral") alert('To aqui, porraaaaaaa')
    if (menuAMostra) {
        // event.preventDefault();
        if (!menu.contains(event.target) && event.path[1].id != "btnMenuLateral") {
            // alert('Clicked in the página')
            menuAMostra = false
            console.log(menuAMostra)
            // *** fechar o menu lateral
            MenuLateral.classList.toggle('toggleMenuEsquerda');
            
            Botao.style = 'display: inline;'
            var meioDaPagina = window.innerWidth/2 - 200
            // vai!
            document.getElementById("divMenuLateral").style.margin = `${meioDaPagina}px;`
            
            console.log(window)
        } 
    }
}



// 