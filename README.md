# Bootstrap 3 Extended ver 1.3
For [Frontend](#frontend) 


Additional file list:
* [kscript.js](#kscript.js)
* viewportchecker.js
* css_browser_selector.js
* swiper.jquery.min.js


## Installing

```html
<script src="js/kscript.js"></script>
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

* Script-less (HTML base)
```html
<section class="hdr-area" data-navitemlimit="7">...
```

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

###Hazing
* Unclear


###Overdose
* Speed-less
* Mess-up code

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

<hr/>
<img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/dd563b20465955.562fed481f5b4.gif" />
<br/>
[<img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" width="auto" height="32" /> Coded by @GMKHussain](http://twitter.com/gmkhussain)
<hr/>