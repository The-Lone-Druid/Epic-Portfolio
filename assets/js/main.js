$(document).ready(function() {

    //Side Menu 
    $('.menu-button').click(function() {
        $('.side-bar').toggleClass('display');
        $('.overlay').fadeIn('active');
        $('.menu').toggleClass('fa-times');
        $('body').css('overflow-y','hidden');
        
        $('.overlay , .nav-item').click(function() {
            $('.side-bar').removeClass('display');
            $('.overlay').fadeOut('active');
            $('.menu').removeClass('fa-times');
            $('body').css('overflow-y','auto');
        });
    });

    
    
    //Smooth Scroll
    $('a').click(function(event) {

        if (this.hash !== "") {
          event.preventDefault();
          
          var hash = this.hash;
          
         $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 0);
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

    // Back to top button
    var scrollButton = $('#scroll-top');

    $(window).scroll(function(){
      $(this).scrollTop() >= 600 ? scrollButton.show() : scrollButton.hide();
    });

    scrollButton.click(function(){
      $('html,body').animate({
        scrollTop: 0
      }, 600 );
    });
});
