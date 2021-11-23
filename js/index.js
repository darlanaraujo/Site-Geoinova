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