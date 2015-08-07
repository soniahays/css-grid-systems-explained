//INTERACTIVELY REMOVE EACH POINT ONE AFTER THE OTHER TO
//DEMONSTRATE VISUALLY THE EFFECT OUR OUR GRID
$(document).ready(function() {
    $('.plus').click(function(event){
        event.preventDefault();
        $('.plus').removeClass('plus').addClass('arrow');
    });
});
