//INTERACTIVELY REMOVE EACH POINT ONE AFTER THE OTHER TO
//DEMONSTRATE VISUALLY THE EFFECT OUR OUR GRID
$(document).ready(function() {
    $('.intro').click(function(event){
        event.preventDefault();
        $('.plus').removeClass('plus').addClass('arrow');
        $('.intro').removeClass('intro').addClass('next');
        $('.card-panel.hidden').removeClass('hidden');
        $('.intro-grid.hidden').removeClass('hidden');
    });
});

/**
 *
 */
(function($) {
    var speed = 2000;
    var container =  $('.display-animation');
    container.each(function() {
        var elements = $(this).children();
        elements.each(function() {
            var elementOffset = $(this).offset();
            var offset = elementOffset.left*0.8 + elementOffset.top;
            var delay = parseFloat(offset/speed).toFixed(2);
            $(this)
                .css("-webkit-animation-delay", delay+'s')
                .css("-o-animation-delay", delay+'s')
                .css("animation-delay", delay+'s')
                .addClass('animated');
        });
    });
})(jQuery);