$(document).ready(function() {
  // Add a class of .mq if the browser supports Media Query and '.no-mq' if it doesn't
  if (Modernizr.mq('only all')) {
    $('html').addClass('mq');
  } else {
    $('html').addClass('no-mq');
  }

  // Mobile Menu ToggleClass
  $(".menu-btn").on('click touch', function() {
    $('.menu').toggleClass('show');
  });


  // Menu Sub Links
  $(".has-submenu").on('click touch', function() {
     $(this).toggleClass('submenu--open');
  });
  

});
