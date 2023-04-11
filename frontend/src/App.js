import React, {useState, useEffect} from "react";
import Table from "./components/Table";
import ModalWindow from "./components/ModalWindow";
import Header from "./components/Header";

function App() {


  const [students, setstudents] = useState(JSON.parse(localStorage.getItem("students")) || []);
  const [isModalVisible, setisModalVisible] = useState(false);
  const [isModaladding, setisModaladding] = useState(true);

  const addStudent = (student) =>{
    setstudents([...students, student]);
    localStorage.setItem("students", JSON.stringify([...students, student]));
  }

  const removeStudent = (student) =>{
    var newlist = students.filter(item => item.name !== student.name || item.surname !== student.surname)
    setstudents(newlist)
    localStorage.setItem("students", JSON.stringify(newlist));
  }


  const hideModalWindow = () =>{
    setisModalVisible(false);
  }
  
  const showModalWindow = (type) =>{
    if (type === "add"){
      setisModaladding(true);
    }else{
      setisModaladding(false);
    }
    setisModalVisible(true);
  }


  return (
    <div>
      <Header></Header>  
<div className="bodycontainer">
<nav className="container-item">
    <a href="#Dashboard">Dashboard<br/></a>
    <a href="#Students">Students<br/></a>
    <a href="#Tasks">Tasks<br/></a>
    </nav>
<Table show = {showModalWindow} remove = {removeStudent} addStudent = {addStudent} students = {students}></Table>
</div>
  {isModalVisible && <ModalWindow type = {isModaladding ? "add" : "change"} addStudent = {addStudent} hide = {hideModalWindow}></ModalWindow>}

</div>

  );
}

export default App;