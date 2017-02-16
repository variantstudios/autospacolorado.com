$(document).ready(function() {
  // Add a class of .mq if the browser supports Media Query and '.no-mq' if it doesn't
  if (Modernizr.mq('only all')) {
    $('html').addClass('mq');
  } else {
    $('html').addClass('no-mq');
  }

  $('.book-fixed').click(function() {
    $('.book-apt-modal').toggleClass('modal-open');
    $('.overlay').toggleClass('overlay-show');
  });

  // Mobile Menu ToggleClass
  $(".menu-btn").on('click touch', function() {
    $('.menu').toggleClass('show');
  });


  // Menu Sub Links
  $(".has-submenu").on('click touch', function() {
     $(this).toggleClass('submenu--open');
  });
  

  $("nav.main-nav").click(function(event) {
      event.stopPropagation();
    });
    $(document).click(function() {
      //alert('clicked outside');
      $('nav.main-nav .has-submenu').removeClass('submenu--open');
    });





});
