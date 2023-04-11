<?php
header('Access-Control-Allow-Origin: *');
$result = "uncorrect";
if(isset($_POST['name']) && isset($_POST['surname']) && isset($_POST['group']) && isset($_POST['birthday'])) {
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    if(strlen($name) > 3 && !preg_match('/\d/', $name) && strlen($surname) > 3 && !preg_match('/\d/', $surname)) {
      $result = "correct";
    } 
  } 
  echo json_encode($result);
?>