<?php

if (empty($_POST) === false) {
  $errors = array();

  $name     = $_POST['name'];
  $email    = $_POST['email'];
  $message  = $_POST['message'];

  echo $name, ' ', $email, ' ', $message;

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

<form action="" method="post" id="contactForm">
  <div class="formContent">
    <input type="text" name="name" id="name" placeholder=" Name" required>
    <input type="text" name="email" id="email" placeholder=" Email" required>
    <textarea name="message" id="message" placeholder="Message" required></textarea>
    <button>Submit</button>
  </div>
</form>

<script src="scripts/main.js"></script>
</body>
