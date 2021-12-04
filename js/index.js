
/**=======================================================================================
 * JS MENU TOPO - FAZ COM QUE O SCROLL DE ROLAGEM OCORRA SUAVEMENTE ATÉ O BOX DESEJADO
 *=======================================================================================*/

function ativaScrollSuave(selector) {

    $(selector).click(function(event) {
        
        event.preventDefault();
        var target = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(target).offset().top - 90
        }, 1000)
    });
}

ativaScrollSuave('a[href*=topo]');
ativaScrollSuave('a[href*=boxSolucoes]');
ativaScrollSuave('a[href*=boxInovamaps]');
ativaScrollSuave('a[href*=boxSobre]');
ativaScrollSuave('a[href*=boxContato]');
ativaScrollSuave('a[href*=boxSolucoes]');
ativaScrollSuave('a[href*=boxSegmentos]');


/**=======================================================================================
 * JS NAV DO SITE - FAZ COM QUE O FUNDO E A LOGO SEJA ALTERADA SE TORNANDO FIXO
 *=======================================================================================*/

$(document).ready(function(){
    var scroll_start = 0;
    var containerConteudo = $("#containerConteudo");
    var offset = containerConteudo.offset();

    $(document).scroll(function(){
        scroll_start = $(this).scrollTop();

        if(scroll_start > offset.top) {
            $('#nav').css('position', 'fixed');
            $("#nav").css("backgroundColor", "#fff");
            $(".logo").css("display", "none");
            $(".logo2").css("display", "flex");
            $(".logo2").css("float", "left");
            $(".btnMenuBar i").css("color", "#3791ff");
            $(".menuTopo a").css("color", "#443d3d");
        } else {
            $("#nav").css("backgroundColor", "transparent");
            $(".logo2").css("display", "none");
            $(".logo").css("display", "block");
            $(".btnMenuBar i").css("color", "#fff");
            $(".menuTopo a").css("color", "#fff");
        }
    });
});


/**=======================================================================================
 * JS BOX SOLUÇÕES - MUDA AS TELAS DE ACORDO COM O BOTÃO SELECIONADO
 *=======================================================================================*/

 const alvo = window.document.querySelectorAll('[data-anime-solucoes');
 const menu = window.document.querySelectorAll('[data-menu="menuSolucoes"]');


// Captura dos botões
//const btnMineracao = window.document.querySelector('#btnMineracao');
const btnMineracao = window.document.getElementById('btnMineracao');
const btnLogistica = window.document.querySelector('#btnLogistica');
const btnNegocio = window.document.querySelector('#btnNegocio');
const btnGestao = window.document.querySelector('#btnGestao');

// Captura das telas;
const telaMineracao = window.document.querySelector('#telaMineracao');
const telaLogistica = window.document.querySelector('#telaLogistica');
const telaNegocio = window.document.querySelector('#telaNegocio');
const telaGestao = window.document.querySelector('#telaGestao');

// Comando para iniciar mostrando a primeira tela;
telaMineracao.classList.add('mostrar');
btnStyle(btnMineracao, btnLogistica, btnNegocio, btnGestao);



/* PRIMEIRO COMANDO!!!!!=======================

btnMineracao.addEventListener('click', function(){
    telaMineracao.classList.add('mostrar');

    btnStyle(btnMineracao);

    btnNoStyle(btnLogistica);
    btnNoStyle(btnNegocio);
    btnNoStyle(btnGestao);

    telaLogistica.classList.remove('mostrar');
    telaNegocio.classList.remove('mostrar');
    telaGestao.classList.remove('mostrar');
});

*/

// Controle dos eventos;

btnMineracao.addEventListener('click', function(){
    alvo.forEach(function(elementos){

        if(elementos === telaMineracao){

            elementos.classList.add('mostrar');
            btnStyle(btnMineracao, btnLogistica, btnNegocio, btnGestao);

        } else {

            elementos.classList.remove('mostrar');
        }
    });
});


btnLogistica.addEventListener('click', function(){
    
    alvo.forEach(function(elementos){

        if(elementos === telaLogistica){

            elementos.classList.add('mostrar');
            btnStyle(btnLogistica, btnMineracao, btnNegocio, btnGestao);

        } else {

            elementos.classList.remove('mostrar');
        }
    });

});

btnNegocio.addEventListener('click', function(){
    
    alvo.forEach(function(elementos){

        if(elementos === telaNegocio){

            elementos.classList.add('mostrar');
            btnStyle(btnNegocio, btnLogistica, btnMineracao, btnGestao);

        } else {

            elementos.classList.remove('mostrar');
        }
    });

});

btnGestao.addEventListener('click', function(){
    
    alvo.forEach(function(elementos){

        if(elementos === telaGestao){

            elementos.classList.add('mostrar');
            btnStyle(btnGestao, btnLogistica, btnMineracao, btnNegocio);

        } else {

            elementos.classList.remove('mostrar');
        }
    });

});


// Função para dar Estilo aos botões
function btnStyle(btn1, btn2, btn3, btn4){

    btn1.style.backgroundImage = 'linear-gradient(to right, #00cbe4, #00ecff)';
    btn1.style.color = 'white';

    btn2.style.backgroundImage = 'linear-gradient(to right, #fff, #fff)';
    btn2.style.color = '#443d3d';

    btn3.style.backgroundImage = 'linear-gradient(to right, #fff, #fff)';
    btn3.style.color = '#443d3d';

    btn4.style.backgroundImage = 'linear-gradient(to right, #fff, #fff)';
    btn4.style.color = '#443d3d';

}


/**=======================================================================================
 * JS BOX SEGMENTOS - MUDA AS TELAS DE ACORDO COM O BOTÃO SELECIONADO
 *=======================================================================================*/

const telasSegmentos = window.document.querySelectorAll('[data-anime-segmentos]');
const btnSegmentos = window.document.querySelectorAll('[data-menu="menuSegmentos"]');

// console.log(telasSegmentos);
// console.log(btnSegmentos);

// Captura das telas;
const telaSegMineracao = window.document.querySelector('#segmentoMineracao');
const telaSegAmbiente = window.document.querySelector('#segmentoAmbiente');
const telaSegEnergia = window.document.querySelector('#segmentoEnergia');
const telaSegConstrucao = window.document.querySelector('#segmentoConstrucao');
const telaSegAgro = window.document.querySelector('#segmentoAgro');
const telaSegTransporte = window.document.querySelector('#segmentoTransporte');
const telaSegGas = window.document.querySelector('#segmentoGas');
const telaSegGoverno = window.document.querySelector('#segmentoGoverno');

// Captura dos botões;
const btnSegMineracao = window.document.querySelector('#menuMineracao');
const btnSegAmbiente = window.document.querySelector('#menuAmbiente');
const btnSegEnergia = window.document.querySelector('#menuEnergia');
const btnSegConstrucao = window.document.querySelector('#menuConstrucao');
const btnSegAgro = window.document.querySelector('#menuAgro');
const btnSegTransporte = window.document.querySelector('#menuTransporte');
const btnSegGas = window.document.querySelector('#menuGas');
const btnSegGoverno = window.document.querySelector('#menuGoverno');

// Comando para iniciar mostrando a primeira tela;
telaSegMineracao.classList.add('mostrar');
btnEstilo(btnSegMineracao);

// Controle dos eventos;
btnSegMineracao.addEventListener('click', function(){
    mostrarTela(telasSegmentos, telaSegMineracao);

    btnEstilo(btnSegMineracao);
});

btnSegAmbiente.addEventListener('click', function(){
    mostrarTela(telasSegmentos, telaSegAmbiente);

    btnEstilo(btnSegAmbiente);
});

btnSegEnergia.addEventListener('click', function(){
    mostrarTela(telasSegmentos, telaSegEnergia);

    btnEstilo( btnSegEnergia);
});

btnSegConstrucao.addEventListener('click', function(){
    mostrarTela(telasSegmentos, telaSegConstrucao);

    btnEstilo(btnSegConstrucao);
});

btnSegAgro.addEventListener('click', function(){
    mostrarTela(telasSegmentos, telaSegAgro);

    btnEstilo(btnSegAgro);
});

btnSegTransporte.addEventListener('click', function(){
    mostrarTela(telasSegmentos, telaSegTransporte);

    btnEstilo(btnSegTransporte);
});

btnSegGas.addEventListener('click', function(){
    mostrarTela(telasSegmentos, telaSegGas);

    btnEstilo(btnSegGas);
});

btnSegGoverno.addEventListener('click', function(){
    mostrarTela(telasSegmentos, telaSegGoverno);

    btnEstilo(btnSegGoverno);
});

// Funcão que mostra na tela;
function mostrarTela(objTela, tela){
    objTela.forEach(function(elementos){
        if(elementos == tela){
            elementos.classList.add('mostrar');
        } else {
            elementos.classList.remove('mostrar');
        }
    });
}

// Função para dar estilo no botão;
function btnEstilo(selecao){
 
    btnSegmentos.forEach(function(botoes){

        if(selecao === botoes){
            botoes.classList.add('selecao');
        } else {
            botoes.classList.remove('selecao');
        }

    });

}


/**=======================================================================================
 * JS BOTÃO DO FORMULÁRIO - VERIFICA SE OS CAMPOS FORAM PREENCHIDOS
 *=======================================================================================*/

// Captura do botão;
const btnForm = window.document.querySelector('#btnForm');

// Camptura dos campos;
const campoNome = window.document.querySelector('#nome');
const campoEmail = window.document.querySelector('#email');
const campoAssunto = window.document.querySelector('#assunto');
const campoMsg = window.document.querySelector('#msg');

// Evento de click no botão formulário;
btnForm.addEventListener('click', function(){

    var nome = campoNome.value;
    var email = campoEmail.value;
    var assunto = campoAssunto.value;
    var msg = campoMsg.value;

    if(nome && email && msg){
        alert('Mensagem Enviada com Sucesso!');
        limpaTela();
    } else {
        alert('Por favor, preencha todos os campos!')
    }
    console.log(nome, email, assunto, msg);
});

// Função para limpar a tela do formulário;
function limpaTela(){
    campoNome.value = null;
    campoEmail.value = null;
    campoMsg.value = null;
}


/**=======================================================================================
 * JS CONTROLE DAS INSCRIÇÕES - VERIFICA SE O CAMPO FOI PREENCHIDO
 *=======================================================================================*/

// Captura do campo;
const campoInscricao = window.document.querySelector('#inscricao');



// Captura do botão
const btnInscricao = window.document.querySelector('#btnInscricao');
const btnInscricao2 = window.document.querySelector('#btnInscricao2');



// Evento de click do botão inscrição
btnInscricao.addEventListener('click', function(){

    var inscricao = campoInscricao.value;

    if(inscricao){
        alert('Inscrição realizada com sucesso!');
        limpaTelaInscricao();
    } else {
        alert('Por favor, preencha o campo para realizar sua inscrição!');
    }

});

// Esse segundo botão é o icone que é mostrado quando a tela é pequena;
btnInscricao2.addEventListener('click', function(){

    var inscricao = campoInscricao.value;

    if(inscricao){
        alert('Inscrição realizada com sucesso!');
        limpaTelaInscricao();
    } else {
        alert('Por favor, preencha o campo para realizar sua inscrição!');
    }

});

function limpaTelaInscricao(){
    campoInscricao.value = null;
}


/**=======================================================================================
 * JS CARROSSEL DO BOX DE IMAGENS INOVAMAPS
 *=======================================================================================*/

// Captura dos objetos
const objCarrossel = window.document.querySelectorAll('[data-telas="imagem"]');
const btnBack = window.document.querySelector('#btnBack');
const btnNext = window.document.querySelector('#btnNext');

// Comando para iniciar mostrando a primeira imagem
objCarrossel[0].classList.add('mostrar');

// Variável para iniciar um contador
var cont = 0;

// Eventos dos botões
btnBack.addEventListener('click', function(){
    // Parametro 0 == voltar
    carrossel(0);
    console.log(cont);
});
btnNext.addEventListener('click', function(){
    // Parametro 1 == ir
    carrossel(1);

    console.log(cont);
});

// Funcão que faz as imagens girar;
function carrossel(direcao){
    
    // Verifica o tamamnho do objeto que tem as imagens
    if(cont <= objCarrossel.length -1){

        // Direção for igual a 0 o botão é Back;
        if(direcao === 0){

            // Se o cont estiver em 0 e tiver que voltar ele recebe o valor maximo do objeto;
            if(cont === 0){
                cont = objCarrossel.length -1;
            
            // Senão ele apenas volta;
            } else {
                cont--;
            }

        // Direção for igual a 1 o botão é Next;
        } else if(direcao === 1){

            // Enquanto o cont for menor que o objeto ele acrescenta +1;
            if(cont < objCarrossel.length -1){
                cont++;
            
            // Se o cont for igual ao valor do objeto, ele recebe 0 para voltar a primeira imagem;
            // Se não fizer essa condição quando chegar no igual ele acrescenta +1 e essa proxima imagem não existe;
            } else if(cont == objCarrossel.length -1){
                cont = 0;
            }
            
        }
        
    } else {
        // Quando o cont chega no tamanho maximo do objeto ele volta a 0;
        cont = 0;
    }

    objCarrossel.forEach(function(elementos){

        elementos.classList.remove('mostrar');
    });

    objCarrossel[cont].classList.add('mostrar');
}

/**=======================================================================================
 * JS CARROSSEL DO BOX DE NÓTICAS
 *=======================================================================================*/

const logos = document.getElementById('img');
const imgLogo = document.querySelectorAll('#img img');

console.log(imgLogo);

let i = 0;

function carrosselEmpresas(){
    i++

    if(i > imgLogo.length -1){
        i = 0;
    }

    logos.style.transform = `translateX(${-i * 200}px)`;

}

setInterval(carrosselEmpresas, 2800);
