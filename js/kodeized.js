jQuery(document).ready(function () {
    //stick in the fixed 100% height behind the navbar but don't wrap it
    jQuery('#slide-nav.navbar-inverse').after(jQuery('<div class="inverse" id="navbar-height-col"></div>'));
  
    jQuery('#slide-nav.navbar-default').after(jQuery('<div id="navbar-height-col"></div>'));  

    // Enter your ids or classes
    var toggler = '.navbar-toggle';
    var pagewrapper = '#page-content';
    var navigationwrapper = '.navbar-header';
    var menuwidth = '100%'; // the menu inside the slide menu itself
    var slidewidth = '80%';
    var menuneg = '-100%';
    var slideneg = '-80%';

    jQuery("#slide-nav").on("click", toggler, function (e) {

        var selected = jQuery(this).hasClass('slide-active');

        jQuery('#slidemenu').stop().animate({
            left: selected ? menuneg : '0px'
        });

        jQuery('#navbar-height-col').stop().animate({
            left: selected ? slideneg : '0px'
        });

        jQuery(pagewrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });

        jQuery(navigationwrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });


        jQuery(this).toggleClass('slide-active', !selected);
        jQuery('#slidemenu').toggleClass('slide-active');
        jQuery('#page-content, .navbar, body, .navbar-header').toggleClass('slide-active');
    });

    var selected = '#slidemenu, #page-content, body, .navbar, .navbar-header';
    jQuery(window).on("resize", function () {

        if (jQuery(window).width() > 767 && jQuery('.navbar-toggle').is(':hidden')) {
            jQuery(selected).removeClass('slide-active');
        }
    });
});














/**URL added on body tag as a Class**/
jQuery(function() {
  var loc = window.location.pathname; // returns the full URL
	var split_loc = loc.split('/');
	active_locLast = split_loc[split_loc.length-1]; 
	active_locLastParent = split_loc[split_loc.length-2]; 
	jQuery('body').addClass(active_locLastParent + "-page");
	jQuery('body').addClass(active_locLast + "-page");
	jQuery('body nav').addClass(active_locLast + "-nav");

});













        jQuery(document).ready(function() {
            jQuery('.anime-in').addClass("hidden2").viewportChecker({
                classToAdd: 'visible animated fadeIn', // Class to add to the elements when they are visible
                offset: 100
				
               });   

            jQuery('.anime-left').addClass("hidden2").viewportChecker({
                classToAdd: 'visible animated fadeInLeft', // Class to add to the elements when they are visible
                offset: 100    
               });
		   
            jQuery('.anime-right').addClass("hidden2").viewportChecker({
                classToAdd: 'visible animated fadeInRight', // Class to add to the elements when they are visible
                offset: 100    
               });   
			   
			jQuery('.anime-up').addClass("hidden2").viewportChecker({
                classToAdd: 'visible animated fadeInUp', // Class to add to the elements when they are visible
                offset: 100    
               });
			   
			jQuery('.anime-down').addClass("hidden2").viewportChecker({
                classToAdd: 'visible animated fadeInDown', // Class to add to the elements when they are visible
                offset: 100    
               });


  			jQuery('.anime-zoomIn').addClass("hidden2").viewportChecker({
                classToAdd: 'visible animated zoomIn', // Class to add to the elements when they are visible
                offset: 100    
               });   
		

	   
			jQuery('.anime-pulse').addClass("hidden2").viewportChecker({
                classToAdd: 'visible animated pulse', // Class to add to the elements when they are visible
                offset: 100    
               });   
			      
			jQuery('.anime-flipInY').addClass("hidden2").viewportChecker({
                classToAdd: 'visible animated flipInY', // Class to add to the elements when they are visible
                offset: 100    
               });   
			   
			jQuery('.anime-flipInX').addClass("hidden2").viewportChecker({
                classToAdd: 'visible animated flipInX', // Class to add to the elements when they are visible
                offset: 100    
               }); 
			   
			jQuery('.anime-hinge').addClass("hidden2").viewportChecker({
                classToAdd: 'visible animated hinge', // Class to add to the elements when they are visible
                offset: 100    
               });   
			   

			jQuery('.anime-bounceInDown').addClass("hidden2").viewportChecker({
                classToAdd: 'visible animated bounceInDown', // Class to add to the elements when they are visible
                offset: 100    
               });  

            jQuery('.anime-flash').addClass("hidden2").viewportChecker({
                classToAdd: 'visible animated fadeInRight', // Class to add to the elements when they are visible
                offset: 100    
               });   

            jQuery('.bounceInDown').addClass("hidden2").viewportChecker({
                classToAdd: 'visible animated bounceInDown', // Class to add to the elements when they are visible
                offset: 100    
               }); 
		});







/**.form-group--active on parent of .form-control**/
jQuery(".form-control").focus(function() {
  jQuery(this).parent().addClass("form-group--active");
});

jQuery(".form-control").blur(function() {
  jQuery(this).parent().removeClass("form-group--active");
});
/**./.form-group--active on parent of .form-control**/


//fnc-fom label animation//
	jQuery('.fnc-fom .form-control').focusout(function(){
	var text_value=jQuery(this).val();
     if(text_value!='')
       {
		jQuery(this).addClass("has-value");
        }else{ jQuery(this).removeClass("has-value"); }
	});
//./fnc-fom label animation//










/*
////////XTRA GPv3 SCRIPTS /////
$('.carousel').carousel({
  interval: 8000
})
*/

/*
//Multipal slide//
$('.testimoCarousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  }
  else {
  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
  
});






//Clients Slider
$('.carousel[data-type="multi"] .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  for (var i=0;i<2;i++) {
    next=next.next();
    if (!next.length) {
    	next = $(this).siblings(':first');
  	}
    
    next.children(':first-child').clone().appendTo($(this));
  }
});



//Scroll TOP and Down CASE STUDIES PAGE
var amount = '';

function scroll() {
    $('.case-snap').animate({
        scrollTop: amount
    }, 100, 'linear',function() {
        if (amount != '') {
            scroll();
        }
    });
}


*/



//Sticky Header
jQuery(window).scroll(function() {
if (jQuery(this).scrollTop() > 1){  
    jQuery('.hdr--sticky').addClass("hdr--sticky-active");
  }
  else{
    jQuery('.hdr--sticky').removeClass("hdr--sticky-active");
  }
});




//Classes On Body tag and Add ACTIVE Class on navbar link//
    jQuery(document).ready(function () {
        var url = window.location;
        jQuery('ul.nav a[href="'+ url +'"]').parent().addClass('active');
        jQuery('ul.nav a').filter(function() {
             return this.href == url;
        }).parent().addClass('active');
    });








//SLIDER ARROW BTN - HOME PAGE
jQuery(".dwn-scroll").click(function() {
    jQuery('html, body').animate({
        scrollTop: jQuery(".dwn-scroll").offset().top
    }, 1500);
});




//Active Tab Nav move to center on click
    jQuery(document).ready(function(){
      $(".active-tab-move-area .nav-tabs li").click(function() {
        $(".active-tab-move-area .nav-tabs li.active").removeClass("c_active"); //Remove any "active" class
//        $(".our-values .nav-tabs li.active > div").css("display","block");
	    var $active = $(this).detach().addClass("c_active"),
            $lis = $(".active-tab-move-area .nav-tabs li");
        $active.insertBefore($lis.eq(Math.floor($lis.length / 2)));
      });
    });
	
	
/*
//MOVING WIDE-DIV BACKGROUND IMAGES
jQuery(document).ready(function(){
  jQuery('.wide-box-holder').mousemove(function(e){
        var x = e.pageX - this.offsetLeft;
      if (x <= 600) {
		  x = x - 700;
       jQuery(this).children('div.section-bg').css({'right': x }); 
//	    jQuery('div.section-bg').css({'right': x }); 
      }
  });
});
*/




//Scroll to TOP//
jQuery(document).ready(function(){
	//Check to see if the window is top if not then display button
	jQuery(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			jQuery('.scrollToTop').fadeIn();
		} else {
			jQuery('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

});













/*************/
/* Demo Scripts for Bootstrap Carousel and Animate.css article
* on SitePoint by Maria Antonietta Perna
*//*
(function( $ ) {

	//Function to animate slider captions 
	function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';
		
		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}
	
	//Variables on page load 
	var $myCarousel = $('#carousel-example-generic'),
		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
		
	//Initialize carousel 
	$myCarousel.carousel();
	
	//Animate captions in first slide on page load 
	doAnimations($firstAnimatingElems);
	
	//Pause carousel  
	$myCarousel.carousel('pause');
	

	//Other slides to be animated on carousel slide event 
	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});  
})(jQuery);

*/

















/**links scrolling animation**/
	jQuery(function() {
		jQuery('.scrolink a').click(function() {
		  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = jQuery(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
			  jQuery('html, body').animate({
				scrollTop: target.offset().top
			  }, 1000);
			  return false;
			}
		  }
		});
	  });
/**./links scrolling animation**/






//Inner Pages Filler Script
jQuery(function () {
    jQuery(window).scroll(function () {
        var $myDiv = jQuery('.fill-mask');
        var y = $(this).scrollTop();
        jQuery('#results').text(y);
        x = y - 3;
        $myDiv.animate({
            height: x
        }, 30);
    }).scroll();
});


/*section height =screen*/
jQuery(document).ready(function(){
    jQuery('.screen-area').css("min-height", $(window).height() + 10);
});


/**broken images fix**/
// Replace source
jQuery('img').error(function(){
		jQuery(this).addClass('broken-image');
		//jQuery(this).attr('src', 'images/noimage.jpg');
		//jQuery(this).attr('alt', 'Broken Image Replaced');
});





/////////TOOL TIP///////
$('body').tooltip({    
    selector: "a[rel=tooltip]"
})


// Enabling Popover Example //
$(function(){
    // Enabling Popover Example 1 - HTML (content and title from html tags of element)
    $("[data-toggle=popover]").popover();

    // Enabling Popover Example 2 - JS (hidden content and title capturing)
    $("#popoverExampleTwo").popover({
        html : true, 
        content: function() {
          return $('#popoverExampleTwoHiddenContent').html();
        },
        title: function() {
          return $('#popoverExampleTwoHiddenTitle').html();
        }
    });

});






/***TABLE TH TEXT ADD ON TDs for mobile reponsive****/
jQuery('table th').each(function (i) {
	//adding 0 to 1
	i=i+1;
	tableTitle = jQuery( "table th:nth-child("+i+")" ).html();
	//alert(ttl);
	//alert(i);
	jQuery( "table td:nth-child("+i+")" ).attr("for", tableTitle);
	//i=i+1;
});






/***More Navbar Item Limitation***/
jQuery( document ).ready(function() {
moreNavLimit = jQuery(".hdr").attr("data-navitemlimit");

jQuery(".navbar-main > li").each(function (i) {
	i=i+1; //Counting Total Nav Items

	//Adding Class for Extra ILs
	if(i > moreNavLimit){
    jQuery(this).addClass("moreMover");
  }
	
  //Adding SubMenu for Extra ILs
  if(i == moreNavLimit){
  nv = "<li class='dropdown' id='moreMenu'><a href='#' class='dropdown-toggle' data-toggle='dropdown'>More... <span class='new badge'>" + moreNavLimit + "</span></a><ul id='moreSubMenu' class='dropdown-menu'></ul></li>";
   // nv="<li><a>MO</a></li>";
  	jQuery( nv ).insertAfter( this );
  	//jQuery( this ).append( "<li>d</li>" );
  }
  
  jQuery("li.moreMover").appendTo("#moreSubMenu");
  
  jQuery(this).addClass("KNav" +i+"");
});  
});
/***./More Navbar Item Limitation***/







jQuery(document).ready(function() {
  //moreTabLimit = jQuery(".tabs-area").attr("data-navitemlimit");
  //alert(moreTabLimit);
  moreTabLimit = 4;
  jQuery(".tabs-more-area .nav-tabs > li").each(function(i) {
    i = i + 1;
    if (i >= moreTabLimit) {
      jQuery(this).addClass("moreTabMover");
    }
    if (i > moreTabLimit+1) {
      jQuery(this).addClass("IMOK");
    }

    //Adding SubMenu for Extra ILs
    if (i == moreTabLimit+1) {
      Tabnv = "<li class='dropdown'><a href='#' id='myTabDrop1' class='dropdown-toggle' data-toggle='dropdown'>More...</a><ul class='dropdown-menu' role='menu' aria-labelledby='myTabDrop1' id='moreTabSubMenu'></ul></li>";
      // nv="<li><a>MO</a></li>";
      jQuery(Tabnv).insertAfter(this);
      //jQuery( this ).append( "<li>d</li>" );
    }

    jQuery(this).addClass("KNav" + i + "");
    last = i;
  });
 // alert(last);
  if (last >= moreTabLimit) {
    jQuery("li.moreTabMover").appendTo("#moreTabSubMenu");
  }
});







/**read more read less content**/
jQuery('.moreless-area .moreless-btn').click(function() {
  if (jQuery(this).hasClass("less")) {
    jQuery(this).removeClass("less");
    jQuery(this).html("Read more");
    jQuery(this).parent().children(".moreless").addClass("on");
  } else {
    jQuery(this).addClass("less");
    jQuery(this).html("Read less");
    jQuery(this).parent().children(".moreless").removeClass("on");
  }
});
/**./read more read less content**/
/**https://jsfiddle.net/gmkhussain/kcr80c24/**/




/****.accordion active add class****/
jQuery('.panel-heading a').click(function() {
  jQuery('.panel-default').removeClass('active');
  jQuery(this).parents('.panel-default').addClass('active');
});
/****./.accordion active add class****/




/*smart alert bar*/
	jQuery('.alert-pin-btn').click(function() {
		jQuery('.alert-bar').toggleClass('pinned');
	});
/*./smart alert bar*/




/***navbar-move active navbar item***/
/*hover mark to nav item*/
jQuery(".navbar-move li").hover(function( event ) {
  jQuery( ".navbar-move li" ).removeClass("yahan");
  jQuery( this ).addClass("yahan");
  var p = jQuery( ".yahan" );
  var position = p.position();
  var offset = jQuery( this ).offset();
  var corlft = offset.left;
  var corwid =  jQuery( this ).outerWidth();
 
  jQuery("#mark").css( "left", position.left);
  jQuery("#mark").css("width", corwid);
});

/*return mark to active nav item*/
jQuery(".navbar-move li").mouseout(function( event ) {
  var acti = ".navbar-move li.active";
    jQuery( acti ).removeClass("yahan");
  jQuery( acti ).addClass("yahan");
  var p = jQuery( ".yahan" );
  var position = p.position();
  var offset = jQuery( acti ).offset();
  var corlft = offset.left;
  var corwid =  jQuery( acti ).outerWidth();
  jQuery("#mark").css( "left", position.left);
  jQuery("#mark").css("width", corwid);
});




/**mutilang**/
var multiLangLink = ".lang.btn-group .dropdown-menu li a";
var multiLangLabel = ".lang.btn-group .btn span:not(.caret)";
jQuery(multiLangLink).click(function() {
  jQuery(multiLangLink).removeClass("selctd-lang");
  jQuery(this).addClass("selctd-lang");
  jQuery(multiLangLabel).html(jQuery(this).html());
});
/**./mutilang**/






/***WordPress SubMenu Styling**/
jQuery( document ).ready(function() {
	jQuery( ".menu-item-has-children" ).addClass( "dropdown gmk" );
	jQuery( ".menu-item-has-children > a" ).addClass( "dropdown-toggle" );
	jQuery( ".menu-item-has-children > a" ).attr( "data-toggle", "dropdown" );
	jQuery( ".menu-item-has-children ul" ).addClass( "dropdown-menu" );
});
/***./WordPress SubMenu Styling**/



/***remove blank <P> tags***/
jQuery('p:empty').remove();
/***./remove blank P tags***/



/***Live Detect Browser Size****/
if (jQuery('html').hasClass("livewindowsize")) {
function LiveDetectWindowSize(){
    // Get the dimensions of the viewport
    var windowWidth = $(window).width();
	
	jQuery('body').addClass("width-"+windowWidth);
	jQuery(document).prop('title', windowWidth );
};
jQuery(document).ready(LiveDetectWindowSize);    // When the page first loads
jQuery(window).resize(LiveDetectWindowSize);     // When the browser changes size
}
/***./Live Detect Browser Size****/