<?php
// What if cam is empty... We need a failsafe.
$webcam = $_GET['cam'];
$nb = $_GET['nb'];
if ($nb == false) {
	$nb=0;
};
$user="root";
$password="xxxxxxxxxx";
$database="traffic_cam";
mysql_connect(localhost,$user,$password);
@mysql_select_db($database) or die( "Unable to select database");
$query="SELECT * FROM webcamimage WHERE webcam='$webcam' ORDER BY timestamp DESC";
$result=mysql_query($query);
// Check number of row to get only the oldest one if asking for more... TO DO
$name=mysql_result($result, $nb, "blob");
$filename = $name.".jpg";
$fullPath = $webcam."/".$filename;
$fsize = filesize($fullPath);
//If image missing use placeholder.jpg
if ($fsize == 0){
	$filename = "placeholder.jpg";
	$fullPath = $filename;
	$fsize = filesize($fullPath);
} 
// echo $query;
// echo "<br>";
// echo $fullPath;
// <img src="http://192.168.43.10/~raphaels/test.php?cam=Tallaghtluas&nb=5">
header("Content-Type: image/jpg"); 
header('Content-Disposition: filename=$filename');
header("Content-Transfer-Encoding: binary"); 
header("Content-Length: ".$fsize); 
readfile($fullPath);
?>