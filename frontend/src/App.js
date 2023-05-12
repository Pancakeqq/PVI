import React, {useState, useEffect} from "react";
import Table from "./components/Table";
import ModalWindow from "./components/ModalWindow";
import Header from "./components/Header";

function App() {


  const [students, setstudents] = useState([]);
  const [isModalVisible, setisModalVisible] = useState(false);
  const [isModaladding, setisModaladding] = useState(true);
  const [rerender, setrerender] = useState(false)

 const render = () =>{
  setrerender(prev => !prev);
 }

  const addStudent = (student) =>{
    setstudents([...students, student]);
    localStorage.setItem("students", JSON.stringify([...students, student]));
  }

  useEffect(() =>{
    fetch('http://localhost:3001/students').then(response => response.json()).then(data =>{
    console.log(data)
    setstudents(data)
  })
  },[rerender])


  const removeStudent = (id) =>{

    fetch(`http://localhost:3001/students?id=${id}`,{
      method:"DELETE"
    }).then(() => render())

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
  {isModalVisible && <ModalWindow type = {isModaladding ? "add" : "change"} render={render} addStudent = {addStudent} hide = {hideModalWindow}></ModalWindow>}

</div>

  );
}

export default App;