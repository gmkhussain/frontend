/*! 
* Kodeized v4.5
* Coding made effortless.
* This file contains works for many various kinds of tasks 
*/


/*!
  Global Variables
*/
var htmlTag = document.getElementsByTagName("html")[0];
var bodyTag = document.getElementsByTagName("body")[0];







/**!preloader**/
window.addEventListener('load', function() {
  console.log('✨ All assets are loaded')
  var preloader = document.getElementById("preloader");
  var preloader__status = document.getElementById("preloader__status");
  
  if ( document.body.contains( preloader ) && document.body.contains( preloader__status ) ) {
		preloader.classList.add("hide");
  		preloader__status.classList.remove("hide");
	} else {
		console.warn("🌀 Preloader doesn't exsit!");
	}
});
/**./preloader**/






/**!hint**/
	/*
	 Ctrl + ~ for preview
  */
 function hintFn(e) {
  var evtobj = window.event? event : e;
  if (evtobj.keyCode == 192 && evtobj.ctrlKey){
    htmlTag.classList.toggle("hint");
  }
}

document.onkeydown = hintFn;
/**./hint**/









/**!hint--gridized**/
	/*!
	 Ctrl + ' for preview
	*/
  function gridizedFn(e) {
    var evtobj = window.event? event : e;
    if (evtobj.keyCode == 222 && evtobj.ctrlKey){
    
      var gridizedContent = '<div class="container"><div class="col-xs-1"><div></div></div><div class="col-xs-1"><div></div></div><div class="col-xs-1"><div></div></div><div class="col-xs-1"><div></div></div><div class="col-xs-1"><div></div></div><div class="col-xs-1"><div></div></div><div class="col-xs-1"><div></div></div><div class="col-xs-1"><div></div></div><div class="col-xs-1"><div></div></div><div class="col-xs-1"><div></div></div><div class="col-xs-1"><div></div></div><div class="col-xs-1"><div></div></div></div>';
      
      htmlTag.classList.toggle("hint--gridized");
      
      /*
        Checking if already exist then remove it,
        before creating new one.
      */
      var gridizedExist = document.getElementById("gridized");
      if( document.contains( gridized ) ){
        gridizedExist.remove();
      }
      
      /* Creating Bootstrap Grid for hint */
      var gridizedNew = document.createElement("div");
          gridizedNew.setAttribute("id", "gridized");
          gridizedNew.innerHTML = gridizedContent;
          document.body.appendChild(gridizedNew);
    }
  }
  
  document.onkeydown = gridizedFn;
/**./hint--gridized**/












/*!
  Detect orientation change of device
 */
    window.addEventListener( "orientationchange", function() {
      /*
        get new orientation number
      */
      bodyTag.setAttribute('data-orientation', window.orientation)
    }, false );
/* ./Detect orientation change of device */













/**! URL added on body tag as a Class**/
document.addEventListener('DOMContentLoaded', function() {

	var locReal = window.location.pathname; // returns the full URL
	
	/* removing file extention i.e .html .php etc. */
	function removeUrlExtFn(urlExt){
		return locReal.split(urlExt)[0];
	}
	
	var locReal = removeUrlExtFn(".html");
	var locReal = removeUrlExtFn(".php");
	
	var loc = locReal.replace(".", "/");
	var split_loc = loc.split('/');
	
	
	active_locLastParent2 = split_loc[split_loc.length-3];
	active_locLastParent = split_loc[split_loc.length-2];
	active_locLast = split_loc[split_loc.length-1]; 
	
  
	bodyTag.classList.add(active_locLastParent2 + "-page");
	bodyTag.classList.add(active_locLastParent + "-page");
	bodyTag.classList.add(active_locLast + "-page");
	

  var urlParameters = window.location.search; /*! returns the URL Parameters */
	var split_urlParameters = urlParameters.split(/[ .=:;?!~,`"&|()<>{}\[\]\r\n/\\]+/);
	urlParametersLast= split_urlParameters[split_urlParameters.length-1];
	urlParametersLast2= split_urlParameters[split_urlParameters.length-2];

  bodyTag.classList.add("parameter--"+urlParametersLast);
	bodyTag.classList.add("parameter--"+urlParametersLast2);
	
  var urlHash = window.location.hash;
    var urlHashSplit = urlHash.split("#");
    var urlHashAfterSplit = "-no-hash";
    if (urlHashSplit[1] != null){
			urlHashAfterSplit = urlHashSplit[1];
		}
	bodyTag.classList.add("hashtag--"+urlHashAfterSplit);
  
});
/**!./URL added on body tag as a Class**/















bodyTag.addEventListener("keydown", function (e) {

  /*
    ` Ctrl + / `
  */
  if (e.keyCode == 191 && e.ctrlKey) {
	
	// remove before create new one.	
	var mockupMatcherExist = document.getElementById("mockupMatcher");
      if( document.contains( mockupMatcherExist ) ){
        mockupMatcherExist.remove();
    }

  var fileName = "_mockup/" + active_locLast + ".jpg";
  var mockupMatcherContent = '<div id="mockupFile" style="background-image:url(' + fileName + '); position: absolute; top: 0; width: 100%; z-index:898 ;height: 1000vh; opacity: .2 ;background-position: center top; background-repeat: no-repeat;"></div>';

	var mockupMatcherDiv = document.createElement('div');
	  	mockupMatcherDiv.setAttribute("id", "mockupMatcher");
		  mockupMatcherDiv.innerHTML = mockupMatcherContent;
		  bodyTag.appendChild(mockupMatcherDiv);

		  htmlTag.classList.toggle("hint--mockup");

  }
});








/*!
  Scroll To View
  Usage: <a onclick="scrollToViewFunc('sectionId')">Click me</a>
*/
function scrollToViewFunc(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
	  behavior: 'smooth'
  });
}
/*./Scroll To View*/




















/**! Detecting Browser, Device & OS detail **/
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
/**./Detecting Browser, Device & OS detail **/
