<?php
//his file will connect us to the database.
$user = "root";
// For MAC $pass = "root";
$pass = "root"; //For PC $pass = "";
$url = "localhost";
$db = "db_portfolio_images";

$link = mysqli_connect($url, $user, $pass, $db, "8888"); //PC
//For MAC include port address $link = mysqli_connect($url, $user, $pass, $db, "8888");

//Check Connection error
if(mysqli_connect_errno()){
  printf("Connect Failed: %s\n", mysqli_connect_error());
  exit();
}

echo "connected!"

?>
