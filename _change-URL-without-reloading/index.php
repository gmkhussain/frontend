<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>

<button type="button" onclick="ChangeUrl('Page1', 'script.php');" >Click Me</button>
<button type="button" onclick="ChangeUrl('Page1', 'index.php');" >CLOSE X</button>

<p id="content"></p>

<script type="text/javascript">
    $(document).ready(function(){
        $("button").click(function(){
            $.ajax({
                type: 'POST',
                url: 'script.php',
                success: function(data) {
              //      alert(data);
                    $("p").text(data);
                }
            });
		});
	});
</script>


<script type="text/javascript">
	function ChangeUrl(title, url) {
		if (typeof (history.pushState) != "undefined") {
			var obj = { Title: title, Url: url };
			history.pushState(obj, obj.Title, obj.Url);
		} else {
			alert("Browser does not support HTML5.");
		}
	}
</script>

