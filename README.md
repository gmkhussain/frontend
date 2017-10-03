# Frontized 
[<span class="font-size: 20px;"><img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" style="position: relative;
    top: 5px;" height="32" /> @GMKHussain</span>](http://twitter.com/gmkhussain)

### Low-level Front-End Toolkit
I realised I was doing the same thing over and over when starting a new build so decided to create my own mini package which has the basics for starting a simple static or dynamic web site.
#### The first version of Frontized, (at that time named Bootstrap Extended, later referred to as Frontized) made its debut on Sep 10, 2015.

**NOTE** that this package has a dependency [Bootstrap 3.1](https://github.com/twbs/bootstrap) which already  installed as well.

Useful libraries and codes for [OneBrand™ Frontend Preview](http://gmkhussain.github.io/frontend/)
##### 1+1=3? : everything and takes it to a whole new level.

### ⌘ GH-Pages {ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤㅤ}



### Versions

| Versions          | Notes                                                  |           |
|------------------|--------------------------------------------------------|--------------|
| Frontized        |  Startup as a Bootstrap Extended |    |
| Frontized 2     | "Frontized" without the "Extended" referring to versions 2 and up.  |    |
| Frontized 4     |  Skipping 3 to avoid a confusion due to the misalignment of the router package's version which was already distributed as v3.3.0 |    |
| Frontized 5     |   |    |
| Frontized 5.5     |   |    |
| Frontized 6 MX     |   |    |
| Frontized 7     |   |    |
| Frontized 8 Pro    |   |    |
| Frontized 8.1    |   |    |
| Frontized X     |  There no 9 because... Seven ate Nine. * CLEVER AND SUBTLE MARKETING TRICK:   simply going to call it the Frontized X and not pronounce it as Frontized Ten. |    |






## addClass if URL is Root url (is Home page)
```html
	jQuery('body').toggleClass('is_index home', /\/$/.test(location.pathname));
```

## How to get page load time with jQuery
```
		//add in head tag as early as possible.
        <script>
		   var startTime = (new Date()).getTime();
		</script>
		
		<script src="{{asset('front/js/jquery-2.2.4.min.js')}}"></script>
		
		<script>
		   $(window).load(function () {
			   var endTime = (new Date()).getTime();
			   var millisecondsLoading = endTime - startTime;
			   // Put millisecondsLoading in a hidden form field
			   // or Ajax it back to the server or whatever.
			   console.log("Fully Loaded: " + millisecondsLoading);
		   });
		</script>
```

Additional file list:
+ Frontized Root
    + js
		+ [kodeized.js](#kodeized.js) - Coding made effortless.
		+ viewportchecker.js #viewportchecker.js
		+ swiper.jquery.min.js
    + css
        + stylized.css


## Installing

```html
<script src="js/kodeized.js"></script>
```

<img src="https://github.com/gmkhussain/frontend/blob/master/images/favicon.png" width="auto" height="40" alt="favicon">

## Newbies
* Well defined
```html
	<script>//When mouse out from website * add 'leavepopup' on <body>
		jQuery('body.leavepopup').mouseleave(function() {
			jQuery('#beforeExit').modal('show');
		});
	</script>
```


### On keypress do something on entire document but not inside inputs and textareas
```html
$(document).on('keypress', function(e) {
    var tag = e.target.tagName.toLowerCase();
    if ( e.which === 73 && tag != 'input' && tag != 'textarea') 
        alert("Do Something");
});
```

```html
//Find Tag Type *Optional
selectype = jQuery(".form-group > select").prop('tagName'); 
alert (selectype);
jQuery(".form-group > label").html("I am " + selectype); 

//Find Tag Type and Add Class on parent DIV
jQuery( ".form-group" ).find( "select" ).parent().addClass( "selectype-area" );
```
Demo: https://jsfiddle.net/gmkhussain/103bLo53/
<hr/>


```html
//move out all element with content from p tag
jQuery('footer p > *').unwrap();
alert("remove extra p tags from footer")
//remove extra p tags from footer
jQuery('footer p').remove();
```
Demo: https://jsfiddle.net/gmkhussain/ksh7jueq/
<hr/>



```html
runtime nav color change
```
demo: http://jsfiddle.net/gmkhussain/xd081nre/
<hr/>



### Multiple Instances of Swiper on Same page
```html
//can do that easier just with different classes
<div class="swiper-container s1"> ... </div>
<div class="swiper-container s2"> ... </div>
<div class="swiper-container s3"> ... </div>

<script>
	var swiper1 = new Swiper('.s1', { /* Options here */ })
	var swiper2 = new Swiper('.s2', { /* Options here */ })
	var swiper3 = new Swiper('.s3', { /* Options here */ })
</script>
```


### Multiple Instances of Swiper on Same page
```html
		var sliders = [];
			$('.swiper-container').each(function(index, element){
				$(this).addClass('s'+index);

				$('.s'+index).swiper();    
		
					var slider = new Swiper('.s'+index, { /* Options here */
								pagination: '.swiper-pagination',
								slidesPerView: '3',
								centeredSlides: false,
								paginationClickable: true,
								nextButton: '.swiper-button-next'+index,
								prevButton: '.swiper-button-prev'+index,
								spaceBetween: 15,
								autoplay: 2500,
								autoplayDisableOnInteraction: false,
								breakpoints: {
								1024: {
									slidesPerView: 3,
									spaceBetween: 40
								},
								768: {
									slidesPerView: 3,
									spaceBetween: 30
								},
								640: {
									slidesPerView: 1,
									spaceBetween: 20
								},
								320: {
									slidesPerView: 1,
									spaceBetween: 10
								}
							}
					});
					sliders.push(slider);
				});
```


* Script-less (HTML base)
```html
<section class="hdr-area" data-navitemlimit="7">...
```
<hr/>

## Bootcamp™
* Short Guideline

###Problem with position: fixed. ( i.e. https://codepen.io/pen/prQQpq ) 
```
// Problem
I was trying to fix, turning fixed on and off as a way of sticking header nav element to the top of the page as it scrolled by.

// Solution
-webkit-transform: translate3d(0, 0, 0)
-webkit-transform: translateZ(0);
will-change: transform;
	
Incase parent has above styling, child elements with position: fixed. will not working properly. 
    
```

### Encode Decode by jQuery
link: https://codepen.io/pen/OmEmaL
```html
var str = "My Text";
    var enc = window.btoa(str);
    var dec = window.atob(enc);
	console.log(enc);
```

### Change hash (#) for slash (/) or another (string) on url
```html
if (location.href.indexOf("#prevHash") > -1) {
	location.assign(location.href.replace('#prevHash', "#newHash")); 
 }
``` 

## Brats®
* Fixing
* Conflicts ( ie. Tab Nav Header Nav )
* Hard to use 
```html
//Inner Pages Filler Script
<script>
$(function () {
    $(window).scroll(function () {
        var $myDiv = $('.fill-mask');
        var y = $(this).scrollTop();
        $('#results').text(y);
        x = y - 3;
        $myDiv.animate({
            height: x
        }, 30);
    }).scroll();
});
</script>
```

### Links not working properly on Swiper slides

```
var swiper1 = new Swiper('.s1', {
		preventClicks: false,					
	});
```

```html
//On Click Trigger Click on another element after few second
	<script>
	jQuery(".nav-tabs li a").click(function() {
		  setTimeout(function() {
			jQuery("#allbtn").trigger("click");
		  }, 10);
		});
	</script>
```

## Hazing
* Unclear


## Overdose
* Speed-less
* Mess-up code

### Metabolic

```html
//Can Delete
_smoothState.js (folder)
_angular.html
_smoothstate.html
_svg.html
```


## Overload
* Optional 
* Extra files/scripts
* [viewportchecker.js] (viewportchecker.js) - Detects if an element is in the viewport and DO SOMETHING.

### Remove youtube branding after embedding video
```html
You can add ?modestbranding=1 to your url. That will remove the logo.
&showinfo=0 will remove the title bar.
```





###Credits:
* Bootstrap - http://getbootstrap.com
* jQuery - http://jquery.com
* Font awesome icon - http://fortawesome.github.io/Font-Awesome/
* Animate.css - http://daneden.me/animate
* FleXcroll.js - http://hesido.com/web.php?page=customscrollbar
* JScrollpane.js - http://jscrollpane.kelvinluck.com/


<hr/>
<img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/dd563b20465955.562fed481f5b4.gif" />
<img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" width="auto" height="32" /> (http://twitter.com/gmkhussain)
<hr/>

