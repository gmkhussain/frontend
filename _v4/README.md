# Version 4


### TypeError: $.ajax(…) is not a function in Boostrap

The problem is by default slim.jquery.js doesn't have the ajax. slim build of jQuery, which had some things removed, ajax being one of them.

Need download the regular version of jQuery(http://jquery.com/%20download/#jquery) include it.