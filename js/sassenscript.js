jQuery(document).ready(function($){


// menu move up 
$(window).scroll(function() {
    var y_scroll_pos = window.pageYOffset;
    var scrollPastFirstChange  = 350;

    if(y_scroll_pos > scrollPastFirstChange) {
	   $(".menu-item-23, .menu-item-24, .menu-item-25").addClass("hide-menu");
    }else {
      $(".menu-item-23, .menu-item-24, .menu-item-25").removeClass("hide-menu");
    }

    });

// menu toggle
    $('#menu-item-23').click(function () {
        $('.sub-menu').toggleClass('show-menu');
           
  });

//   Mobile Menu Toggle



    $('#btn-menu').click(function () {
        $('.btn-menu').toggleClass('is-active');

        if ($('.btn-menu').hasClass('is-active')) {
            $('.menu-mobile-container')
                .toggleClass('menu-mobile-show');
        }

        if (!$('.btn-menu').hasClass('is-active')){
            $('.menu-mobile-container').removeClass('menu-mobile-show');
        }

        

    });




 

});