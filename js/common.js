$(document).ready(function () {
    $('.burgermenu').click(function(){
        $('.header.header nav').addClass('show')
    });
    $('.closemenu').click(function(){
        $('.header.header nav').removeClass('show')
    });


 


    $(".scrolllink").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 100;
        $('body,html').animate({ scrollTop: top }, 1500);
    });








     $('.scrolllink').click(function(e){
        $('header.header nav').removeClass('show');
    });



});