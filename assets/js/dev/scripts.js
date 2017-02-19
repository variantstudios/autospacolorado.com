$(document).ready(function() {
  // Add a class of .mq if the browser supports Media Query and '.no-mq' if it doesn't
  if (Modernizr.mq('only all')) {
    $('html').addClass('mq');
  } else {
    $('html').addClass('no-mq');
  }

  /* --- Mobile Menu ToggleClass -- */
  $('.book-fixed').click(function() {
    $('.book-apt-modal').toggleClass('modal-open');
    $('.overlay').toggleClass('overlay-show');
    $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
  });

  // Mobile Menu ToggleClass
  $(".menu-btn").on('click touch', function() {
    $('.menu').toggleClass('show');
  });

  /* --- Menu Sub Links -- */
  $(".has-submenu").on('click touch', function() {
     $(this).toggleClass('submenu--open');
  });

 /* --- SnipCart Funcationality -- */
Snipcart.execute('registerLocale', 'en', {
 "thankyou_message": "Thanks for your order!"
});

  
  // $(".book-fixed").click(function(event) {
  //     event.stopPropagation();
  //   });
  //   $(document).click(function() {
  //     //alert('clicked outside');
  //     $('.modal-open').removeClass('modal-open');
  //     $('.overlay-show').removeClass('overlay-show');
  //   });

  $("nav.main-nav").click(function(event) {
      event.stopPropagation();
    });
    $(document).click(function() {
      //alert('clicked outside');
      $('nav.main-nav .has-submenu').removeClass('submenu--open');
    });





});
