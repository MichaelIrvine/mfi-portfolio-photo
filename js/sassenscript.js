jQuery(document).ready(function($) {
    console.log("chrome test");
  // Desktop menu hide on scroll
  $(window).scroll(function() {
    
    var y_scroll_pos = window.pageYOffset;
    var scrollPosition = 250;
    var $menuList = $(".menu-item-23, .menu-item-24, .menu-item-25");

    // Hides menu when viewer scrolls down
    if (y_scroll_pos > scrollPosition) {
      $menuList.addClass("hide-menu");
    } else {
      $menuList.removeClass("hide-menu");
    }

    // Makes the Menu lines move 

    // ----------- Top line ----------------------------
    if (y_scroll_pos > scrollPosition) {
      $(".line-one").addClass("line-one-animate");
    } else {
      $(".line-one").removeClass("line-one-animate");
    }

    // ----------- Bottom line --------------------------
    if (y_scroll_pos > scrollPosition) {
      $(".line-two").addClass("line-two-animate");
    } else {
      $(".line-two").removeClass("line-two-animate");
    }

    //
    if (y_scroll_pos > scrollPosition) {
       $('.line-one, .line-two').click(function(){
        $menuList.toggleClass('show-menu');
       }); 
    } else {
        $('.line-one, .line-two').off('click'); 
        // Items won't be clickable
    }
  });
});
