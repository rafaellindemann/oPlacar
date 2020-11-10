// import 

///////////////////// Variáveis Globais /////////////////////
var placarEsquerda = 0, placarDireita = 0, vitoriaEsquerda = 0, vitoriaDireita = 0
var menuAMostra = false
var nomeEsquerda = document.getElementById("botaoNomeEsquerda").textContent
var nomeDireita = document.getElementById("botaoNomeDireita").textContent
var permitidoNegativo = true
var pontuacaoFimDoJogo = 5

////////// TECLAS DO TECLADO //////////
var teclaEsquerda = 37
var teclaDireita = 39
var tecla1 = 49
var tecla2 = 50
////////// TECLAS DO TECLADO //////////

// console.log(window)
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
    
    console.log(MenuLateral) // *** debug

    e.preventDefault();
    if (menuAMostra == false){
    MenuLateral.classList.toggle('toggleMenuEsquerda');

    menuAMostra = true
    Botao.style = 'display: none;'
    // console.log(menuAMostra)
    } 
}

function mudarTema() {
    var temaEscolhido = 0
    tema = document.getElementsByName("tema")
    console.log(tema)

    for (i = 0; i < tema.length; i++) {
        if (tema[i].checked) {
            console.log("Escolheu: " + tema[i].value);
            temaEscolhido = i
        }
    }
    // alert(tema[temaEscolhido].value)

    if (tema[temaEscolhido] == tema1) {
        // alert("Você escolheu o primeiro tema")
        Body.setAttribute("class", "body")
        // Body.classList.toggle('Visual1');
    }
    if (tema[temaEscolhido] == tema2) {
        // alert("Você escolheu o segundo tema")
        Body.setAttribute("class", "Visual1")
        // Body.classList.toggle('Visual2');
    }
    if (tema[temaEscolhido] == tema3) {
        // alert("Você escolheu o terceiro tema")
        Body.setAttribute("class", "Visual2")
        // Body.classList.toggle('Aparencia3');
    }
    if (tema[temaEscolhido] == tema4) {
        // alert("Você escolheu o quarto tema")
        Body.setAttribute("class", "Aparencia3")
        // Body.classList.toggle('Aparencia4');
    }
    
}




// clique_Radio.onchange = function (e) {
//     var teste = document.getElementsByTagName('input')
//     for(i=0; i<teste.length; i++)
//     {
//         teste[i].style.setProperty('--border-hover', 'blue')
//     }
//     e.preventDefault()
//     Body.classList.toggle('Visual1');

//     // document.getElementsByTagName('body')[0].setAttribute("class", "Visual1");
//     // alert("é")
// }

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

function teste() {
    alert("oi")
}

function escolherPontuacao() {
    var radioEscolhido = document.getElementsByName('pontuacao')
    var confirmar = false

    for (var i = 0; i < 6; i++) {
        if (radioEscolhido[i].checked) {
            // alert('teste ' + i)
            var fimChecado = i
        }
    }




    switch (fimChecado) {
        case 0: document.getElementById('caixaPontuacao').style = 'display: none;'
            confirmar = 3
            confirmarPlacar()
            pontuacaoFimDoJogo = 3
            break
        case 1: document.getElementById('caixaPontuacao').style = 'display: none;'
            confirmar = 5
            confirmarPlacar()
            pontuacaoFimDoJogo = 5
            break
        case 2: document.getElementById('caixaPontuacao').style = 'display: none;'
            confirmar = 7
            confirmarPlacar()
            pontuacaoFimDoJogo = 7
            break
        case 3: document.getElementById('caixaPontuacao').style = 'display: none;'
            confirmar = 10
            confirmarPlacar()
            pontuacaoFimDoJogo = 10
            break
        case 4: document.getElementById('caixaPontuacao').style = 'display: none;'
            confirmar = Infinity
            confirmarPlacar()
            pontuacaoFimDoJogo = Infinity
            break
        case 5: document.getElementById('caixaPontuacao').style = 'display: block; margin-left: 7px; float: left; margin-top: 5px;'
            break
    }

    function confirmarPlacar() {
        // alert(confirmar)
        // alert(placarDireita)
        // alert(placarEsquerda)
        if (confirmar <= placarEsquerda || confirmar <= placarDireita) {
            confirmar = confirm("O placar atual está maior que a opção escolhida. Tem certeza que deseja alterar a pontuação?\n\nAo confirmar, o placar será reiniciado.")
        }
        alert(confirmar)

        if (confirmar == true) {
            alert("confirmou")
            placarEsquerda = 0
            placarDireita = 0
        }
        }
        
}

function salvarPontuacao() { 
    if (document.getElementById('outraPontuacao').value <= 0 && document.getElementById('pontoNegativo').checked) {
        alert('Por favor, digite uma pontuação válida.')
    } else {
        alert('Pontuação salva com sucesso.')
        pontuacaoFimDoJogo = document.getElementById('outraPontuacao').value
    }
    
}
/////////////////////////////////////////////////////////////

////////////////////////// Funções //////////////////////////

function verificaGanhador() {
    if (placarDireita == pontuacaoFimDoJogo) {
        // divPainelFinalDePartida entra num cavalo branco
        vitoriaDireita++
        mensagemFinalDePartida.innerHTML = `${nomeDireita} VENCEU!`;
        painelFinalDePartida.style.display = "inline" // *** TESTE de aparição do troféu
        for (var i = 0; i < 5; i++) {
            document.getElementsByClassName('botaoMaisMenosUm')[i].disabled = true
        }
    } else if (placarEsquerda == pontuacaoFimDoJogo) {
        // divPainelFinalDePartida entra num cavalo branco
        vitoriaEsquerda++
        mensagemFinalDePartida.innerHTML = `${nomeEsquerda} VENCEU!`;
        painelFinalDePartida.style.display = "inline" // *** TESTE de aparição do troféu
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
        // document.getElementsByClassName('odometer odometer-auto-theme')[0].style.fontSize = '50px'
        console.log(document.getElementsByClassName('.odometer.odometer-auto-theme .odometer-digit .odometer-digit-spacer'))
        console.log(document.getElementsByClassName('odometer'))
        // document.getElementsByClassName('odometer-theme-train-station').style.fontSize = '80px'
        
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
}

function zerarPlacar() {

    // console.log(painelFinalDePartida.) // *** teste pra achar o z
    if (placarDireita == pontuacaoFimDoJogo || placarEsquerda == pontuacaoFimDoJogo) {
        placarEsquerda = 0
        placarDireita = 0
        
        atualizaPlacar()
        mensagemFinalDePartida.innerHTML = ''
        painelFinalDePartida.style.display="none"

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
        location.reload()
    }
}

function avisaVencedor(vencedor) {
    // criar a div LeoSilva com a festinha do vencedor e o resultado
    // zerar a partida?
}

// function abrirMenu() {

// }

// -- TESTE PARA ESCONDER O MENU CLICANDO FORA --


// console.log(menuAMostra)
// 
var menu = document.getElementById('divMenuLateral')
var html = document.body.parentNode

html.onclick = function (event) {
    // event.preventDefault();
//     console.log("o nosso composed")
// console.log(event.composedPath())
// console.log("o nosso path")
// console.log(event.path)
//////////////////////////////////////////
// if (event.path) {
//     if (event.composedPath) {
//       console.log("Supports `path` and `composedPath`");
//     } else {
//       console.log("Supports `path` but not `composedPath`");
//     }
//   } else if (event.composedPath) {
//     console.log("Supports `composedPath` (but not `path`)");
//   } else {
//     console.log("Supports neither `path` nor `composedPath`");
//   }

//////////////////////////////////////////
     console.log(event)
    // console.log(event.path[1].id == "btnMenuLateral")
    // if(event.path[1].id == "btnMenuLateral") alert('To aqui, porraaaaaaa')
    if (menuAMostra == true) {
        // event.preventDefault();
        if (!menu.contains(event.target) && event.composedPath()[1].id != "btnMenuLateral") {
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

function lerTeclas(evento)
{
    alert(evento.keyCode)
    if(evento.keyCode == tecla1 || evento.keyCode == teclaEsquerda) maisUmEsquerda()
    if(evento.keyCode == tecla2 || evento.keyCode == teclaDireita) maisUmDireita()

}

document.onkeydown = lerTeclas



// onsole.log("o nosso path")
// console.log(event.path)
//////////////////////////////////////////
// if (event.path) {
//     if (event.composedPath) {
//       console.log("Supports `path` and `composedPath`");
//     } else {
//       console.log("Supports `path` but not `composedPath`");
//     }
//   } else if (event.composedPath) {
//     console.log("Supports `composedPath` (but not `path`)");
//   } else {
//     console.log("Supports neither `path` nor `composedPath`");
//   }

//////////////////////////////////////////
     console.log(event)
    // console.log(event.path[1].id == "btnMenuLateral")
    // if(event.path[1].id == "btnMenuLateral") alert('To aqui, porraaaaaaa')
    if (menuAMostra == true) {
        // event.preventDefault();
        if (!menu.contains(event.target) && event.composedPath()[1].id != "btnMenuLateral") {
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
// }
// }

function lerTeclas(evento)
{
    alert(evento.keyCode)
    if(evento.keyCode == tecla1 || evento.keyCode == teclaEsquerda) maisUmEsquerda()
    if(evento.keyCode == tecla2 || evento.keyCode == teclaDireita) maisUmDireita()

}

document.onkeydown = lerTeclas



// onsole.log("o nosso path")
// console.log(event.path)
//////////////////////////////////////////
// if (event.path) {
//     if (event.composedPath) {
//       console.log("Supports `path` and `composedPath`");
//     } else {
//       console.log("Supports `path` but not `composedPath`");
//     }
//   } else if (event.composedPath) {
//     console.log("Supports `composedPath` (but not `path`)");
//   } else {
//     console.log("Supports neither `path` nor `composedPath`");
//   }

//////////////////////////////////////////
     console.log(event)
    // console.log(event.path[1].id == "btnMenuLateral")
    // if(event.path[1].id == "btnMenuLateral") alert('To aqui, porraaaaaaa')
    if (menuAMostra == true) {
        // event.preventDefault();
        if (!menu.contains(event.target) && event.composedPath()[1].id != "btnMenuLateral") {
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


function lerTeclas(evento)
{
    alert(evento.keyCode)
    if(evento.keyCode == tecla1 || evento.keyCode == teclaEsquerda) maisUmEsquerda()
    if(evento.keyCode == tecla2 || evento.keyCode == teclaDireita) maisUmDireita()

}

document.onkeydown = lerTeclas



// onsole.log("o nosso path")
// console.log(event.path)
//////////////////////////////////////////
// if (event.path) {
//     if (event.composedPath) {
//       console.log("Supports `path` and `composedPath`");
//     } else {
//       console.log("Supports `path` but not `composedPath`");
//     }
//   } else if (event.composedPath) {
//     console.log("Supports `composedPath` (but not `path`)");
//   } else {
//     console.log("Supports neither `path` nor `composedPath`");
//   }

//////////////////////////////////////////
     console.log(event)
    // console.log(event.path[1].id == "btnMenuLateral")
    // if(event.path[1].id == "btnMenuLateral") alert('To aqui, porraaaaaaa')
    if (menuAMostra == true) {
        // event.preventDefault();
        if (!menu.contains(event.target) && event.composedPath()[1].id != "btnMenuLateral") {
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


function lerTeclas(evento)
{
    alert(evento.keyCode)
    if(evento.keyCode == tecla1 || evento.keyCode == teclaEsquerda) maisUmEsquerda()
    if(evento.keyCode == tecla2 || evento.keyCode == teclaDireita) maisUmDireita()

}

document.onkeydown = lerTeclas



// onsole.log("o nosso path")
// console.log(event.path)
//////////////////////////////////////////
// if (event.path) {
//     if (event.composedPath) {
//       console.log("Supports `path` and `composedPath`");
//     } else {
//       console.log("Supports `path` but not `composedPath`");
//     }
//   } else if (event.composedPath) {
//     console.log("Supports `composedPath` (but not `path`)");
//   } else {
//     console.log("Supports neither `path` nor `composedPath`");
//   }

//////////////////////////////////////////
     console.log(event)
    // console.log(event.path[1].id == "btnMenuLateral")
    // if(event.path[1].id == "btnMenuLateral") alert('To aqui, porraaaaaaa')
    if (menuAMostra == true) {
        // event.preventDefault();
        if (!menu.contains(event.target) && event.composedPath()[1].id != "btnMenuLateral") {
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


function lerTeclas(evento)
{
    alert(evento.keyCode)
    if(evento.keyCode == tecla1 || evento.keyCode == teclaEsquerda) maisUmEsquerda()
    if(evento.keyCode == tecla2 || evento.keyCode == teclaDireita) maisUmDireita()

}

document.onkeydown = lerTeclas



// onsole.log("o nosso path")
// console.log(event.path)
//////////////////////////////////////////
// if (event.path) {
//     if (event.composedPath) {
//       console.log("Supports `path` and `composedPath`");
//     } else {
//       console.log("Supports `path` but not `composedPath`");
//     }
//   } else if (event.composedPath) {
//     console.log("Supports `composedPath` (but not `path`)");
//   } else {
//     console.log("Supports neither `path` nor `composedPath`");
//   }

//////////////////////////////////////////
     console.log(event)
    // console.log(event.path[1].id == "btnMenuLateral")
    // if(event.path[1].id == "btnMenuLateral") alert('To aqui, porraaaaaaa')
    if (menuAMostra == true) {
        // event.preventDefault();
        if (!menu.contains(event.target) && event.composedPath()[1].id != "btnMenuLateral") {
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


function lerTeclas(evento)
{
    alert(evento.keyCode)
    if(evento.keyCode == tecla1 || evento.keyCode == teclaEsquerda) maisUmEsquerda()
    if(evento.keyCode == tecla2 || evento.keyCode == teclaDireita) maisUmDireita()

}

document.onkeydown = lerTeclas



// onsole.log("o nosso path")
// console.log(event.path)
//////////////////////////////////////////
// if (event.path) {
//     if (event.composedPath) {
//       console.log("Supports `path` and `composedPath`");
//     } else {
//       console.log("Supports `path` but not `composedPath`");
//     }
//   } else if (event.composedPath) {
//     console.log("Supports `composedPath` (but not `path`)");
//   } else {
//     console.log("Supports neither `path` nor `composedPath`");
//   }

//////////////////////////////////////////
     console.log(event)
    // console.log(event.path[1].id == "btnMenuLateral")
    // if(event.path[1].id == "btnMenuLateral") alert('To aqui, porraaaaaaa')
    if (menuAMostra == true) {
        // event.preventDefault();
        if (!menu.contains(event.target) && event.composedPath()[1].id != "btnMenuLateral") {
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


function lerTeclas(evento)
{
    alert(evento.keyCode)
    if(evento.keyCode == tecla1 || evento.keyCode == teclaEsquerda) maisUmEsquerda()
    if(evento.keyCode == tecla2 || evento.keyCode == teclaDireita) maisUmDireita()

}

document.onkeydown = lerTeclas



// onsole.log("o nosso path")
// console.log(event.path)
//////////////////////////////////////////
// if (event.path) {
//     if (event.composedPath) {
//       console.log("Supports `path` and `composedPath`");
//     } else {
//       console.log("Supports `path` but not `composedPath`");
//     }
//   } else if (event.composedPath) {
//     console.log("Supports `composedPath` (but not `path`)");
//   } else {
//     console.log("Supports neither `path` nor `composedPath`");
//   }

//////////////////////////////////////////
     console.log(event)
    // console.log(event.path[1].id == "btnMenuLateral")
    // if(event.path[1].id == "btnMenuLateral") alert('To aqui, porraaaaaaa')
    if (menuAMostra == true) {
        // event.preventDefault();
        if (!menu.contains(event.target) && event.composedPath()[1].id != "btnMenuLateral") {
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


function lerTeclas(evento)
{
    alert(evento.keyCode)
    if(evento.keyCode == tecla1 || evento.keyCode == teclaEsquerda) maisUmEsquerda()
    if(evento.keyCode == tecla2 || evento.keyCode == teclaDireita) maisUmDireita()

}

document.onkeydown = lerTeclas



// onsole.log("o nosso path")
// console.log(event.path)
//////////////////////////////////////////
// if (event.path) {
//     if (event.composedPath) {
//       console.log("Supports `path` and `composedPath`");
//     } else {
//       console.log("Supports `path` but not `composedPath`");
//     }
//   } else if (event.composedPath) {
//     console.log("Supports `composedPath` (but not `path`)");
//   } else {
//     console.log("Supports neither `path` nor `composedPath`");
//   }

//////////////////////////////////////////
     console.log(event)
    // console.log(event.path[1].id == "btnMenuLateral")
    // if(event.path[1].id == "btnMenuLateral") alert('To aqui, porraaaaaaa')
    if (menuAMostra == true) {
        // event.preventDefault();
        if (!menu.contains(event.target) && event.composedPath()[1].id != "btnMenuLateral") {
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


function lerTeclas(evento)
{
    alert(evento.keyCode)
    if(evento.keyCode == tecla1 || evento.keyCode == teclaEsquerda) maisUmEsquerda()
    if(evento.keyCode == tecla2 || evento.keyCode == teclaDireita) maisUmDireita()

}

document.onkeydown = lerTeclas



// onsole.log("o nosso path")
// console.log(event.path)
//////////////////////////////////////////
// if (event.path) {
//     if (event.composedPath) {
//       console.log("Supports `path` and `composedPath`");
//     } else {
//       console.log("Supports `path` but not `composedPath`");
//     }
//   } else if (event.composedPath) {
//     console.log("Supports `composedPath` (but not `path`)");
//   } else {
//     console.log("Supports neither `path` nor `composedPath`");
//   }

//////////////////////////////////////////
     console.log(event)
    // console.log(event.path[1].id == "btnMenuLateral")
    // if(event.path[1].id == "btnMenuLateral") alert('To aqui, porraaaaaaa')
    if (menuAMostra == true) {
        // event.preventDefault();
        if (!menu.contains(event.target) && event.composedPath()[1].id != "btnMenuLateral") {
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


function lerTeclas(evento)
{
    alert(evento.keyCode)
    if(evento.keyCode == tecla1 || evento.keyCode == teclaEsquerda) maisUmEsquerda()
    if(evento.keyCode == tecla2 || evento.keyCode == teclaDireita) maisUmDireita()

}

document.onkeydown = lerTeclas



// onsole.log("o nosso path")
// console.log(event.path)
//////////////////////////////////////////
// if (event.path) {
//     if (event.composedPath) {
//       console.log("Supports `path` and `composedPath`");
//     } else {
//       console.log("Supports `path` but not `composedPath`");
//     }
//   } else if (event.composedPath) {
//     console.log("Supports `composedPath` (but not `path`)");
//   } else {
//     console.log("Supports neither `path` nor `composedPath`");
//   }

//////////////////////////////////////////
     console.log(event)
    // console.log(event.path[1].id == "btnMenuLateral")
    // if(event.path[1].id == "btnMenuLateral") alert('To aqui, porraaaaaaa')
    if (menuAMostra == true) {
        // event.preventDefault();
        if (!menu.contains(event.target) && event.composedPath()[1].id != "btnMenuLateral") {
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


function lerTeclas(evento)
{
    alert(evento.keyCode)
    if(evento.keyCode == tecla1 || evento.keyCode == teclaEsquerda) maisUmEsquerda()
    if(evento.keyCode == tecla2 || evento.keyCode == teclaDireita) maisUmDireita()

}

document.onkeydown = lerTeclas



// onsole.log("o nosso path")
// console.log(event.path)
//////////////////////////////////////////
// if (event.path) {
//     if (event.composedPath) {
//       console.log("Supports `path` and `composedPath`");
//     } else {
//       console.log("Supports `path` but not `composedPath`");
//     }
//   } else if (event.composedPath) {
//     console.log("Supports `composedPath` (but not `path`)");
//   } else {
//     console.log("Supports neither `path` nor `composedPath`");
//   }

//////////////////////////////////////////
     console.log(event)
    // console.log(event.path[1].id == "btnMenuLateral")
    // if(event.path[1].id == "btnMenuLateral") alert('To aqui, porraaaaaaa')
    if (menuAMostra == true) {
        // event.preventDefault();
        if (!menu.contains(event.target) && event.composedPath()[1].id != "btnMenuLateral") {
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


function lerTeclas(evento)
{
    alert(evento.keyCode)
    if(evento.keyCode == tecla1 || evento.keyCode == teclaEsquerda) maisUmEsquerda()
    if(evento.keyCode == tecla2 || evento.keyCode == teclaDireita) maisUmDireita()

}

document.onkeydown = lerTeclas



// onsole.log("o nosso path")
// console.log(event.path)
//////////////////////////////////////////
// if (event.path) {
//     if (event.composedPath) {
//       console.log("Supports `path` and `composedPath`");
//     } else {
//       console.log("Supports `path` but not `composedPath`");
//     }
//   } else if (event.composedPath) {
//     console.log("Supports `composedPath` (but not `path`)");
//   } else {
//     console.log("Supports neither `path` nor `composedPath`");
//   }

//////////////////////////////////////////
     console.log(event)
    // console.log(event.path[1].id == "btnMenuLateral")
    // if(event.path[1].id == "btnMenuLateral") alert('To aqui, porraaaaaaa')
    if (menuAMostra == true) {
        // event.preventDefault();
        if (!menu.contains(event.target) && event.composedPath()[1].id != "btnMenuLateral") {
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

function lerTeclas(evento)
{
    alert(evento.keyCode)
    if(evento.keyCode == tecla1 || evento.keyCode == teclaEsquerda) maisUmEsquerda()
    if(evento.keyCode == tecla2 || evento.keyCode == teclaDireita) maisUmDireita()

}

document.onkeydown = lerTeclas



// onsole.log("o nosso path")
// console.log(event.path)
//////////////////////////////////////////
// if (event.path) {
//     if (event.composedPath) {
//       console.log("Supports `path` and `composedPath`");
//     } else {
//       console.log("Supports `path` but not `composedPath`");
//     }
//   } else if (event.composedPath) {
//     console.log("Supports `composedPath` (but not `path`)");
//   } else {
//     console.log("Supports neither `path` nor `composedPath`");
//   }

//////////////////////////////////////////
     console.log(event)
    // console.log(event.path[1].id == "btnMenuLateral")
    // if(event.path[1].id == "btnMenuLateral") alert('To aqui, porraaaaaaa')
    if (menuAMostra == true) {
        // event.preventDefault();
        if (!menu.contains(event.target) && event.composedPath()[1].id != "btnMenuLateral") {
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

function lerTeclas(evento)
{
    alert(evento.keyCode)
    if(evento.keyCode == tecla1 || evento.keyCode == teclaEsquerda) maisUmEsquerda()
    if(evento.keyCode == tecla2 || evento.keyCode == teclaDireita) maisUmDireita()

}

document.onkeydown = lerTeclas



// onsole.log("o nosso path")
// console.log(event.path)
//////////////////////////////////////////
// if (event.path) {
//     if (event.composedPath) {
//       console.log("Supports `path` and `composedPath`");
//     } else {
//       console.log("Supports `path` but not `composedPath`");
//     }
//   } else if (event.composedPath) {
//     console.log("Supports `composedPath` (but not `path`)");
//   } else {
//     console.log("Supports neither `path` nor `composedPath`");
//   }

//////////////////////////////////////////
     console.log(event)
    // console.log(event.path[1].id == "btnMenuLateral")
    // if(event.path[1].id == "btnMenuLateral") alert('To aqui, porraaaaaaa')
    if (menuAMostra == true) {
        // event.preventDefault();
        if (!menu.contains(event.target) && event.composedPath()[1].id != "btnMenuLateral") {
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

function lerTeclas(evento)
{
    alert(evento.keyCode)
    if(evento.keyCode == tecla1 || evento.keyCode == teclaEsquerda) maisUmEsquerda()
    if(evento.keyCode == tecla2 || evento.keyCode == teclaDireita) maisUmDireita()

}

document.onkeydown = lerTeclas



// onsole.log("o nosso path")
// console.log(event.path)
//////////////////////////////////////////
// if (event.path) {
//     if (event.composedPath) {
//       console.log("Supports `path` and `composedPath`");
//     } else {
//       console.log("Supports `path` but not `composedPath`");
//     }
//   } else if (event.composedPath) {
//     console.log("Supports `composedPath` (but not `path`)");
//   } else {
//     console.log("Supports neither `path` nor `composedPath`");
//   }

//////////////////////////////////////////
     console.log(event)
    // console.log(event.path[1].id == "btnMenuLateral")
    // if(event.path[1].id == "btnMenuLateral") alert('To aqui, porraaaaaaa')
    if (menuAMostra == true) {
        // event.preventDefault();
        if (!menu.contains(event.target) && event.composedPath()[1].id != "btnMenuLateral") {
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

function lerTeclas(evento)
{
    alert(evento.keyCode)
    if(evento.keyCode == tecla1 || evento.keyCode == teclaEsquerda) maisUmEsquerda()
    if(evento.keyCode == tecla2 || evento.keyCode == teclaDireita) maisUmDireita()

}

document.onkeydown = lerTeclas



// onsole.log("o nosso path")
// console.log(event.path)
//////////////////////////////////////////
// if (event.path) {
//     if (event.composedPath) {
//       console.log("Supports `path` and `composedPath`");
//     } else {
//       console.log("Supports `path` but not `composedPath`");
//     }
//   } else if (event.composedPath) {
//     console.log("Supports `composedPath` (but not `path`)");
//   } else {
//     console.log("Supports neither `path` nor `composedPath`");
//   }

//////////////////////////////////////////
     console.log(event)
    // console.log(event.path[1].id == "btnMenuLateral")
    // if(event.path[1].id == "btnMenuLateral") alert('To aqui, porraaaaaaa')
    if (menuAMostra == true) {
        // event.preventDefault();
        if (!menu.contains(event.target) && event.composedPath()[1].id != "btnMenuLateral") {
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

function lerTeclas(evento)
{
    alert(evento.keyCode)
    if(evento.keyCode == tecla1 || evento.keyCode == teclaEsquerda) maisUmEsquerda()
    if(evento.keyCode == tecla2 || evento.keyCode == teclaDireita) maisUmDireita()

}

document.onkeydown = lerTeclas



// onsole.log("o nosso path")
// console.log(event.path)
//////////////////////////////////////////
// if (event.path) {
//     if (event.composedPath) {
//       console.log("Supports `path` and `composedPath`");
//     } else {
//       console.log("Supports `path` but not `composedPath`");
//     }
//   } else if (event.composedPath) {
//     console.log("Supports `composedPath` (but not `path`)");
//   } else {
//     console.log("Supports neither `path` nor `composedPath`");
//   }

//////////////////////////////////////////
     console.log(event)
    // console.log(event.path[1].id == "btnMenuLateral")
    // if(event.path[1].id == "btnMenuLateral") alert('To aqui, porraaaaaaa')
    if (menuAMostra == true) {
        // event.preventDefault();
        if (!menu.contains(event.target) && event.composedPath()[1].id != "btnMenuLateral") {
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

function lerTeclas(evento)
{
    alert(evento.keyCode)
    if(evento.keyCode == tecla1 || evento.keyCode == teclaEsquerda) maisUmEsquerda()
    if(evento.keyCode == tecla2 || evento.keyCode == teclaDireita) maisUmDireita()

}

document.onkeydown = lerTeclas



// onsole.log("o nosso path")
// console.log(event.path)
//////////////////////////////////////////
// if (event.path) {
//     if (event.composedPath) {
//       console.log("Supports `path` and `composedPath`");
//     } else {
//       console.log("Supports `path` but not `composedPath`");
//     }
//   } else if (event.composedPath) {
//     console.log("Supports `composedPath` (but not `path`)");
//   } else {
//     console.log("Supports neither `path` nor `composedPath`");
//   }

//////////////////////////////////////////
     console.log(event)
    // console.log(event.path[1].id == "btnMenuLateral")
    // if(event.path[1].id == "btnMenuLateral") alert('To aqui, porraaaaaaa')
    if (menuAMostra == true) {
        // event.preventDefault();
        if (!menu.contains(event.target) && event.composedPath()[1].id != "btnMenuLateral") {
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

function lerTeclas(evento)
{
    alert(evento.keyCode)
    if(evento.keyCode == tecla1 || evento.keyCode == teclaEsquerda) maisUmEsquerda()
    if(evento.keyCode == tecla2 || evento.keyCode == teclaDireita) maisUmDireita()

}

document.onkeydown = lerTeclas



// onsole.log("o nosso path")
// console.log(event.path)
//////////////////////////////////////////
// if (event.path) {
//     if (event.composedPath) {
//       console.log("Supports `path` and `composedPath`");
//     } else {
//       console.log("Supports `path` but not `composedPath`");
//     }
//   } else if (event.composedPath) {
//     console.log("Supports `composedPath` (but not `path`)");
//   } else {
//     console.log("Supports neither `path` nor `composedPath`");
//   }

//////////////////////////////////////////
     console.log(event)
    // console.log(event.path[1].id == "btnMenuLateral")
    // if(event.path[1].id == "btnMenuLateral") alert('To aqui, porraaaaaaa')
    if (menuAMostra == true) {
        // event.preventDefault();
        if (!menu.contains(event.target) && event.composedPath()[1].id != "btnMenuLateral") {
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

function lerTeclas(evento)
{
    alert(evento.keyCode)
    if(evento.keyCode == tecla1 || evento.keyCode == teclaEsquerda) maisUmEsquerda()
    if(evento.keyCode == tecla2 || evento.keyCode == teclaDireita) maisUmDireita()

}

document.onkeydown = lerTeclas



// onsole.log("o nosso path")
// console.log(event.path)
//////////////////////////////////////////
// if (event.path) {
//     if (event.composedPath) {
//       console.log("Supports `path` and `composedPath`");
//     } else {
//       console.log("Supports `path` but not `composedPath`");
//     }
//   } else if (event.composedPath) {
//     console.log("Supports `composedPath` (but not `path`)");
//   } else {
//     console.log("Supports neither `path` nor `composedPath`");
//   }

//////////////////////////////////////////
     console.log(event)
    // console.log(event.path[1].id == "btnMenuLateral")
    // if(event.path[1].id == "btnMenuLateral") alert('To aqui, porraaaaaaa')
    if (menuAMostra == true) {
        // event.preventDefault();
        if (!menu.contains(event.target) && event.composedPath()[1].id != "btnMenuLateral") {
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

function lerTeclas(evento)
{
    alert(evento.keyCode)
    if(evento.keyCode == tecla1 || evento.keyCode == teclaEsquerda) maisUmEsquerda()
    if(evento.keyCode == tecla2 || evento.keyCode == teclaDireita) maisUmDireita()

}

document.onkeydown = lerTeclas



// onsole.log("o nosso path")
// console.log(event.path)
//////////////////////////////////////////
// if (event.path) {
//     if (event.composedPath) {
//       console.log("Supports `path` and `composedPath`");
//     } else {
//       console.log("Supports `path` but not `composedPath`");
//     }
//   } else if (event.composedPath) {
//     console.log("Supports `composedPath` (but not `path`)");
//   } else {
//     console.log("Supports neither `path` nor `composedPath`");
//   }

//////////////////////////////////////////
     console.log(event)
    // console.log(event.path[1].id == "btnMenuLateral")
    // if(event.path[1].id == "btnMenuLateral") alert('To aqui, porraaaaaaa')
    if (menuAMostra == true) {
        // event.preventDefault();
        if (!menu.contains(event.target) && event.composedPath()[1].id != "btnMenuLateral") {
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

function lerTeclas(evento)
{
    alert(evento.keyCode)
    if(evento.keyCode == tecla1 || evento.keyCode == teclaEsquerda) maisUmEsquerda()
    if(evento.keyCode == tecla2 || evento.keyCode == teclaDireita) maisUmDireita()

}

document.onkeydown = lerTeclas



// onsole.log("o nosso path")
// console.log(event.path)
//////////////////////////////////////////
// if (event.path) {
//     if (event.composedPath) {
//       console.log("Supports `path` and `composedPath`");
//     } else {
//       console.log("Supports `path` but not `composedPath`");
//     }
//   } else if (event.composedPath) {
//     console.log("Supports `composedPath` (but not `path`)");
//   } else {
//     console.log("Supports neither `path` nor `composedPath`");
//   }

//////////////////////////////////////////
     console.log(event)
    // console.log(event.path[1].id == "btnMenuLateral")
    // if(event.path[1].id == "btnMenuLateral") alert('To aqui, porraaaaaaa')
    if (menuAMostra == true) {
        // event.preventDefault();
        if (!menu.contains(event.target) && event.composedPath()[1].id != "btnMenuLateral") {
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

function lerTeclas(evento)
{
    alert(evento.keyCode)
    if(evento.keyCode == tecla1 || evento.keyCode == teclaEsquerda) maisUmEsquerda()
    if(evento.keyCode == tecla2 || evento.keyCode == teclaDireita) maisUmDireita()

}

document.onkeydown = lerTeclas



// onsole.log("o nosso path")
// console.log(event.path)
//////////////////////////////////////////
// if (event.path) {
//     if (event.composedPath) {
//       console.log("Supports `path` and `composedPath`");
//     } else {
//       console.log("Supports `path` but not `composedPath`");
//     }
//   } else if (event.composedPath) {
//     console.log("Supports `composedPath` (but not `path`)");
//   } else {
//     console.log("Supports neither `path` nor `composedPath`");
//   }

//////////////////////////////////////////
     console.log(event)
    // console.log(event.path[1].id == "btnMenuLateral")
    // if(event.path[1].id == "btnMenuLateral") alert('To aqui, porraaaaaaa')
    if (menuAMostra == true) {
        // event.preventDefault();
        if (!menu.contains(event.target) && event.composedPath()[1].id != "btnMenuLateral") {
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

function lerTeclas(evento)
{
    alert(evento.keyCode)
    if(evento.keyCode == tecla1 || evento.keyCode == teclaEsquerda) maisUmEsquerda()
    if(evento.keyCode == tecla2 || evento.keyCode == teclaDireita) maisUmDireita()

}

document.onkeydown = lerTeclas



// 