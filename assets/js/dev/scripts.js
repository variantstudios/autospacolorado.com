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
  });
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

  $("nav.main-nav").click(function(event) {
      event.stopPropagation();
    });
    $(document).click(function() {
      //alert('clicked outside');
      $('nav.main-nav .has-submenu').removeClass('submenu--open');
    });
});
