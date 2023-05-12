<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
require_once './core/App.php';

//$requestUrl = $_SERVER['REQUEST_URI'];
//echo $requestUrl;
$app = new App();

//$result = "uncorrect";
// if(isset($_POST['name']) && isset($_POST['surname']) && isset($_POST['group']) && isset($_POST['birthday'])) {
//     $name = $_POST['name'];
//     $surname = $_POST['surname'];
//     if(strlen($name) > 3 && !preg_match('/\d/', $name) && strlen($surname) > 3 && !preg_match('/\d/', $surname)) {
//       $result = "correct";
//     } 
//   } 
//   echo json_encode($result);
?>