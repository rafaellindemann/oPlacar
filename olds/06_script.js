///////////////////// Variáveis Globais /////////////////////
var placarEsquerda = 0, placarDireita = 0, vitoriaEsquerda = 0, vitoriaDireita = 0
var menuAMostra = false
var confirmar


/////////////////////// LEITURA DA LOCALSTORAGE /////////////
var nomeEsquerda = localStorage.getItem('NOMEESQUERDA')
if(nomeEsquerda == undefined) nomeEsquerda = 'Time 1'
document.getElementById("botaoNomeEsquerda").textContent = nomeEsquerda

var nomeDireita = localStorage.getItem('NOMEDIREITA')
if(nomeDireita == undefined) nomeDireita = 'Time 2'
document.getElementById("botaoNomeDireita").textContent = nomeDireita


var permitidoNegativo = localStorage.getItem('NEGATIVO')
if(permitidoNegativo == 'false') // buscou o texto 'false' da localStorage...
{
    permitidoNegativo == false
    document.getElementById('pontoNegativo').checked = false
}else // buscou 'true' ou pegou undefined por não ter nada salvo (true é o valor inicial da variável)...
{
    permitidoNegativo = true
    // CHECKAR O CHECKBOX
    document.getElementById('pontoNegativo').checked = true
}


var pontuacaoFimDoJogo = localStorage.getItem('FIMDEJOGO')
if(pontuacaoFimDoJogo != undefined)
{
    pontuacaoFimDoJogo = Number(pontuacaoFimDoJogo)
    // checkar o radio
    if(pontuacaoFimDoJogo == 3)
    {
        document.getElementById('pontuacao3').checked = true
    }else if(pontuacaoFimDoJogo == 5)
    {
        document.getElementById('pontuacao5').checked = true
    }else if(pontuacaoFimDoJogo == 7)
    {
        document.getElementById('pontuacao7').checked = true
    }else if(pontuacaoFimDoJogo == 10)
    {
        document.getElementById('pontuacao10').checked = true
    }else if(pontuacaoFimDoJogo == Infinity)
    {
        document.getElementById('pontuacaoInfinito').checked = true
    }else
    {
        document.getElementById('pontuacaoOutros').checked = true
    }
}else
{
    pontuacaoFimDoJogo = 5 // não existia no LS, inicializa com 5 como padrão
}

var temaInicial = localStorage.getItem('TEMA')
if(temaInicial != undefined)
{
    if(temaInicial == 'body') document.getElementById('tema1').checked = true
    if(temaInicial == 'Visual1') document.getElementById('tema2').checked = true
    if(temaInicial == 'Visual2') document.getElementById('tema3').checked = true
    if(temaInicial == 'Aparencia3') document.getElementById('tema4').checked = true
   
     document.getElementsByTagName('body')[0].classList.value = temaInicial
}


/////////////////////// LEITURA DA LOCALSTORAGE /////////////


/////////////////////////////////////////////////////////////

////////////////////////// Funções do visual //////////////////////////

var MenuLateral = document.getElementById("divMenuLateral");
var clique_Menu = document.getElementById("btnMenuLateral");
var Botao = document.getElementById("divBotaoMenu")

var mensagemFinalDePartida = document.getElementById('divMensagemFinalDePartida'); // mensagem de vencedor
var painelFinalDePartida = document.getElementById('divPainelFinalDePartida'); // quadro voador do LeoSilva

var Body = document.getElementById("Body")
var clique_Radio = document.getElementById("rdoVisual1")

clique_Menu.onclick = function (e) { // isso abre o menuLateral

    e.preventDefault();
    if (menuAMostra == false){
    MenuLateral.classList.toggle('toggleMenuEsquerda');

    menuAMostra = true
    Botao.style = 'display: none;'
    } 
}

function mudarTema() {
    var temaEscolhido = 0
    tema = document.getElementsByName("tema")

    for (i = 0; i < tema.length; i++) {
        if (tema[i].checked) {
            console.log("Escolheu: " + tema[i].value);
            temaEscolhido = i
        }
    }

    if (tema[temaEscolhido] == tema1) {
        Body.setAttribute("class", "body")
    }
    if (tema[temaEscolhido] == tema2) {
        Body.setAttribute("class", "Visual1")
    }
    if (tema[temaEscolhido] == tema3) {
        Body.setAttribute("class", "Visual2")
    }
    if (tema[temaEscolhido] == tema4) {
        Body.setAttribute("class", "Aparencia3")
    }
    salvarPreferencias()
}

/////////////////////////////////////////////////////////////

////////////////////////// Funções do Menu Lateral //////////////////////////

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
    salvarPreferencias()
}


function escolherPontuacao() {
    var radioEscolhido = document.getElementsByName('pontuacao')
    var autoriza = 1

    for (var i = 0; i < 6; i++) {
        if (radioEscolhido[i].checked) {
            var fimChecado = i              
        }
    }

    switch (fimChecado) {
        case 0: document.getElementById('caixaPontuacao').style = 'display: none;'
            confirmar = 3
            confirmarPlacar()
            if (autoriza == 1) {
                pontuacaoFimDoJogo = 3
            }
            break
        case 1: document.getElementById('caixaPontuacao').style = 'display: none;'
            confirmar = 5
            confirmarPlacar()
            if (autoriza == 1) {
            pontuacaoFimDoJogo = 5
            }
            break
        case 2: document.getElementById('caixaPontuacao').style = 'display: none;'
            confirmar = 7
            confirmarPlacar()
            if (autoriza == 1) {
            pontuacaoFimDoJogo = 7
            }
            break
        case 3: document.getElementById('caixaPontuacao').style = 'display: none;'
            confirmar = 10
            confirmarPlacar()
            if (autoriza == 1) {
            pontuacaoFimDoJogo = 10
            }
            break
        case 4: document.getElementById('caixaPontuacao').style = 'display: none;'
            confirmar = Infinity
            confirmarPlacar()
            if (autoriza == 1) {
            pontuacaoFimDoJogo = Infinity
            }
            break
        case 5: document.getElementById('caixaPontuacao').style = 'display: block; margin-left: 7px; float: left; margin-top: 5px;'
                document.getElementById('outraPontuacao').value = pontuacaoFimDoJogo // *** teste para o input aparecer com o valor atual
            break
    }

    function confirmarPlacar() {
        if (confirmar <= placarEsquerda || confirmar <= placarDireita) {
            confirmar = confirm("O placar atual está maior que a opção escolhida. Tem certeza que deseja alterar a pontuação?\n\nAo confirmar, o placar será reiniciado.")
        }

        if (confirmar == true) {
            placarEsquerda = 0
            placarDireita = 0
            atualizaPlacar()
        } else if (confirmar == false) {
            autoriza = 0

            switch(pontuacaoFimDoJogo)
            {
                case 3: document.getElementById('pontuacao3').checked = true
                    break
                case 5: document.getElementById('pontuacao5').checked = true
                    break
                case 7: document.getElementById('pontuacao7').checked = true
                    break
                case 10: document.getElementById('pontuacao10').checked = true
                    break
                case Infinity: document.getElementById('pontuacaoInfinito').checked = true
                    break
                default:  document.getElementById('pontuacaoOutros').checked = true
            }
        }
        }
  salvarPreferencias()      
}

function salvarPontuacao() { 
    if (document.getElementById('outraPontuacao').value <= 0 && document.getElementById('pontoNegativo').checked) {
        alert('Por favor, digite uma pontuação válida.')
    } else {
        if (document.getElementById('outraPontuacao').value < placarEsquerda || document.getElementById('outraPontuacao').value < placarDireita) {
            if (confirm('A pontuação escolhida é menor que o atual placar. \nCaso confirme, o placar será zerado. Deseja continuar?')) {
                pontuacaoFimDoJogo = document.getElementById('outraPontuacao').value
                zerarPlacar()
            } else {
                document.getElementById('outraPontuacao').value = pontuacaoFimDoJogo
            }
        } else {
            alert('Pontuação salva com sucesso.')
            pontuacaoFimDoJogo = document.getElementById('outraPontuacao').value
        }
    }
    salvarPreferencias()
}
/////////////////////////////////////////////////////////////

////////////////////////// Funções //////////////////////////

function verificaGanhador() {
    if (placarDireita == pontuacaoFimDoJogo) {

        vitoriaDireita++
        mensagemFinalDePartida.innerHTML = `${nomeDireita} VENCEU!`;
        painelFinalDePartida.style.display = "inline" // *** TESTE de aparição do troféu

        document.getElementById('botaoTeste').focus()
        
        for (var i = 0; i < 4; i++) {
            document.getElementsByClassName('botaoMaisMenosUm')[i].disabled = true
        }
    } else if (placarEsquerda == pontuacaoFimDoJogo) {
        // divPainelFinalDePartida entra num cavalo branco
        vitoriaEsquerda++
        mensagemFinalDePartida.innerHTML = `${nomeEsquerda} VENCEU!`;
        painelFinalDePartida.style.display = "inline" // *** TESTE de aparição do troféu

        document.getElementById('botaoTeste').focus()

        for (var i = 0; i < 5; i++) {
            document.getElementsByClassName('botaoMaisMenosUm')[i].disabled = true
        }
    } else if (placarDireita > pontuacaoFimDoJogo || placarEsquerda > pontuacaoFimDoJogo) {
        
        zerarPlacar();
    }
}

function maisUmEsquerda() {
    
    if(placarEsquerda < 10) {
        placarEsquerda++
        atualizaPlacar()
    } else if (placarEsquerda >= 10) {
        document.getElementsByClassName('odometer-digit')[0].style.fontSize = '80px'
        document.getElementsByClassName('odometer-auto-theme')[0].style.fontSize = '80px'
        console.log(document.getElementsByClassName('.odometer.odometer-auto-theme .odometer-digit .odometer-digit-spacer'))
        console.log(document.getElementsByClassName('odometer'))
        
        placarEsquerda++
        atualizaPlacar()
    }
}

function maisUmDireita() {
    if (placarDireita < 99) {
        placarDireita++
        atualizaPlacar()
    }
}

function menosUmEsquerda() {
    if (placarEsquerda > 0 || permitidoNegativo == true) {
        if (placarEsquerda > -99) {
            placarEsquerda--
        }
    }
    atualizaPlacar()
}

function menosUmDireita() {
    if (placarDireita > 0 || permitidoNegativo == true) {
        if (placarDireita > -100) {
            placarDireita--
        }
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
    salvarPreferencias()
}

function zerarPlacar() {

    if (placarDireita == pontuacaoFimDoJogo || placarEsquerda == pontuacaoFimDoJogo) {
        placarEsquerda = 0
        placarDireita = 0
        
        atualizaPlacar()
        mensagemFinalDePartida.innerHTML = ''
        painelFinalDePartida.style.display = "none"

        
        for (var i = 0; i < 5; i++) {
            document.getElementsByClassName('botaoMaisMenosUm')[i].disabled = false
        }
        
    } else if (confirmar) {
        placarEsquerda = 0
        placarDireita = 0
    
        atualizaPlacar()
        mensagemFinalDePartida.innerHTML = ''
        painelFinalDePartida.style.display = "none"

        for (var i = 0; i < 5; i++) {
            document.getElementsByClassName('botaoMaisMenosUm')[i].disabled = false
        } 
        
    } else if (confirm('Tem certeza que você quer zerar o placar?')) {
        placarEsquerda = 0
        placarDireita = 0
    
        atualizaPlacar()
        mensagemFinalDePartida.innerHTML = ''
        painelFinalDePartida.style.display="none"

        for (var i = 0; i < 5; i++) {
            document.getElementsByClassName('botaoMaisMenosUm')[i].disabled = false
        }
    }
}

function mudarNomeEsquerda() {
    nomeEsquerda = prompt("Digite seu nome:")
    if (nomeEsquerda != null && nomeEsquerda.length > 0) {
        document.getElementById("botaoNomeEsquerda").textContent = nomeEsquerda
        atualizaPlacar()
        salvarPreferencias()
    }
}

function mudarNomeDireita() {
    nomeDireita = prompt("Digite seu nome:")
    if (nomeDireita != null && nomeDireita.length > 0) {
        document.getElementById("botaoNomeDireita").textContent = nomeDireita

        salvarPreferencias()
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
        location.reload()
    }
}

var menu = document.getElementById('divMenuLateral')
var html = document.body.parentNode

html.onclick = function (event) {
    if (menuAMostra == true) {
        if (!menu.contains(event.target) && event.composedPath()[1].id != "btnMenuLateral") {
            menuAMostra = false

            // *** fechar o menu lateral
            MenuLateral.classList.toggle('toggleMenuEsquerda');
            
            Botao.style = 'display: inline;'
            var meioDaPagina = window.innerWidth/2 - 200
            return document.getElementById("divMenuLateral").style.margin = `${meioDaPagina}px;`
        } 
    }
}


function lerTeclas(evento)
{
    ////////// TECLAS DO TECLADO //////////
    var teclaEsquerda = 37
    var teclaDireita = 39
    var tecla1 = 49
    var tecla2 = 50
    var teclaW = 87
    var teclaS = 83
    var teclaCima = 38
    var teclaBaixo = 40
    
    ////////// TECLAS DO TECLADO //////////
    
    // modo W/S para esquerda e cima/baixo para direita
    if(evento.keyCode == teclaW) maisUmEsquerda()
    if(evento.keyCode == teclaS) menosUmEsquerda()
    if(evento.keyCode == teclaCima) maisUmDireita()
    if(evento.keyCode == teclaBaixo) menosUmDireita()

    // modo esquerda +1 e direita +1
    if(evento.keyCode == teclaEsquerda) maisUmEsquerda()
    if(evento.keyCode == teclaDireita) maisUmDireita()


}

document.onkeydown = lerTeclas


function salvarPreferencias()
{
    var tema = document.getElementsByTagName('body')[0].classList.value // pega o valor da classe que tá setada no body (= tema)
    //body
    //Visual1
    //Visual2
    //Aparencia3

    localStorage.setItem('TEMA', tema)
    localStorage.setItem('FIMDEJOGO', pontuacaoFimDoJogo)
    localStorage.setItem('NEGATIVO' , permitidoNegativo)

    nomeEsquerda = document.getElementById('botaoNomeEsquerda').textContent
    nomeDireita = document.getElementById('botaoNomeDireita').textContent
    localStorage.setItem('NOMEESQUERDA', nomeEsquerda)
    localStorage.setItem('NOMEDIREITA', nomeDireita)

}
