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

    // fixed book button
    if ($('.book-fixed, .reg-fixed').length) {
        // Stop Button Going Into Footer //
        function checkOffset() {
        var footerHeight = $('.footer-wrapper').height();

        if($('.book-fixed, .reg-fixed').offset().top + $('.book-fixed').height()
            >= $('.footer-wrapper').offset().top - 10);
            $('.book-fixed, .reg-fixed').css('bottom', '200px'); // restore when you scroll up
            //$('.book-fixed').css('position', 'absolute');
        if($(document).scrollTop() + window.innerHeight < $('.footer-wrapper').offset().top)
            //$('.book-fixed, .reg-fixed').css('position', 'fixed'); // restore when you scroll up
            $('.book-fixed, .reg-fixed').css('bottom', '20%'); // restore when you scroll up
        //$('.book-fixed').text($(document).scrollTop() + window.innerHeight);
        }
        $(document).scroll(function() {
            checkOffset();
        });
    }




    /* --- SnipCart Funcationality -- */
    Snipcart.execute('registerLocale', 'en', {"thankyou_message": "Thanks for your order!"});


    //$(".snipcart-add-item").removeAttr('href');

// Carshow
if ($('form.register-form').length) {
    
    $('.snipcart-add-item').hide();
    $(document).on("keyup blur", "input", function(event){       
        if ($('input.make').val() != '' && $('input.model').val() != '' && $('input.year').val() != '') {
            //console.log('all inputs filled');
            $('.snipcart-add-item').show();
        } else {
            //console.log('theres an empty input');
            $('.snipcart-add-item').hide();
            return false
        }
    });


    $('input').change(function() {
        var CarMake = $(".make").val();
        var CarModel = $(".model").val();
        var CarYear = $(".year").val();
        $(".snipcart-add-item").attr('data-item-custom1-value', CarMake);
        $(".snipcart-add-item").attr('data-item-custom2-value', CarModel);
        $(".snipcart-add-item").attr('data-item-custom3-value', CarYear);
    });

}


    

});
