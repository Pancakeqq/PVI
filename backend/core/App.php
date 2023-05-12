<?php

require_once './controllers/StudentsController.php';

class App{

     
    protected $controller = 'home';

    

    protected $method = 'index';

    protected $params = [];

    public function __construct(){
        $this->method = $this->parseURL();
        $this->processRequest();
        //echo  $this->method;
    }

    public function processRequest(){
        if ( strpos($this->method, 'students') !== false){
            $this->controller = new StudentsController();
        }else {
            echo 'INVALID PATH!';
        }
    }

    public function parseURL(){
        $requestUrl = $_SERVER['REQUEST_URI'];
        return $requestUrl;
    }
}