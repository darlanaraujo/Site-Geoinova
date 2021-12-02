
// Função que faz a rolagem da página ocorrer suavemente;
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

//=========================================================================================================

//Comando para pegar a posição da class containerConteudo. Essa posição será usada para manipular o topo do site;

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

/** ANIMAÇÃO DO PRIMEIRO BOX (SOLUÇÕES) ============================================================
 * 
 */

 const alvo = window.document.querySelectorAll('[data-anime-solucoes');
 const menu = window.document.querySelectorAll('[data-menu]');

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

// Controle dos eventos;

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


/** ANIMAÇÃO DO TERCEIRO BOX (SEGMENTOS)============================================================
 * 
 */

const telasSegmentos = window.document.querySelectorAll('[data-anime-segmentos]');
const btnSegmentos = window.document.querySelectorAll('[data-menu="menuSegmentos"]');

// console.log(telasSegmentos);
// console.log(btnSegmentos);

// Captura das telas;
const telaSegMiniracao = window.document.querySelector('#segmentoMineracao');
const telaSegAmbiente = window.document.querySelector('#segmentoAmbiente');
const telaSegEnergia = window.document.querySelector('#segmentoEnergia');
const telaSegConstrucao = window.document.querySelector('#segmentoConstrucao');
const telaSegAgro = window.document.querySelector('#segmentoAgro');
const telaSegTransporte = window.document.querySelector('#segmentoTransporte');
const telaSegGas = window.document.querySelector('#segmentoGas');
const telaSegGoverno = window.document.querySelector('#segmentoGoverno');

// Captura dos botões;
const btnSegMiniracao = window.document.querySelector('#menuMineracao');
const btnSegAmbiente = window.document.querySelector('#menuAmbiente');
const btnSegEnergia = window.document.querySelector('#menuEnergia');
const btnSegConstrucao = window.document.querySelector('#menuConstrucao');
const btnSegAgro = window.document.querySelector('#menuAgro');
const btnSegTransporte = window.document.querySelector('#menuTransporte');
const btnSegGas = window.document.querySelector('#menuGas');
const btnSegGoverno = window.document.querySelector('#menuGoverno');

// Comando para iniciar mostrando a primeira tela;
telaSegMiniracao.classList.add('mostrar');

// Controle dos eventos;
btnSegMiniracao.addEventListener('click', function(){
    mostrarTela(telasSegmentos, telaSegMiniracao);
});

btnSegAmbiente.addEventListener('click', function(){
    mostrarTela(telasSegmentos, telaSegAmbiente);
});

btnSegEnergia.addEventListener('click', function(){
    mostrarTela(telasSegmentos, telaSegEnergia);
});

btnSegConstrucao.addEventListener('click', function(){
    mostrarTela(telasSegmentos, telaSegConstrucao);
});

btnSegAgro.addEventListener('click', function(){
    mostrarTela(telasSegmentos, telaSegAgro);
});

btnSegTransporte.addEventListener('click', function(){
    mostrarTela(telasSegmentos, telaSegTransporte);
});

btnSegGas.addEventListener('click', function(){
    mostrarTela(telasSegmentos, telaSegGas);
});

btnSegGoverno.addEventListener('click', function(){
    mostrarTela(telasSegmentos, telaSegGoverno);
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