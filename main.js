$(document).ready(function(){

    $('.login').on('click',function(){
        $(this).addClass('active');
        $('.singUp').removeClass('active');
        $('#login').slideDown(666);
        $('#singUp').fadeOut(50);
    });
    $('.singUp').on('click',function(){
        $(this).addClass('active');
        $('#singUp').slideDown(666);
        $('#login').fadeOut(50);
        $('.login').removeClass('active');
        
    });

});