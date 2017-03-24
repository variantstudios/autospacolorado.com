$(document).ready(function() {
    // Add a class of .mq if the browser supports Media Query and '.no-mq' if it doesn't
    if (Modernizr.mq('only all')) {
        $('html').addClass('mq');
    } else {
        $('html').addClass('no-mq');
    }

    function goToByScroll(id) {
        // Reove "link" from the ID
        id = id.replace("link", "");
        // Scroll
        $('html,body').animate({
            scrollTop: $("#" + id).offset().top
        }, 'slow');
    }

    $("#sidebar > ul > li > a").click(function(e) {
        // Prevent a page reload when a link is pressed
        e.preventDefault();
        // Call the scroll function
        goToByScroll($(this).attr("id"));
    });

    // Mobile Menu ToggleClass
    $(".menu-btn").on('click touch', function() {
        $('.menu').toggleClass('show');
    });

    /* --- Menu Sub Links -- */
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

    // Stop Button Going Into Footer //
    function checkOffset() {
    var footerHeight = $('.footer-wrapper').height();

    if($('.book-fixed').offset().top + $('.book-fixed').height()
        >= $('.footer-wrapper').offset().top - 10);
        $('.book-fixed').css('bottom', '200px'); // restore when you scroll up
        //$('.book-fixed').css('position', 'absolute');
    if($(document).scrollTop() + window.innerHeight < $('.footer-wrapper').offset().top)
        //$('.book-fixed').css('position', 'fixed'); // restore when you scroll up
        $('.book-fixed').css('bottom', '10%'); // restore when you scroll up
       //$('.book-fixed').text($(document).scrollTop() + window.innerHeight);
    }
    $(document).scroll(function() {
        checkOffset();
    });


    /* --- SnipCart Funcationality -- */
    Snipcart.execute('registerLocale', 'en', {"thankyou_message": "Thanks for your order!"});


});
