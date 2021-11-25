
// Função que faz a rolagem da página ocorrer suavemente;
function ativaScrollSuave(selector) {

    $(selector).click(function(event) {
        
        event.preventDefault();
        var target = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000)
    });
}

ativaScrollSuave('a[href*=topo]');
ativaScrollSuave('a[href*=boxSolucoes]');
ativaScrollSuave('a[href*=boxInovamaps]');
ativaScrollSuave('a[href*=boxSobre]');
ativaScrollSuave('a[href*=boxContato]');
ativaScrollSuave('a[href*=boxSolucoes]');

//=========================================================================================================

//Comando para pegar a posição da class containerConteudo. Essa posição será usada para manipular o topo do site;

$(document).ready(function(){
    var scroll_start = 0;
    var containerConteudo = $("#containerConteudo");
    var offset = containerConteudo.offset();

    $(document).scroll(function(){
        scroll_start = $(this).scrollTop();

        if(scroll_start > offset.top) {
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

/*
const box = document.querySelector("#boxSolucoes")

var topo = document.querySelectorAll("#topo");

const posicao = box.getBoundingClientRect();

console.log(posicao);

if(posicao.top != 601.2000122070312){
    console.log("A pagina mexeu!");
    document.nav.style.backgroudColor = "red";
} else{
    console.log("A pagina NÃO mexeu!");
}
*/