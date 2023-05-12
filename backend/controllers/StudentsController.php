<?php

require_once('./base.php');


class StudentsController {

    public function __construct(){
        $this->processRequest();

    }

    public function processRequest(){
        if ($_SERVER['REQUEST_METHOD'] === 'GET'){
            $this->getSt();
        }else if ($_SERVER['REQUEST_METHOD'] === 'POST'){
            $this->addSt();
        } else if ($_SERVER['REQUEST_METHOD'] === 'DELETE'){
            $this->delSt();
        }

        //echo  $_SERVER['REQUEST_URI'];
        
    }

    public function  getSt(){
        getStudents();
    }

    public function addSt(){
        addStudent();
    }

    public function delSt(){
        if (isset($_GET['id'])) {
            $id = $_GET['id'];
            deleteStudent($id);
        }else {
            echo 'no such user found';
        }
    }




}