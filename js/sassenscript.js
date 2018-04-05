jQuery(document).ready(function($){
// transitions on window load

    if ($('body').hasClass('home')){
        $(function() {
            $('#masthead').toggleClass('landing-transition');

        });
    };

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