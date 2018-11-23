$(function() {
 $('body').hover(function(){
    
  // alert($(this).css('font-family')); //this will give you font-family
 

		
(function( w, $ ) {

  Fontized = function  ( fontName, conf ) {
    var $html = $('html'),
        $body = $('body'),
        fontFamilyName = fontName;

        // Throw error if fontName is not a string or not is left as an empty string
        if (typeof fontFamilyName !== 'string' || fontFamilyName === '') {
          throw 'A valid fontName is required. fontName must be a string and must not be an empty string.';
        }

    var defaults = {
        font: fontFamilyName,
        fontClass: fontFamilyName.toLowerCase().replace( /\s/g, '' ),
        success: function() {},
        failure: function() {},
        testFont: 'Courier New',
        testString: 'QW@HhsXJ',
        glyphs: '',
        delay: 50,
        timeOut: 1000,
        callback: $.noop
    };

    var config = $.extend( defaults, conf );
	
    var $tester = $('<span>' + config.testString+config.glyphs + '</span>')
        .css('position', 'absolute')
        .css('top', '-9999px')
        .css('left', '-9999px')
        .css('visibility', 'hidden')
        .css('fontFamily', config.testFont)
        .css('fontSize', '250px');

    $body.append($tester);

    var fallbackFontWidth = $tester.outerWidth();

    $tester.css('fontFamily', config.font + ',' + config.testFont);

    var failure = function () {
      $html.addClass("fontized--no-"+config.fontClass);
      if( config && config.failure ) {
        config.failure();
      }
      config.callback(new Error('Fontized timeout'));
      $tester.remove();
    };

    var success = function () {
      config.callback();
      $html.addClass("fontized--yes-"+config.fontClass);
      if( config && config.success ) {
        config.success();
      }
      $tester.remove();
    };

    var retry = function () {
      setTimeout(checkFont, config.delay);
      config.timeOut = config.timeOut - config.delay;
    };

    var checkFont = function () {
      var loadedFontWidth = $tester.outerWidth();

      if (fallbackFontWidth !== loadedFontWidth){
        success();
      } else if(config.timeOut < 0) {
        failure();
      } else {
        retry();
      }
    }

    checkFont();
    }
  })( this, jQuery );
  
  
  var allFonts = $(".fa, body").css('font-family'),
    strx   = allFonts.split(',');
    array  = [];

	array0 = array.concat(strx);
	
	//alert(array1);
	array1 = (array0[0]);
	

			//var myStringArray = [array1];
			var myStringArray = ["Open Sans", "sfj"];
			var arrayLength = myStringArray.length;
				for (var i = 0; i < arrayLength; i++) {
					//alert(myStringArray[i]);

				Fontized(myStringArray[i], {
				  success: function() {
					console.log(myStringArray[i] + " loaded successfully");
				//		   alert(myStringArray[i]);
				  },
				  failure: function() {
					console.log(myStringArray[i] + " failed to load");
				//   alert(myStringArray[i]);
				  }
				});
			}

			
			}); 
			
		});