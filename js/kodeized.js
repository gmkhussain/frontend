/* 
* Kodeized v1.06 MX
* Coding made effortless.
* This file contains works for many various kinds of tasks 
*/

/**preloader**/
jQuery(window).on('load', function() {
  jQuery('#preloader__status').fadeOut();
  jQuery('#preloader').delay(350).fadeOut('slow'); 
  jQuery('body').delay(350).css({'overflow':'visible'});
})
/**./preloader**/



/**preloader--off**/
if (jQuery("section, div").hasClass("preloader--off")) {
	jQuery("body").addClass("preloader--off");
}
/**./preloader--off**/



/**on menu open mode Trigger menu button when click body area
jQuery("#page-content").on('click', function(event) { 
		event.preventDefault(); 
		jQuery(".slide-navbar--active .navbar-toggle").click(); 
});
**/



/**hint**/
	/*
	 Ctrl + ~ for preview
	*/
jQuery(document).keydown(function(e) {
  if (e.keyCode == 192 && e.ctrlKey) {
    jQuery("html").toggleClass("hint");
  }
});
/**./hint**/


/**hint--gridized**/
	/*
	 Ctrl + ' for preview
	*/
jQuery(document).keydown(function(e) {
  if (e.keyCode == 222 && e.ctrlKey) {
	  
	var myGridized = '<div id="gridized"><div class="container"><div class="col-xs-1"><div></div></div><div class="col-xs-1"><div></div></div><div class="col-xs-1"><div></div></div><div class="col-xs-1"><div></div></div><div class="col-xs-1"><div></div></div><div class="col-xs-1"><div></div></div><div class="col-xs-1"><div></div></div><div class="col-xs-1"><div></div></div><div class="col-xs-1"><div></div></div><div class="col-xs-1"><div></div></div><div class="col-xs-1"><div></div></div><div class="col-xs-1"><div></div></div></div></div>';
	  
	  jQuery("#gridized").remove();
	  jQuery("html").toggleClass("hint--gridized");
	  jQuery("html.hint--gridized body").append(myGridized);
  }
});
/**./hint--gridized**/



/**Detect Localhost connection**/
if (location.hostname === "localhost" || location.hostname === "127.0.0.1"){
    jQuery("html").attr("connection", "local");
	}else{
		jQuery("html").attr("connection", "live");
	}
/**./Detect Localhost connection**/
	



/*addClass if URL is Root url (is Home page)*/
jQuery('body').toggleClass('is_index home', /\/$/.test(location.pathname));




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
	
	
	/*[.nav--activized] added*/
		/*
			Find domain.com/LastURLname in body and addClass .LastURLname.is-active
		*/
		window.setTimeout(function(){
			jQuery('.nav--activized').find("."+active_locLast).addClass("is-active");
				if (!$(".nav--activized nav *").hasClass(active_locLast)) {
					console.log(".nav--activized -> class not found same as Last URL string ");
				}

		}, 200);
	/*./[.nav--activized] added*/
	
	//jQuery('body nav').addClass(active_locLast + "-nav");

  var urlParameters = window.location.search; // returns the URL Parameters
	var split_urlParameters = urlParameters.split(/[ .=:;?!~,`"&|()<>{}\[\]\r\n/\\]+/);
	urlParametersLast= split_urlParameters[split_urlParameters.length-1];
	urlParametersLast2= split_urlParameters[split_urlParameters.length-2];
	jQuery('body').addClass("parameter--"+urlParametersLast);
	jQuery('body').addClass("parameter--"+urlParametersLast2);
	
  var urlHash = window.location.hash;
    var urlHashSplit = urlHash.split("#");
    var urlHashAfterSplit = "-no-hash";
    if (urlHashSplit[1] != null){
			urlHashAfterSplit = urlHashSplit[1];
		}
	jQuery('body').addClass("hashtag--"+urlHashAfterSplit);

	
});
/**./URL added on body tag as a Class**/




/**Show Modal dialog by Hash URL**/
  jQuery(function(){ /*shortcut for $(document).ready */
    var hashUrl = window.location.hash
	
	if(jQuery(hashUrl).hasClass("modal")){
		jQuery(window.location.hash).modal('show');
			jQuery('a[data-toggle="modal"]').click(function(){
			window.location.hash = jQuery(this).attr('data-target');
		});
	}

    function revertToOriginalURL() {
        var original = window.location.href.substr(0, window.location.href.indexOf('#'))
        history.replaceState({}, document.title, original);
    }

	if(jQuery(hashUrl).hasClass("modal")){
		jQuery('.modal').on('hidden.bs.modal', function () {
			revertToOriginalURL();
		});
	}
  });
/**./Show Modal dialog by Hash URL**/






/**AnimateCSS**/
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

/**./AnimateCSS**/





/**input-number**/
jQuery(document).ready(function() {
  window.inputNumber = function(el) {
   var min = el.attr('min') || false;
    var max = el.attr('max') || false;
    var els = {};
    els.dec = el.prev();
    els.inc = el.next();
    el.each(function() {
      init(jQuery(this));
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
jQuery(document).ready(function() {
	
	jQuery(".form-control").each(function(){
		if (jQuery(this).val() != ''){
			jQuery(this).addClass('has-value');
		}else{
			jQuery(this).removeClass('has-value');
		}
	});
});
/**./has-value added if .form-control have value**/			




/**fnc-fom label animation**/
	jQuery('.fnc-fom .form-control').focusout(function(){
	var text_value=jQuery(this).val();
     if(text_value!='')
       {
		jQuery(this).addClass("has-value");
        }else{ jQuery(this).removeClass("has-value"); }
	});
/**./fnc-fom label animation**/




/**fnc-upload**/
jQuery(".fnc-uplaod [type=file]").on("change", function() {
  /*
	Name of file will show in label as text *input#ID need to = label[for=#ID]
  */
  var file = this.files[0].name;
  var fileName = jQuery(this).attr("placeholder");
  if (jQuery(this).val() != "") {
    jQuery(this).next().text(file);
  } else {
    jQuery(this).next().text(fileName);
  }
});
/**./fnc-upload**/




/*Add class on parent of Checked input*/ /*	ie: https://codepen.io/pen/KqeGje	*/
jQuery(".checker-area input:checkbox").change(function() {
  if (jQuery(this).is(':checked')) {
    jQuery(this).parents(".checker-area").addClass("is-active");
  }else if (jQuery(this).prop('checked', false)){
	jQuery(this).parents(".checker-area").removeClass("is-active");
  }
});

	/*checker-area for radio button*/
	jQuery('.checker-area input:radio').click(function() {
		jQuery('input:radio[name='+ jQuery(this).attr('name')+']').parents(".checker-area").removeClass('is-active');
		jQuery(this).parents(".checker-area").addClass('is-active');
	});

/*./Add class on parent of Checked input*/





/**detect page height**/
jQuery(window).on('load', function() {

		var footerHeight = jQuery("footer").height();
		jQuery("footer").attr("data-height", footerHeight );
		//console.log(footerHeight);
		
	var windowHeight = jQuery(window).height();
	var documentHeight = jQuery(document).height();
	var bodyHeight = jQuery('body').height();
	
	var bodyHeight_withFooter = bodyHeight + footerHeight;
	var documentHeight_withFooter = documentHeight + footerHeight;
	
	
	console.log("window height:" + windowHeight );
	console.log("document height:" + documentHeight + " with footer " + documentHeight_withFooter );
	console.log("Body height:" + bodyHeight + " with footer " + bodyHeight_withFooter );

		/*
		 Place footer at bottom only if page is "short"
		*/
		if( documentHeight_withFooter < windowHeight   || bodyHeight_withFooter < windowHeight ){
			console.log("--> short page");
			jQuery("body").addClass("page-height-short");
		}else{
			jQuery("body").removeClass("page-height-short");
			console.log("--> long page");
		}
		
		
		/*
		footerHeight: for short pages, style required as per site theme.
		*/
		var footerHeight = jQuery("footer").height();
			jQuery("footer").attr("data-height", footerHeight );
		console.log("Footer height: " +footerHeight);


		/*section-centralized
		- highlight unique section when it is center of window */	
		  
		 jQuery(window).scroll(function() {
			var scrollMiddle = jQuery(window).scrollTop() + (windowHeight/2);
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
		/*./section-centralized*/  
  

		/*add .in-view class when element in viewport*/
		function isScrolledIntoView(elem) {
			var docViewTop = jQuery(window).scrollTop();
			var docViewBottom = docViewTop + jQuery(window).height();

			var elemTop = jQuery(elem).offset().top;
			var elemBottom = elemTop + jQuery(elem).height();

			return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
		}

		jQuery(window).scroll(function(){
		   jQuery('header, section, footer, [class*="-area"], div').each(function () {
			  if (isScrolledIntoView(this) === true){
				  jQuery(this).addClass("/ in-view");
			  }else{
				  jQuery(this).removeClass("/ in-view");
			  }
		   });
		});
		/*./add .in-view class when element in viewport*/

});
/**./detect page height**/



/*
////////XTRA GPv3 SCRIPTS /////
jQuery('.carousel').carousel({
  interval: 8000
})
*/

/*
//Multipal slide//
jQuery('.testimoCarousel .item').each(function(){
  var next = jQuery(this).next();
  if (!next.length) {
    next = jQuery(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo(jQuery(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo(jQuery(this));
  }
  else {
  	jQuery(this).siblings(':first').children(':first-child').clone().appendTo(jQuery(this));
  }
  
});






//Clients Slider
jQuery('.carousel[data-type="multi"] .item').each(function(){
  var next = jQuery(this).next();
  if (!next.length) {
    next = jQuery(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo(jQuery(this));
  
  for (var i=0;i<2;i++) {
    next=next.next();
    if (!next.length) {
    	next = jQuery(this).siblings(':first');
  	}
    
    next.children(':first-child').clone().appendTo(jQuery(this));
  }
});



//Scroll TOP and Down CASE STUDIES PAGE
var amount = '';

function scroll() {
    jQuery('.case-snap').animate({
        scrollTop: amount
    }, 100, 'linear',function() {
        if (amount != '') {
            scroll();
        }
    });
}


*/



/**sticky4all**/
if (jQuery(".sticky")[0]){
	var $window = jQuery(window),
       $stickyEl = jQuery('.sticky'),
       elTop = $stickyEl.offset().top;

   $window.scroll(function() {
        $stickyEl.toggleClass('sticky--active', $window.scrollTop() > elTop);
    });
} else { /* do something if class does not exist */ }
/**./sticky4all**/	



	
/**Sticky Header**/
jQuery(window).scroll(function() {
if (jQuery(this).scrollTop() > 1){
    jQuery('.hdr--sticky').addClass("hdr--sticky-active");
	jQuery('body').addClass("scrollized");
  }
  else{
    jQuery('.hdr--sticky').removeClass("hdr--sticky-active");
	jQuery('body').removeClass("scrollized");
  }
  var halfWindowHeight = jQuery(window).height() / 2 ;
   if (jQuery(window).scrollTop()  > halfWindowHeight ) {        
        jQuery('body').addClass("scrollized--half");
    }else{
		jQuery('body').removeClass("scrollized--half");
	}
	
});
/**./Sticky Header**/




/**detect scrollized direction --up & --down **/
var lastScrollizedTop = 0;
jQuery(window).scroll(function(event) {
  var scrollizedTop = jQuery(this).scrollTop();
  if (scrollizedTop > lastScrollizedTop) {
    jQuery("body").removeClass("scrollized--up");
    jQuery("body").addClass("scrollized--down");
  } else {
    jQuery("body").removeClass("scrollized--down");
    jQuery("body").addClass("scrollized--up");
  }
  lastScrollizedTop = scrollizedTop;
});
/**./detect scrollized direction --up & --down **/





/**nav-folderized**/
jQuery(".nav-folderized h4").click(function(){
	jQuery(this).parent(".nav").toggleClass("open"); 
	jQuery('html, body').animate({ scrollTop: jQuery(this).offset().top - 170 }, 1500 );
});
/**./nav-folderized**/



  
/**Blind Footer**/
jQuery( document ).ready(function() {
	var ftrBlind = jQuery(".ftr-blinder .ftr--blind").height();
	jQuery(".ftr-blinder footer").css("padding-top", ftrBlind );
});
/**./Blind Footer**/




/**navbar--open when navbar-toggle open add class on body**/
jQuery(".navbar-toggle").on("click", function (e) { jQuery("body").toggleClass(" --- navbar--open"); });
/**./navbar--open when navbar-toggle open add class on body**/



/**find current page link and add .active class on navbar link**/
    jQuery(document).ready(function () {
        var url = window.location;
        jQuery('ul.nav a[href="'+ url +'"]').parent().addClass('active');
        jQuery('ul.nav a').filter(function() {
             return this.href == url;
        }).parent().addClass('active');
    });
/**./find current page link and add .active class on navbar link**/




/**add class on multilevels of dropdown in navbar **/	
/*
ie: https://codepen.io/pen/RgdgGy
*/
var navLevel1 = $( "ul.nav" );
navLevel1.addClass( " --- level1" );

jQuery(".level1 > li > ul").addClass(" --- level2");
jQuery(".level2 > li > ul").addClass(" --- level3");
/**./add class on multilevels of dropdown in navbar **/	
	



/**[.slider--hash] Slider with hashtag URL ID**/
/***-- slider .item ID required --***/
	var slideUrl = document.location.toString();
	if (slideUrl.match('#')) {
		jQuery('.slider--hash .item.active').removeClass('active');
			var slideIndex = slideUrl.split('#')[1];
			jQuery('#' + slideIndex).addClass('active');
		}
		
		jQuery('.slider--hash').bind('slid', function (e) {
			var item = jQuery('.slider--hash .item.active').attr('id');
			
			if (item) window.location.hash = "#" + item;
		});
/**./[.slider--hash] Slider with hashtag URL ID**/



/**.dwn-scroll**/
jQuery(".dwn-scroll").click(function() {
    jQuery('html, body').animate({
        scrollTop: jQuery(".dwn-scroll").offset().top
    }, 1500);
});
/**./.dwn-scroll**/




/**.tab-animate**/
/*
Tab slide up/dwon on click
*/
jQuery(".tab-animate li").click(function() {
   jQuery('html, body').animate({ scrollTop: jQuery(".tab-content").offset().top - 170 }, 1500 );
});
/**./.tab-animate**/




/**.active-tab-move-area**/
	/*
	Active Tab Nav move to center on click
	*/
    jQuery(document).ready(function(){
      jQuery(".active-tab-move-area .nav-tabs li").click(function() {
        jQuery(".active-tab-move-area .nav-tabs li.active").removeClass("c_active");
		// Remove any "active" class
		// jQuery(".our-values .nav-tabs li.active > div").css("display","block");
	    var $active = jQuery(this).detach().addClass("c_active"),
            $lis = jQuery(".active-tab-move-area .nav-tabs li");
        $active.insertBefore($lis.eq(Math.floor($lis.length / 2)));
      });
    });
/**./.active-tab-move-area**/

	
	
/**[.tabs-change--hover] tabs change on hover without click**/
	jQuery(document).on('mouseenter', '.tabs-change--hover [data-toggle="tab"]', function () {
		jQuery(this).tab('show');
    });

	/*
	 Dropdown items in nav tabs can get stuck in .active mode
	*/
	jQuery('.tabs-change--hover  .nav-tabs').on('shown.bs.tab', 'a', function (e) {
		if (e.relatedTarget) {
			jQuery(e.relatedTarget).removeClass('active');
		}
	});
/**./[.tabs-change--hover] tabs change on hover without click**/	



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




/**scrollToTop**/
	jQuery(document).ready(function(){
		/*
		 Check to see if the window is top if not then display button
		*/
		jQuery(window).scroll(function(){
			if (jQuery(this).scrollTop() > 100) {
				jQuery('.scrollToTop').fadeIn();
			} else {
				jQuery('.scrollToTop').fadeOut();
			}
		});
		
		/*
		 Click event to scroll to top
		*/
		jQuery('.scrollToTop').click(function(){
			jQuery('html, body').animate({scrollTop : 0},800);
			return false;
		});
	});

	/*if stop scrolling '.ScrollToTop' push to corner*/
			jQuery(function() {
				var $output = jQuery( ".scrollToTop .fa" ),
					scrolling = "<span id='scrolling'>Scrolling</span>",
					stopped = "<span id='stopped'>Stopped</span>";

					jQuery( window ).scroll(function() {
						$output.html( scrolling );
							jQuery('.scrollToTop').removeClass('has-stop');

						clearTimeout( $.data( this, "scrollCheck" ) );
						
						$.data( this, "scrollCheck", setTimeout(function() {
							$output.html( stopped );
							setTimeout(function() {
								jQuery('.scrollToTop').addClass('has-stop');
							}, 2000);
							
						}, 250) );
					});
			});
/**./scrollToTop**/
			


/**.btn-effect--ripple Button ripple effects on click**/
jQuery(".btn-effect--ripple button, .btn-effect--ripple .btn, .link-effect--ripple a").click(function (e) {
  jQuery(".ripple").remove();/*Remove any old one*/
  var posX = jQuery(this).offset().left,
      posY = jQuery(this).offset().top,
      buttonWidth = jQuery(this).width(),
      buttonHeight =  jQuery(this).height();
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
/**./.btn-effect--ripple Button ripple effects on click**/




/**links scrolling animation**/
	jQuery(function() {
		jQuery('.scrolink a').click(function() {
		  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = jQuery(this.hash);
			target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
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




/**Inner Pages Filler Script**/
jQuery(function () {
    jQuery(window).scroll(function () {
        var $myDiv = jQuery('.fill__move');
        var y = jQuery(this).scrollTop();
        jQuery('#fill__value').text(y);
		
		/*Y Round by 100*/
		var Yroundby100 = Math.floor(y / 100) * 100;  
		
		jQuery('html').attr("y-pos",Yroundby100);
        x = y - 3;
        $myDiv.animate({
            height: x
        }, 30);
    }).scroll();
});
/**./Inner Pages Filler Script**/




/**section height =screen**/
jQuery(document).ready(function(){
    jQuery('.screen-area').css("min-height", jQuery(window).height() + 10);
});
/**./section height =screen**/




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
          return jQuery('#popoverExampleTwoHiddenContent').html();
        },
        title: function() {
          return jQuery('#popoverExampleTwoHiddenTitle').html();
        }
    });

});






/**TH text add on TDs for attribute mobile responsive**/
jQuery('table th').each(function (i) {
	//adding 0 to 1
	i=i+1;
	tableTitle = jQuery( "table th:nth-child("+i+")" ).text();
	jQuery( "table th:nth-child("+i+")" ).attr("for", tableTitle);
	jQuery( "table td:nth-child("+i+")" ).attr("for", tableTitle);
	//i=i+1;
});
/**./TH text add on TDs for attribute mobile responsive**/





/**More Navbar Item Limitation**/
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
  
  jQuery(this).addClass("knav" +i+"");
});  
});
/**./More Navbar Item Limitation**/




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




/**.tabs-more-area**/
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
/**./.tabs-more-area**/




/**handle nav-tabs by url**/
	jQuery(document).ready(function() {

			var tabs_url = window.location.hash; // returns the URL Parameters
			var split_tabs_url= tabs_url.split(/[ .=:;?!~,`"&|()<>{}\[\]\r\n/\\]+/);
			tabs_urlLast= split_tabs_url[split_tabs_url.length-1];
			
			if( tabs_urlLast == "" ){
				console.log("Page has no #Hashtag " + tabs_urlLast);
			}else{
				console.log("#Hashtag value is -> " + tabs_urlLast );
			
				jQuery('.nav-tabs-url-handler .nav-tabs li').each(function(){
						jQuery(".tab-pane").removeClass('active');
						jQuery(".tab-pane"+tabs_urlLast).addClass('active');
						
						jQuery(this).removeClass('active');
						jQuery(this).find('[href="'+tabs_urlLast+'"]').parent("li").addClass('active');
						//jQuery(this).parents("li").removeClass('active');
				});		
		}
	});
/**./handle nav-tabs by url**/




/**read more read less content**/
/*
ie: http://codepen.io/pen/QqNrzm
*/
jQuery('.moreless-area .moreless-btn').click(function() {

  var lessData = jQuery(this).attr("data-less");

  if (jQuery(this).hasClass("less")) {
    jQuery(this).removeClass("less");
    jQuery(this).html("Read more");
    jQuery(this).parent().children(".moreless").addClass("on");
  } else {
    jQuery(this).addClass("less");

		if (lessData != null){
			jQuery(this).html(lessData);
		}else{
			jQuery(this).html("read less");
		}

    jQuery(this).parent().children(".moreless").removeClass("on");
  }
    jQuery('html, body').animate({	scrollTop: jQuery(this).parent(".moreless-area").offset().top	}, 800);
	
});
/**./read more read less content**/





/**.accordion active add class**/
jQuery('.panel-heading a').click(function() {
  jQuery('.panel-default').removeClass('active');
  jQuery(this).parents('.panel-default').addClass('active');
});
/**./.accordion active add class**/




/**smart alert bar**/
	jQuery('.alert-pin-btn').click(function() {
		jQuery(this).parent('.alert-bar').toggleClass('alert--pinned');
	});
/**./smart alert bar**/



/**navbar-move active navbar item**/
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
/**./navbar-move active navbar item**/




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




/**Live Detect Browser Size**/
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
/**./Live Detect Browser Size**/




/**making a specific page unresponsive**/
jQuery( document ).ready(function() {
	
	var rwdDisableCode = '<meta name="viewport" content="width=1440, initial-scale=0,maximum-scale=1">';
	var rwdDisableMode = jQuery("section, div").hasClass("page--no-rwd");

	/*
	type: url.com?norwd -> disable responsive mode "?norwd" query string
	*/
	if (jQuery("body").hasClass("parameter--norwd")) {
		jQuery("body").append(rwdDisableCode);
	  }
	  
	if (rwdDisableMode) {
	  if (!jQuery("body").hasClass("parameter--rwd")) {
		jQuery("body").append(rwdDisableCode);
	  }
	}
});
/**./making a specific page unresponsive**/



/**Video stop when Modal Close**/
	jQuery('.modal').on('hidden.bs.modal', function () {
		var src = jQuery(this).find('iframe').attr('src');
		jQuery(this).find('iframe').attr('src', '');
		jQuery(this).find('iframe').attr('src', src);
	});
/**./Video stop when Modal Close**/



/**hoverized**/
jQuery(".hoverized *").on("mouseenter", function (e) {
	jQuery(this).addClass("hoverized--active");
});

jQuery(".hoverized *").on("mouseout", function (e) {
	jQuery(this).removeClass("hoverized--active");
});
/**./hoverized**/



/**Detect iFrame embedding, Image & video inside DIV**/
jQuery("div").each(function (checkMediaType) {
	jQuery( this ).contents().find( "img" ).parent("div").addClass( "has-image" );
	jQuery( this ).contents().find( "iframe" ).parent("div").addClass( "has-iframe" );
	jQuery( this ).contents().find( "video" ).parent("div").addClass( "has-video" );
});
/**./Detect iFrame embedding, images & video inside DIV**/



/**Detecting AJAX request start and loaded**/
jQuery(document).ajaxStart(function() {
	jQuery("body").removeClass("ajax--loaded").addClass("ajax--loading"); 
});

jQuery(document).ajaxStart(function() {	
	jQuery("body").removeClass("ajax--loading").addClass("ajax--loaded");
});
/**./Detecting AJAX request start and loaded **/



/**selectized**/
	jQuery(".selectized").click(function(a){
		jQuery("body").toggleClass("selectized--open");
	});

	jQuery(".selectized-option").click(function(e) {	
		/*
			Not allow to do something ( i.e. on click close selectized )
		*/
		e.stopPropagation();
	});
									
	jQuery(document).on("click",".selectized--open", function(e) {
		
	 /*
		detecting seleteized open state or close option.
	 */
		var Checker = $(".selectized-option").hasClass("in");
		var Target = $(".selectized-option");
		if (Checker){
			Target.removeClass("in");
			jQuery("body").removeClass("selectized--open");
				}
			return false;
	});
/**selectized**/



/**time--day & --night **/
now = new Date();
hour = now.getHours();
if (hour > 4 && hour < 18) {
  jQuery("body").addClass(" ___ time--day");
} else {
  jQuery("body").addClass(" ___ time--night");
}
/**./time--day & --night **/




/**image-orientation-checker**/
jQuery('.image-orientation-checker img').each(function(){
    jQuery(this).addClass(this.width > this.height ? 'orientation--landscape' : 'orientation--portrait');
});
/**./image-orientation**/




/**zoomized**/
var zoomizedIcon = jQuery(".zoomized button")
jQuery(".zoomized").click(function(){
  jQuery(this).toggleClass("is-active");
});
/**./zoomized**/




/**count-child**/
/*
 NOTE: First child should be <div>
 i.e. https://codepen.io/pen/Mvexoz
*/
jQuery(".count-child").each(function() {
  
  countChildGroup = jQuery(this);
  
  var countChildLength = jQuery(countChildGroup).children("div").length;
  var totalCountChild = jQuery(countChildGroup).addClass(
    "count-child-total-" + countChildLength
  );

});
/**./count-child**/













/**Detecting Browser, Device & OS detail**/
function browser_and_OS(u) {
  var ua = u.toLowerCase(),
    is = function(t) {
      return ua.indexOf(t) > -1;
    },
    g = "gecko",
    w = "webkit",
    s = "safari",
    o = "opera",
    m = "mobile",
    h = document.documentElement,
    b = [
      !/opera|webtv/i.test(ua) && /msie\s(\d)/.test(ua)
        ? "ie ie" + RegExp.$1
        : is("firefox/2")
          ? g + " ff2"
          : is("firefox/3.5")
            ? g + " ff3 ff3_5"
            : is("firefox/3.6")
              ? g + " ff3 ff3_6"
              : is("firefox/3")
                ? g + " ff3"
                : is("gecko/")
                  ? g
                  : is("opera")
                    ? o +
                        (/version\/(\d+)/.test(ua)
                          ? " " + o + RegExp.$1
                          : /opera(\s|\/)(\d+)/.test(ua)
                            ? " " + o + RegExp.$2
                            : "")
                    : is("konqueror")
                      ? "konqueror"
                      : is("blackberry")
                        ? m + " blackberry"
                        : is("android")
                          ? m + " android"
                          : is("chrome")
                            ? w + " chrome"
                            : is("iron")
                              ? w + " iron"
                              : is("applewebkit/")
                                ? w +
                                    " " +
                                    s +
                                    (/version\/(\d+)/.test(ua)
                                      ? " " + s + RegExp.$1
                                      : "")
                                : is("mozilla/") ? g : "",
      is("j2me")
        ? m + " j2me"
        : is("iphone")
          ? m + " iphone"
          : is("ipod")
            ? m + " ipod"
            : is("ipad")
              ? m + " ipad"
              : is("mac")
                ? "mac"
                : is("darwin")
                  ? "mac"
                  : is("webtv")
                    ? "webtv"
                    : is("win")
                      ? "win" + (is("windows nt 6.0") ? " vista" : "")
                      : is("freebsd")
                        ? "freebsd"
                        : is("x11") || is("linux") ? "linux" : "",
      "js"
    ];
  c = b.join(" ");
  h.className += " " + c;
  return c;
}
browser_and_OS(navigator.userAgent);
/**./Detecting Browser, Device & OS detail**/