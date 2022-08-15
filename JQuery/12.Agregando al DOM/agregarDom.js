$(document).ready(function(){

    var contenedor = $('#contenedor');
    var contador = 1;

    $('#agregar').on('click', function(){
        var caja = $('<div></div>').attr('class','caja').text(contador);
        contador++;

        //Agrega dentro del contenedor
        // contenedor.append(caja);
        // contenedor.prepend(caja);

        //Agrega antes o despues del contenedor
        // contenedor.before(caja);
        // contenedor.after(caja);

        // contenedor.children().remove(); // elimina a todos los hijos
        // contenedor.children('#primero').remove(); // elimina el primero de los hijos
        // contenedor.empty(); // elimina a todos los hijos
    });


});