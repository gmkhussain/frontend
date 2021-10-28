const mockupMatch = function() {

    let active_locLastParent2 ;
	let active_locLastParent ;
	let active_locLast ;

    let urlParametersLast;
    let urlParametersLast2

    console.log("mockupMatch")
    let htmlTag = document.getElementsByTagName("html")[0];
    let bodyTag = document.getElementsByTagName("body")[0]
    


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
        var flag = 0;
        if (e.keyCode == 191 && e.ctrlKey) {
          
          // remove before create new one.	
          var mockupMatcherExist = document.getElementById("mockupMatcher");
        
          if( document.contains( mockupMatcherExist ) ){
            mockupMatcherExist.remove(); return false;
          }
      
          var fileName = "_mockup/" + active_locLast + ".jpg";
          var mockupMatcherContent = `<div id="mockupFile" style="background-image:url('${fileName}'); position: absolute; top: 0; width: 100%; z-index:898 ;height: 1000vh; opacity: .2 ;background-position: center top; background-repeat: no-repeat; background-size: 1600px;"></div>
          <style>
            body:hover #mockupMatcher {
              opacity: 0;
              z-index: -555;
            }
          </style>`;
      
          var mockupMatcherDiv = document.createElement('div');
              mockupMatcherDiv.setAttribute("id", "mockupMatcher");
              mockupMatcherDiv.innerHTML = mockupMatcherContent;
              bodyTag.appendChild(mockupMatcherDiv);
       
              htmlTag.classList.toggle("hint--mockup");
        }
      });
}

export default mockupMatch;