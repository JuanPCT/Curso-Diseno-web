$(document).ready(function(){

    // $('#titulo').text('Modificado'); //Obtengo el texto y lo puedo guardar en una variable
    $('#titulo').html("<u>Encabezado Modificado</u>");

    var nombre = $('#nombre');
    nombre.on('change', function(){
        $('#titulo').text(nombre.val());
    });

    $('#enlace').text('FalconMasters.com');
    $('#enlace').attr('href', 'http://www.falconmasters.com');

    $('#enlace').attr({
        'class': 'azul',
        'target': 'blank'
    });
})