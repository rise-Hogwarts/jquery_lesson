$(function(){
    $('button').on('click', function(){
        $('ul').children().addClass('red');
    });
    $('').on('click', function(){
        $('ul').children().removeClass('red');
    });
});