$(document).ready(function() {
    // Add a class of .mq if the browser supports Media Query and '.no-mq' if it doesn't
    if (Modernizr.mq('only all')) {
        $('html').addClass('mq');
    } else {
        $('html').addClass('no-mq');
    }

    /* --- Mobile Menu ToggleClass -- */
    // $('.book-fixed').click(function() {
    //   $('.book-apt-modal').toggleClass('modal-open');
    //   $('.overlay').toggleClass('overlay-show');
    //   $("html, body").animate({ scrollTop: $(".book-apt-modal").offset().top},
    //           'slow');
    // return false;
    // });
    // $('.close-form').click(function() {
    //    $('.book-apt-modal').toggleClass('modal-open');
    //   $('.overlay').toggleClass('overlay-show');
    // });

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

    /* --- SnipCart Funcationality -- */
    Snipcart.execute('registerLocale', 'en', {"thankyou_message": "Thanks for your order!"});

    $("nav.main-nav").click(function(event) {
        event.stopPropagation();
    });
    $(document).click(function() {
        //alert('clicked outside');
        $('nav.main-nav .has-submenu').removeClass('submenu--open');
    });

    function isImageOk(img) {
        // During the onload event, IE correctly identifies any images that
        // weren't downloaded as not complete. Others should too. Gecko-based
        // browsers act like NS4 in that they report this incorrectly.
        if (!img.complete) {
            return false;
        }

        // However, they do have two very useful properties: naturalWidth and
        // naturalHeight. These give the true size of the image. If it failed
        // to load, either of these should be zero.
        if (typeof img.naturalWidth != "undefined" && img.naturalWidth == 0) {
            return false;
        }

        // No other way of checking: assume it's ok.
        return true;
    };

    // Check all of the images and if they have a data-img value and the origonal src image can't load it'll load the image from the data-img value
    for (var i = 0; i < document.images.length; i++) {
        if (!isImageOk(document.images[i])) {
            //document.images[i].style.visibility = "hidden";
            console.log(document.images[i].attributes["data-img"]);
            if (document.images[i].attributes["data-img"]) {
                document.images[i].src = document.images[i].attributes["data-img"].value;
            }

        }
    }

});
