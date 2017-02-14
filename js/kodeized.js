/* 
* Kodeized v1.0
* This file contains works for many various kinds of tasks 
*/

 jQuery(document).ready(function () {
    //stick in the fixed 100% height behind the navbar but don't wrap it
    jQuery('.slide-navbar #slide-nav.navbar-inverse').after(jQuery('<div class="inverse" id="navbar-height-col"></div>'));
  
    jQuery('.slide-navbar #slide-nav.navbar-default').after(jQuery('<div id="navbar-height-col"></div>'));  

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


/*preloader*/
jQuery(window).on('load', function() {
  jQuery('#preloader__status').fadeOut();
  jQuery('#preloader').delay(350).fadeOut('slow'); 
  jQuery('body').delay(350).css({'overflow':'visible'});
})
/*./preloader*/

/**on menu open mode Trigger menu button when click body area
jQuery("#page-content").on('click', function(event) { 
		event.preventDefault(); 
		jQuery(".slide-navbar--active .navbar-toggle").click(); 
});
**/

jQuery(document).keydown(function(e) {
  if (e.keyCode == 20 && e.ctrlKey) {
    jQuery("html").toggleClass("hint");
  }
});





/**URL added on body tag as a Class**/
jQuery(function() {
  var locReal = window.location.pathname; // returns the full URL
	var loc = locReal.replace(".", "/");
	var split_loc = loc.split('/');
	active_locLastParent2 = split_loc[split_loc.length-3];
	active_locLastParent = split_loc[split_loc.length-2];
	active_locLast = split_loc[split_loc.length-1]; 
	
	
	jQuery('body').addClass(active_locLastParent2 + "-page");
	jQuery('body').addClass(active_locLastParent + "-page");
	jQuery('body').addClass(active_locLast + "-page");
	
	//jQuery('body nav').addClass(active_locLast + "-nav");

  var urlParameters = window.location.search; // returns the URL Parameters
	var split_urlParameters = urlParameters.split(/[ .=:;?!~,`"&|()<>{}\[\]\r\n/\\]+/);
	urlParametersLast= split_urlParameters[split_urlParameters.length-1];
	urlParametersLast2= split_urlParameters[split_urlParameters.length-2];
	jQuery('body').addClass("parameter-"+urlParametersLast);
	jQuery('body').addClass("parameter-"+urlParametersLast2);
	
  var urlHash = window.location.hash;
    var urlHashSplit = urlHash.split("#");
    var urlHashAfterSplit = "-no-hash";
    if (urlHashSplit[1] != null){
			urlHashAfterSplit = urlHashSplit[1];
		}
	jQuery('body').addClass("hash"+urlHashAfterSplit);

	
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




/**input-number**/
jQuery(document).ready(function() {
  window.inputNumber = function(el) {
   var min = el.attr('min') || false;
    var max = el.attr('max') || false;
    var els = {};
    els.dec = el.prev();
    els.inc = el.next();
    el.each(function() {
      init($(this));
    });

    function init(el) {
      els.dec.on('click', decrement);
      els.inc.on('click', increment);
      function decrement() {
        var value = el[0].value;
        value--;
        if(!min || value >= min) {
          el[0].value = value;
        }
      }
      function increment() {
        var value = el[0].value;
        value++;
        if(!max || value <= max) {
          el[0].value = value++;
        }
      }
    }
  }
  inputNumber(jQuery('.input-number'));
});

/**./.input-number**/


/**.form-group--active on parent of .form-control**/
jQuery(".form-control").focus(function() {
  jQuery(this).parent().addClass("form-group--active");
});

jQuery(".form-control").blur(function() {
  jQuery(this).parent().removeClass("form-group--active");
});
/**./.form-group--active on parent of .form-control**/


/**.has-value added if .form-control have value**/
jQuery('.form-control').change(function (event) {
	if (jQuery(this).val() != '') $(this).addClass('has-value');
	else jQuery(this).removeClass('has-value');
});
/**./has-value added if form-control have value**/			


/**fnc-fom label animation**/
	jQuery('.fnc-fom .form-control').focusout(function(){
	var text_value=jQuery(this).val();
     if(text_value!='')
       {
		jQuery(this).addClass("has-value");
        }else{ jQuery(this).removeClass("has-value"); }
	});
/**./fnc-fom label animation**/




/*Add class on parent of Checked input*/
jQuery("input").change(function() {
  if (jQuery(this).is(':checked')) {
    jQuery(this).parents(".checker-area").addClass("is-active");
  }else if (jQuery(this).prop('checked', false)){
	jQuery(this).parents(".checker-area").removeClass("is-active");
  }
});
/*./Add class on parent of Checked input*/


/*section-centralized
- highlight unique section when it is center of window */
jQuery(document).ready(function() {      
  var window_height = jQuery(window).height();
 jQuery(window).scroll(function() {
    var scrollMiddle = jQuery(window).scrollTop() + (window_height/2);
    jQuery('.section-centralized section').each(function() {
      elTop = jQuery(this).offset().top;
      elBtm = elTop + jQuery(this).height();
      if (elTop < scrollMiddle && elBtm > scrollMiddle) {
		jQuery(this).addClass("section-centralized--active");
      } else {
        jQuery(this).removeClass("section-centralized--active");
      }
    });
  });
});
/*./section-centralized*/


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
	jQuery('body').addClass("scrollized");
  }
  else{
    jQuery('.hdr--sticky').removeClass("hdr--sticky-active");
	jQuery('body').removeClass("scrollized");
  }
});

//Blind Footer
jQuery( document ).ready(function() {
	var ftrBlind = jQuery(".ftr-blinder .ftr--blind").height();
	jQuery(".ftr-blinder footer").css("padding-top", ftrBlind );
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




//Tab slide up/dwon on click
jQuery(".tab-animate li").click(function() {
   jQuery('html, body').animate({ scrollTop: $(".tab-content").offset().top - 170 }, 1500 );
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
		if (jQuery(this).scrollTop() > 100) {
			jQuery('.scrollToTop').fadeIn();
		} else {
			jQuery('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	jQuery('.scrollToTop').click(function(){
		jQuery('html, body').animate({scrollTop : 0},800);
		return false;
	});

});


/**Button ripple effects on click**/
jQuery(".btn-effect--ripple button, .btn-effect--ripple .btn, .link-effect--ripple a").click(function (e) {
  jQuery(".ripple").remove();/*Remove any old one*/
  var posX = $(this).offset().left,
      posY = $(this).offset().top,
      buttonWidth = $(this).width(),
      buttonHeight =  $(this).height();
  jQuery(this).prepend("<span class='ripple'></span>");

  if(buttonWidth >= buttonHeight) {
    buttonHeight = buttonWidth;
  } else {
    buttonWidth = buttonHeight; 
  }
  
  /*Get the center of the element*/
  var x = e.pageX - posX - buttonWidth / 2;
  var y = e.pageY - posY - buttonHeight / 2;
  
  jQuery(".ripple").css({
    width: buttonWidth,
    height: buttonHeight,
    top: y + 'px',
    left: x + 'px'
  }).addClass("rippleEffect");
});
/**./Button ripple effects on click**/









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
				scrollTop: target.offset().top + (-100) //Additional pixels to the scrollTop
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
        var $myDiv = jQuery('.fill__move');
        var y = jQuery(this).scrollTop();
        jQuery('#fill__value').text(y);
		jQuery('html').attr("x",y);
        x = y - 3;
        $myDiv.animate({
            height: x
        }, 30);
    }).scroll();
});


/*section height =screen*/
jQuery(document).ready(function(){
    jQuery('.screen-area').css("min-height", jQuery(window).height() + 10);
});



/**broken images fix
// Replace source
jQuery(window).ready(function() { 
   jQuery("img").each(function(){
      var image = jQuery(this); 
      if(image.context.naturalWidth == 0 || 
      image.readyState == 'uninitialized'){  
			jQuery(this).unbind("error").addClass("broken-image");
      } 
   }); 
});
**/




/////////TOOL TIP///////
jQuery('body').tooltip({    
    selector: "a[rel=tooltip]"
})


// Enabling Popover Example //
jQuery(function(){
    // Enabling Popover Example 1 - HTML (content and title from html tags of element)
    jQuery("[data-toggle=popover]").popover();

    // Enabling Popover Example 2 - JS (hidden content and title capturing)
    jQuery("#popoverExampleTwo").popover({
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
	jQuery( "table th:nth-child("+i+")" ).attr("for", tableTitle);
	jQuery( "table td:nth-child("+i+")" ).attr("for", tableTitle);
	//i=i+1;
});






/***More Navbar Item Limitation***/
jQuery( document ).ready(function() {
moreNavLimit = jQuery(".hdr-area").attr("data-navitemlimit");

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

/**tabs nav responsive **/
(function($) {
  'use strict';
  $(document).on('show.bs.tab', '.nav-tabs-rwd [data-toggle="tab"]', function(e) {
    var $target = $(e.target);
    var $tabs = $target.closest('.nav-tabs-rwd');
    var $current = $target.closest('li');
    var $parent = $current.closest('li.dropdown');
		$current = $parent.length > 0 ? $parent : $current;
    var $next = $current.next();
    var $prev = $current.prev();
    var updateDropdownMenu = function($el, position){
      $el
      	.find('.dropdown-menu')
        .removeClass('pull-xs-left pull-xs-center pull-xs-right')
      	.addClass( 'pull-xs-' + position );
    };

    $tabs.find('>li').removeClass('next prev');
    $prev.addClass('prev');
    $next.addClass('next');
    
    updateDropdownMenu( $prev, 'left' );
    updateDropdownMenu( $current, 'center' );
    updateDropdownMenu( $next, 'right' );
  });
})(jQuery);
/**./tabs nav responsive **/




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

		// alert(last);
		if (last >= moreTabLimit) {
			jQuery("li.moreTabMover").appendTo("#moreTabSubMenu");
		}
	  
  });
});


/**handle nav-tabs by url**/
		var tabs_url = window.location.search; // returns the URL Parameters
			var split_tabs_url= tabs_url.split(/[ .=:;?!~,`"&|()<>{}\[\]\r\n/\\]+/);
			tabs_urlLast= split_tabs_url[split_tabs_url.length-1];
			
			jQuery(document).ready(function() {
			jQuery("#"+tabs_urlLast).addClass('active');
			jQuery('.nav-tabs-url-handler .nav-tabs li a').each(function(){
			jQuery(this).find('[href="#'+tabs_urlLast+'"]').addClass('active');
			jQuery(this).addClass("dasd");
		})
	});
/**./handle nav-tabs by url**/


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
    jQuery('html, body').animate({	scrollTop: jQuery(this).parent(".moreless-area").offset().top	}, 800);
	
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
jQuery( document ).ready(function() {
	/*hover mark to nav item*/
	jQuery(".navbar-move > li").hover(function( event ) {
	  jQuery( ".navbar-move li" ).removeClass("yahan");
	  jQuery( this ).addClass("yahan");
	  var p = jQuery( ".yahan" );
	  var position = p.position();
		  //var offset = jQuery( this ).offset();
		  //var corlft = offset.left;
	  var corwid =  jQuery( this ).outerWidth();
	 
	  jQuery("#mark").css( "left", position.left);
	  jQuery("#mark").css( "top", position.top);
	  jQuery("#mark").css("width", corwid);
	});

	/*return mark to active nav item*/
	jQuery(".navbar-move > li").mouseout(function( event ) {
	  var acti = ".navbar-move li.active";
		jQuery( this ).removeClass("yahan");
	  jQuery( acti ).addClass("yahan");
	  var p = jQuery( ".yahan" );
	  var position = p.position();
		  //var offset = jQuery( acti ).offset();
		  //var corlft = offset.left;
	  var corwid =  jQuery( acti ).outerWidth();
	  
	  jQuery("#mark").css( "left", position.left);
	  jQuery("#mark").css( "top", position.top);
	  jQuery("#mark").css("width", corwid);
	});
});
/***./navbar-move active navbar item***/


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

jQuery('.p-blank--remove p').each(function() {
  var $this = jQuery(this);
  if ($this.html().replace(/\s|&nbsp;/g, '').length == 0)
    $this.remove();
});
/***./remove blank P tags***/


/***remove &nbsp; from any element***/
jQuery('.remove-nbsp').html(function(i,h){
    console.log(i,h);
    return h.replace(/&nbsp;/g,'');
});
/***./remove &nbsp; from any element***/


/***Live Detect Browser Size****/
var windowTitle = jQuery(document).prop('title'); // Original Title
if (jQuery('html').hasClass("livewindowsize")) {
	
	jQuery('body').mouseleave(function() {
		function LiveDetectWindowSize(){
			// Get the dimensions of the viewport
			var windowWidth = jQuery(window).width();
			jQuery('body').addClass("width-"+windowWidth);
			jQuery(document).prop('title', windowTitle+" - "+windowWidth );
		};
	  jQuery(document).ready(LiveDetectWindowSize);    // When the page first loads
	  jQuery(window).resize(LiveDetectWindowSize);     // When the browser changes size
	});
	
	jQuery('body').mouseenter(function() {
		jQuery(document).prop('title', windowTitle ); // When mouse enter display Original Title
	});

};
/***./Live Detect Browser Size****/




/*Video stop when Modal Close*/
	jQuery('.modal').on('hidden.bs.modal', function () {
		var src = $(this).find('iframe').attr('src');
		jQuery(this).find('iframe').attr('src', '');
		jQuery(this).find('iframe').attr('src', src);
	});
/*./Video stop when Modal Close*/	




jQuery(".hoverized *").on("mouseenter", function (e) {
	jQuery(this).addClass("hoverized--active");
});

jQuery(".hoverized *").on("mouseout", function (e) {
	jQuery(this).removeClass("hoverized--active");
});