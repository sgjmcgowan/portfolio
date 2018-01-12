<?php

if (empty($_POST) === false) {
  $errors = array();

  $name     = $_POST['name'];
  $email    = $_POST['email'];
  $message  = $_POST['message'];
  $url      = $_POST['url'];

  if (empty($name) === true || empty($email) === true || empty($message) === true) {
      $errors[] = "Name, email, and message are required.";
  } else {
      if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
        $errors[] = "The email address you entered is invalid.";
      }
  }
  if (empty($url) === false) {
    header('Location: contactform.php?sent');
  } else {

    if (empty($errors) === true) {
      mail('smcgowancontactform@gmail.com','Contact Form', $message,'From: ' . $email);
      header('Location: contactform.php?sent');
      exit();
    }
  }
}

 ?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" type="text/css" href="css/reset.css">
  <link rel="stylesheet" type="text/css" href="css/main.css">
  <link rel="icon" href="images/favicon.png" type="image/png">
  <link rel="shortcut icon" href="/favicon.ico">
  <title>Stewart McGowan - Contact</title>
</head>

<body>

<h1 class="heading">Contact Me</h1>

<nav class="mainNav">
  <h2 class="hidden">Main Navigation</h2>
  <ul>
    <li><p class="link" id="index">Home</p></li>
    <li><p class="link" id="portfolio">Portfolio</p></li>
    <li><p class="link" id="education">Education</p></li>
    <li class="hidden"><p class="link" id="contact">Contact Me</p></li>
  </ul>
</nav>

<?php

if (isset($_GET['sent']) === true) {
  echo '<p class="thanks">Thanks for sending your message!</p>';
} else {

  if (empty($errors) === false) {
    echo '<ul>';
    foreach($errors as $error) {
      echo '<li class="error">', $error, '</li>';
    }
    echo '</ul>';
  }
 ?>

<form action="" method="post" id="contactForm">
  <div class="formContent">
    <input type="text" name="name" id="name" placeholder=" Name" <?php if (isset($_POST['name']) === true) { echo 'value="', strip_tags($_POST['name']),'"';} ?>>
    <input type="text" name="email" id="email" placeholder=" Email" <?php if (isset($_POST['email']) === true) { echo 'value="', strip_tags($_POST['email']),'"';} ?>>
    <p class="hidden">Leave this empty <input type="text" name="url"></p>
    <textarea name="message" id="message" placeholder="Message"><?php if (isset($_POST['message']) === true) { echo strip_tags($_POST['message']);} ?></textarea>
    <button>Submit</button>
  </div>

<?php
}
 ?>

</form>

<script src="scripts/main.js"></script>
</body>
