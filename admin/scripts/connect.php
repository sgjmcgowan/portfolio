<?php

$user = "melissat_Stewart";
$pass = "A5thofvodka";
$url = "localhost";
$db = "melissat_db_portfolio_images";

$link = mysqli_connect($url, $user, $pass, $db);

if(mysqli_connect_errno()){
  printf("Connect Failed: %s\n", mysqli_connect_error());
  exit();
}

?>
