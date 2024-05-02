<?php
try {
  $pdo = new PDO('mysql:host=localhost;dbname=id19496844_mshare', 'id19496844_michaelbeebe9', 'Huge/Caniac9!');
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $pdo->exec('SET NAMES "utf8"');

} catch (PDOException $e) {

  $error = 'Unable to connect to the database server.';
  include 'error.html.php';
  exit();
  
}