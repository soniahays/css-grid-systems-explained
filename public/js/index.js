//INTERACTIVELY REMOVE EACH POINT ONE AFTER THE OTHER TO
//DEMONSTRATE VISUALLY THE EFFECT OUR OUR GRID
$(document).ready(function() {
    $('.intro').on('click', function(event){
        event.preventDefault();
        $('.plus').removeClass('plus').addClass('arrow');
        $('.intro').off().removeClass('intro').attr('id', 'next');
//        $('header h1, header h5').addClass('bounceOutUp');
        $('#intro-text.not-displayed').removeClass('not-displayed');
        $('.intro-grid.not-displayed').removeClass('not-displayed').addClass('pulseIn');
        $('.navigation').removeClass('not-displayed');
//        $('.intro-grid.not-displayed')

        $('#next').click(function(event){
            event.preventDefault();
            $('#intro-text').addClass('not-displayed');
            $('.column').addClass('hidden');
            $('#key-components').removeClass('not-displayed');
        });
    });
});


//Grid systems include two key components: rows and columns. Rows are used to
//accommodate the columns. Columns make up the final structure and contain the
//actual content. Some grid systems will additionally include containers,
//which serve as wrappers for the layout.

///**
// *
// */
//(function($) {
//    var speed = 2000;
//    var container =  $('.display-animation');
//    container.each(function() {
//        var elements = $(this).children();
//        elements.each(function() {
//            var elementOffset = $(this).offset();
//            var offset = elementOffset.left*0.8 + elementOffset.top;
//            var delay = parseFloat(offset/speed).toFixed(2);
//            $(this)
//                .css("-webkit-animation-delay", delay+'s')
//                .css("-o-animation-delay", delay+'s')
//                .css("animation-delay", delay+'s')
//                .addClass('animated');
//        });
//    });
//})(jQuery);