jQuery(document).ready(function($){


// Desktop menu hide on scroll 
$(window).scroll(function() {
    var y_scroll_pos    = window.pageYOffset;
    var scrollPosition  = 350;
    var $menuList = $(".menu-item-23, .menu-item-24, .menu-item-25");

    // Hides menu when viewer scrolls down
    if(y_scroll_pos > scrollPosition) {
	   $menuList.addClass("hide-menu");
    }else {
      $menuList.removeClass("hide-menu");
    }

    // 
    if( y_scroll_pos > scrollPosition ) {
        $('.line-one, .line-two').click(function(){
         $menuList.toggleClass('show-menu');   
        });    
    }else {
        return;
    }

    });

});