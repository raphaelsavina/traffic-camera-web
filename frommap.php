<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<title>Dublin Traffic Cams</title>
	<meta name="description" content="Mobile optimised Dublin Traffic Cams" />
	<meta name="keywords" content="Dublin, traffic, camera, livedrive, AA roadwatch, traffic cams" />
	<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />

	<script src="js/jquery-1.6.1.min.js"></script>

	<!--Database scripting, based on html5rocks example-->
	<script src="js/database.js"></script>

	<!--Analytics-->
	<script type="text/javascript">
	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-23963982-1']);
	  _gaq.push(['_trackPageview']);
	  (function() {
	    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();
	</script>
	
	<!--Get the image filename, place in storage and redirect-->
	<script>
	$(document).ready(function () {
		var name=$("div").attr("id");
		addFilenames(name);
		window.location.href = "index.html";
	});
	</script>
</head>
<body>
<?php
$webcam = $_GET['webcam'];
if ($webcam == "") {
	$webcam = "Site0Camera136";
};
echo "<div id=\"".$webcam."\"></div>";
?>
</body>
</html>