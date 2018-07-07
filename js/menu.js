jQuery(document).ready(function ($) {

    $(window).hideMenu(function() {
    
        const scrollPosition = window.pageYOffset;
        const scrollTrigger = 250;
        const $menuList = $(".menu-item-23, .menu-item-24, .menu-item-25");
        
        if ( scrollPosition >= scrollTrigger ){
            $menuList.addClass('hide-menu')
        }else {
            $menuList.removeClass("hide-menu");
        }
    });

    
});