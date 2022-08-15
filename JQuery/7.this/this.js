
$(document).ready(function(){

    $('.caja').on('click', function(){
        //$('.caja').toggleClass('color');
        $(this).toggleClass('color'); //this toma la caja especifica que se clickeo en vez
        // de aplicar a todas las cajas
    });
});