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

    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 0, function(){
          });
        } // End if
      });
});
