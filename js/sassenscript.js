jQuery(document).ready(function($) {
  const $btn      = $('.menu-toggle');
  const $menuList = $(".menu-item-16, .menu-item-15, .menu-item-14");

  // Desktop menu hide on scroll
  $(window).scroll(function() {
    
    const scrollTrigger = window.pageYOffset > 50;
    
    if (scrollTrigger) {
      // Hides menu when viewer scrolls down
      $menuList.addClass("hide-menu");
      // Animates the lines
      $(".line-one").addClass("line-one-animate");
      $(".line-two").addClass("line-two-animate");
      // For A11y purposes
      $(".menu-toggle").addClass("button-animate");
    } else {
      $menuList.removeClass("hide-menu");
      $(".line-one").removeClass("line-one-animate");
      $(".line-two").removeClass("line-two-animate");
      $(".menu-toggle").removeClass("button-animate");
    }
  });

// Desktop Menu Button

  $btn.click(function() { 
    $menuList.removeClass('hide-menu');
  });


// --------------------------------------------------------------------------
// ---------------------- MOBILE BUTTON & MENU ------------------------------
// --------------------------------------------------------------------------

const $mobileButton = $('.round-btn');
const $mobileCover  = $('.mobile-cover');
const $menuContainer = $('.menu-mobile-container');
const $mobileMenuItems = $(".menu-item-152, .menu-item-154, .menu-item-155, .menu-item-156");

$mobileButton.click(function(){
  console.log('clickky');
  $mobileCover.toggleClass('active');
  // add active classes to menu
  if ($mobileCover.hasClass('active') ){
    $menuContainer.addClass('active-fade');
    $mobileMenuItems.addClass("active-fade");
  }else {
    $menuContainer.removeClass("active-fade");
    $mobileMenuItems.removeClass("active-fade");
  }
});



// ----------- Dynamically add size and position to Images in galleries

const listItems = $('li.items');
const $aligners  = ["img-center",
                    "img-bottom-left",
                    "img-top-right",
                    "img-bottom-right"];
            

  // $(listItems).each(function (index) {
  //   $(this).addClass($aligners[index % 4]);
  // });

    $(listItems).each(function(index) {
      $(this).addClass($aligners[parseInt(Math.random() * 1000, 10) % 4]);
    });
});


