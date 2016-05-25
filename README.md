# Bootstrap 3 Extended ver 1.4
###Low-level Front-End Toolkit
Useful libraries and codes for [OneBrand™ Frontend Preview](http://gmkhussain.github.io/frontend/)

###GH-Pages {ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤㅤ}

Additional file list:
+ Root
    + js
		+ [kodeized.js](#kodeized.js) - Coding made effortless.
		+ viewportchecker.js #viewportchecker.js
		+ swiper.jquery.min.js
    + css
        + css_browser_selector.js


## Installing

```html
<script src="js/kodeized.js"></script>
```

<img src="https://github.com/gmkhussain/frontend/blob/master/images/favicon.png" width="auto" height="40" alt="favicon">

###Newbies
* Well defined
```html
	<script>//When mouse out from website * add 'leavepopup' on <body>
		jQuery('body.leavepopup').mouseleave(function() {
			jQuery('#beforeExit').modal('show');
		});
	</script>
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


* Script-less (HTML base)
```html
<section class="hdr-area" data-navitemlimit="7">...
```
<hr/>

###Bootcamp™
* Short Guideline

###Brats®
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

###Hazing
* Unclear


###Overdose
* Speed-less
* Mess-up code

####Metabolic

```html
//Can Delete
_smoothState.js (folder)
_angular.html
_smoothstate.html
_svg.html
```


###Overload
* Optional 
* Extra files/scripts
* [viewportchecker.js] (viewportchecker.js) - Detects if an element is in the viewport and DO SOMETHING.



###Credits:
* Bootstrap - http://getbootstrap.com
* jQuery - http://jquery.com
* Font awesome icon - http://fortawesome.github.io/Font-Awesome/
* Animate.css - http://daneden.me/animate
* FleXcroll.js - http://hesido.com/web.php?page=customscrollbar
* JScrollpane.js - http://jscrollpane.kelvinluck.com/


<hr/>
<img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/dd563b20465955.562fed481f5b4.gif" />
<br/>
[<img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" width="auto" height="32" /> @GMKHussain](http://twitter.com/gmkhussain)
<hr/>