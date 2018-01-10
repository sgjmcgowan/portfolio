<?php
ini_set('display_errors',1);
error_reporting(E_ALL);

include('connect.php');

//GET RESUME CONTENT
if (isset($_GET['getAllPieces'])) {


  $sql="SELECT * FROM tbl_images";
  $result = mysqli_query($link, $sql);

  $rows = array();

  while ($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
  }

  echo json_encode($rows);
}
?>