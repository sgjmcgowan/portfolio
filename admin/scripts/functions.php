<?php
ini_set('display_errors',1);
error_reporting(E_ALL);

include('connect.php');

if (isset($_GET['getAllPieces'])) {

  $sql="SELECT img_id, img_preview, img_preview_small FROM tbl_images";
  $result = mysqli_query($link, $sql);

  $rows = array();

  while ($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
  }

  echo json_encode($rows);
}

if (isset($_GET['getSingleImage'])) {

  $single = $_GET['getSingleImage'];

  $sql = "SELECT img_path, img_name, img_desc FROM tbl_images WHERE img_id = $single";

  $result = mysqli_query($link, $sql);

  $row = mysqli_fetch_assoc($result);

  echo json_encode($row);

}
?>
