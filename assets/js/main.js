$(document).ready(function() {

    //Side Menu 
    $('.menu-button').click(function() {
        $('.side-bar').toggleClass('display');
        $('.overlay').toggleClass('active');
        $('.menu').toggleClass('fa-times');
        $('body').css('overflow-y','hidden');
        
        $('.overlay , .nav-item').click(function() {
            $('.side-bar').removeClass('display');
            $('.overlay').removeClass('active');
            $('.menu').removeClass('fa-times');
            $('body').css('overflow-y','scroll');
        });
    });

    //Smooth Scroll
    $("a").on('click', function(event) {

        if (this.hash !== "") {
          event.preventDefault();
    
          var hash = this.hash;
    
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 0, function(){
        });
      }
    });

    //Theme Changer

    var universalBg = "bg-dark bg-secondary bg-primary bg-info bg-warning bg-danger bg-success bg-dark-lighten bg-secondary-lighten bg-primary-lighten bg-info-lighten bg-warning-lighten bg-danger-lighten bg-success-lighten";
    var currBg = "bg-dark";
    var currBgLighten = "bg-dark-lighten";
    
    $('.theme').click(function() {
      currBg = $(this).attr('value');      
      currBgLighten = currBg + '-lighten';

      $('.bg, .bg-lighten').removeClass(universalBg);
      $('.bg').addClass(currBg);
      $('.bg-lighten').addClass(currBgLighten);
    })

});
