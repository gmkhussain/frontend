
 jQuery(document).ready(function () {
    //stick in the fixed 100% height behind the navbar but don't wrap it
    jQuery('.slide-navbar #slide-nav.navbar-inverse').after(jQuery('<div class="inverse" id="navbar-height-col"></div>'));
  
    //jQuery('.slide-navbar #slide-nav.navbar-default').after(jQuery('<div id="navbar-height-col"></div>'));  

    // Enter your ids or classes
    var toggler = '.navbar-toggle';
    var pagewrapper = '#page-content';
    var navigationwrapper = '.navbar-header';
    var menuwidth = '100%'; // the menu inside the slide menu itself
    var slidewidth = '80%';
    var menuneg = '-100%';
    var slideneg = '-80%';

    jQuery(".slide-navbar #slide-nav").on("click", toggler, function (e) {

        var selected = jQuery(this).hasClass('slide-navbar--active');

        jQuery('.slide-navbar #slidemenu').stop().animate({
            left: selected ? menuneg : '0px'
        });

        jQuery('.slide-navbar #navbar-height-col').stop().animate({
            left: selected ? slideneg : '0px'
        });

        jQuery(pagewrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });

        jQuery(navigationwrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });


        jQuery(this).toggleClass('slide-navbar--active', !selected);
        jQuery('.slide-navbar #slidemenu').toggleClass('slide-navbar--active');
        jQuery('.slide-navbar #page-content, .navbar, body, .navbar-header').toggleClass('slide-navbar--active');
    });

    var selected = '#slidemenu, #page-content, body, .navbar, .navbar-header';
    jQuery(window).on("resize", function () {

        if (jQuery(window).width() > 767 && jQuery('.slide-navbar .navbar-toggle').is(':hidden')) {
            jQuery(selected).removeClass('slide-navbar--active');
        }
    });
});

