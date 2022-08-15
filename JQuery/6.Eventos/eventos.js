$(document).ready(function(){

    var boton = $('#boton');

    var desactivar = $('#desactivar');
    // boton.click(function(){
    //     alert('Hola')
    // });

    function saludo(){
        alert('Saludos');
    }

    //boton.click(saludo); forma antigua

    //boton.on('click', saludo); // forma actual

    //evento con fallback
    // boton.on('mouseenter', function(){
    //     document.body.style.background = '#000';
    // });

    // boton.on('mouseleave', function(){
    //     document.body.style.background = '#fff';
    // });

    boton.on('click',function(){
            alert('Hola')
        });

    desactivar.on('click',function(){
        boton.off('click');
    });

    //Prevenir el compartamiento de enlaces
    $('a').on('click',function(e){
        e.preventDefault();
    });
});