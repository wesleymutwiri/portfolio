$(document).ready(function () {

    // Scrollspy initiation
    $('body').scrollspy({
        target: '#scroll-spy',
        offset: 70
    });

    // On render, adjust body padding to ensure last Scroll target can reach top of screen
    var height = $('#howto').innerHeight();
    var windowHeight = $(window).height();
    var navHeight = $('nav.navbar').innerHeight();
    var siblingHeight = $('#howto').nextAll().innerHeight();


    if (height < windowHeight) {
        $('body').css("padding-bottom", windowHeight - navHeight - height - siblingHeight + "px");
    }

    // On window resize, adjust body padding to ensure last Scroll target can reach top of screen
    $(window).resize(function (event) {
        var height = $('#howto').innerHeight();
        var windowHeight = $(window).height();
        var navHeight = $('nav.navbar').innerHeight();
        var siblingHeight = $('#howto').nextAll().innerHeight();


        if (height < windowHeight) {
            $('body').css("padding-bottom", windowHeight - navHeight - height - siblingHeight + "px");
        }
    });

    $('nav.navbar a, .scrollTop').click(function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash (#)
            var hash = this.hash;

            // Ensure no section has relevant class
            $('section').removeClass("focus");

            // Add class to target
            $(hash).addClass("focus");

            // Remove thy class after timeout
            setTimeout(function () {
                $(hash).removeClass("focus");
            }, 2000);

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area (the speed of the animation)
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 69
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });

            // Collapse Navbar for mobile view
            $(".navbar-collapse").collapse('hide');
        }

    });
    $(window).scroll(function () {
        var scrollPos = $('body').scrollTop();
        if (scrollPos > 0) {
            $('.navbar').addClass('show-color');
            $('.scrollTop').addClass('show-button');
        } else {
            $('.navbar').removeClass('show-color');
            $('.scrollTop').removeClass('show-button');
        }

    });
});


$(function () {

    var link = $('#navbar a.dot');

    // Move to specific section when click on menu link
    link.on('click', function (e) {
        var target = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 600);
        $(this).addClass('active');
        e.preventDefault();
    });

    // Run the scrNav when scroll
    $(window).on('scroll', function () {
        scrNav();
    });

    // scrNav function 
    // Change active dot according to the active section in the window
    function scrNav() {
        var sTop = $(window).scrollTop();
        $('section').each(function () {
            var id = $(this).attr('id'),
                offset = $(this).offset().top - 1,
                height = $(this).height();
            if (sTop >= offset && sTop < offset + height) {
                link.removeClass('active');
                $('#navbar').find('[data-scroll="' + id + '"]').addClass('active');
            }
        });
    }
    scrNav();
});