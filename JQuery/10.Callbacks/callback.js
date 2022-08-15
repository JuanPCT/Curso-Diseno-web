$(document).ready(function(){ // Ready ejecuta la función cuando el documento html ya halla cargado

    $('#ejecutar').on('click', function(){
        $('.caja').slideUp(1000, function(){ // hacemos callback de una funcion anonima cuando la primera 
            $('.caja').slideDown();          // animacion termine
        });
    });

});