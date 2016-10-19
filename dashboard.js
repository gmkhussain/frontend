jQuery( "#menu_toggle" ).click(function() {
				jQuery('body').toggleClass("nav--open");
});

dashsubmenu = jQuery("body .dropdown-menu");
			jQuery(dashsubmenu).each(function(index) {
				//var subli = $(this).find('.dropdown-menu li').is(".active");
				//jQuery(this).parent().addClass("open");
			});
jQuery('li.active').parent().addClass('open');