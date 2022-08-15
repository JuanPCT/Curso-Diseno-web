$(document).ready(function(){

    // $('.caja').first().css({background: '#000'});

    // $('.caja').last().css({background: '#000'});

    // $('.caja').eq(2).css({background: '#000'}); // selecciona en orden desde el 0 en adelante

    $('.caja').filter('#segunda').css({background: '#000'}); // selecciona todos los que cumplan el filtro

    $('.caja').not('#segunda').css({background: '#000'});// selecciona todos los que no cumplan el filtro
});