$(document).ready(function () {
    $('.burgermenu').click(function(){
        $('.header.header nav').addClass('show')
    });
    $('.closemenu').click(function(){
        $('.header.header nav').removeClass('show')
    });
});