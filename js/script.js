$('.pergunta').click(function () {
    //PEGA O ATRIBUTO DATA-PERGUNTA
    var id = $(this).attr('data-pergunta');

    //VARRE TODAS AS RESPOSTAS PARA VER SE É
    //DAQUELA PERGUNTA CLICADA
    $('.resposta').each(function () {
        if ($(this).attr('id') == id) {
            $(this).slideToggle('fast');
        } else {
            $(this).slideUp('fast');
        }
    });

    //TROCAR ICONE
    $('.icon').each(function () {
        var valor = $(this).text();
        if ($(this).attr('id') == "icone-" + id) {

            if (valor == '+') {
                $(this).text('X');
            } else {
                $(this).text('+');
            }

        } else {
            $(this).text('+');
        }
    });


})