$(document).ready(function() {
// Add a class of .mq if the browser supports Media Query and '.no-mq' if it doesn't
  if (Modernizr.mq('only all')) {
    $('html').addClass('mq');
  } else {
    $('html').addClass('no-mq');
  }
  // Mobile Menu Funcation
  $(".menu-btn").on('click touch', function() {
    $('.menu').toggleClass('show');
  });


  // Menu Sub Links
  $(".has-submenu").on('click touch', function() {
     $(this).toggleClass('submenu--open');
    // sr.reveal('.has-submenu li', { 
    //   delay: 140,
    //   duration: 900,
    //   origin: 'top',
    //   scale: 1,
    // }, 200);
  });

    $('.gallery-slider').slick({
      centerMode: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

  });
