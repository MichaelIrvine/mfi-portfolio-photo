jQuery(document).ready(function($) {
  $(".fp-gallery-one").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    adaptiveHeight: false,
    fade: true,
    arrows: false,
    dots: false,

    responsive: [
      {
        breakpoint: 620,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $(".fp-gallery-two").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    speed: 1000,
    adaptiveHeight: false,
    fade: true,
    arrows: false,
    dots: false,

    responsive: [
      {
        breakpoint: 620,
        settings: {
          arrows: false
        }
      }
    ]
  });

    $(".fp-gallery-three").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4500,
      speed: 1000,
      adaptiveHeight: false,
      fade: true,
      arrows: false,
      dots: false,

      responsive: [
        {
          breakpoint: 620,
          settings: {
            arrows: false
          }
        }
      ]
    });

    $(".fp-gallery-mobile").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      speed: 1000,
      adaptiveHeight: false,
      fade: true,
      arrows: false,
      dots: false,
    });


});
