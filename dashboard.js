jQuery( "#menu_toggle" ).click(function() {
				jQuery('body').toggleClass("nav--open");
});

dashsubmenu = jQuery("body .dropdown-menu");
			jQuery(dashsubmenu).each(function(index) {
				//var subli = $(this).find('.dropdown-menu li').is(".active");
				//jQuery(this).parent().addClass("open");
			});
jQuery('li.active').parent().addClass('open');







/**How to fix Bootstrap multilevel dropdown menu but submenu is going out of screen issue **/

    jQuery(document).ready(function(){
        jQuery('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
			//jQuery(this).parent().addClass("open");
            event.preventDefault(); 
            event.stopPropagation(); 
            jQuery(this).parent().siblings().removeClass('open');
            //jQuery(this).parent().toggleClass('open');
        });
    });
/**./How to fix Bootstrap multilevel dropdown menu but submenu is going out of screen issue **/






/**mark code**/
$("[data-code]").each(function(index) {
  var id = "#" + $(this).attr("data-code");
  var content = $(this).html();
  $(id).html(content);
});


$("[data-html]").each(function(index) {
	var id = "#" + $(this).attr("data-html");
    var $this = $(this);
    var t = $this.html();
    var t2 = t.replace(/\</g,'&lt;').replace(/\>/g, '&gt;');
	$(id).html(t2);

});

