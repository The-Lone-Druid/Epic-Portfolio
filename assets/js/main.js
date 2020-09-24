$(document).ready(function() {

    //Side Menu 
    $('.menu-button').click(function() {
        $('.side-bar').toggleClass('display');
        $('.overlay').toggleClass('active');
        $('.menu').toggleClass('fa-times');
        $('body').css('overflow-y','hidden');
        
        $('.overlay').click(function() {
            $('.side-bar').removeClass('display');
            $('.overlay').removeClass('active');
            $('.menu').removeClass('fa-times');
            $('body').css('overflow-y','scroll');
        });
    })

});