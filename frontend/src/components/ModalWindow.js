import React from "react";
import styles from "./ModalWindow.module.css";
import { useState } from "react";

const ModalWindow = (props) =>{
    const [group, setgroup]  = useState("PZ-21");
    const [name, setname]  = useState("");
    const [surname, setsurname]  = useState("");
    const [gender, setgender]  = useState("Male");
    const [birthday, setbirthday]  = useState("");
    // const [isnamevalid, setisnamevalid] = useState(false);
    // const [issurnamevalid, setissurnamevalid] = useState(false);
    // const [isbirthdayvalid, setisbirthdayvalid] = useState(false);


    const validatename = (event) =>{
        setname(event.target.value)
        // if (event.target.value.length < 4){
        //     setisnamevalid(false);
        // }else{
        //     setisnamevalid(true);
        // }
    }
    const validatesurname = (event) =>{
        setsurname(event.target.value)
        // if (event.target.value.length < 4){
        //     setissurnamevalid(false);
        // }else{
        //     setissurnamevalid(true);
        // }
    }

    const submitForm = (event) =>{
        event.preventDefault();
        // if (isnamevalid && issurnamevalid && isbirthdayvalid){

        var student = {group : group, name: name, surname: surname, gender: gender, birthday: birthday, status: "Online"}
        const formdata = new FormData()
        formdata.append("name", student.name)
        formdata.append("surname", student.surname)
        formdata.append("group", student.group)
        formdata.append("birthday", student.birthday)
        formdata.append("gender", student.gender)

            fetch("http://localhost:3001", {
                method: "POST",
                body: formdata,
            }).then(response => response.json())
            .then(data => {
                
                console.log(data)
                if(data == "correct"){
                    props.addStudent(student);
                    props.hide();
                }else{
                    alert("Student data not valid!");
                }

            })
            


            
        // }
    }
    const validateBirthday = (event) =>{
        setbirthday(event.target.value);

        // if(event.target.value.split('-')[0] > 2023 || event.target.value.split('-')[0] < 1920){
        //     setisbirthdayvalid(false);
        // }else{
        //     setisbirthdayvalid(true);
        // }
    }

    return(
        <form className={styles.window} onSubmit={submitForm}>
            <h2>{props.type === "add" ? "Add student": "Change info"}</h2>
            <input className={styles.closebutton} value="X" onClick={props.hide} type="button"></input>
            <div className={styles.border}></div>
            <label>Group&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <select name = "group" onChange ={(event) => {setgroup(event.target.value)}}>
                <option value="PZ-21">PZ-21</option>
                <option value="PZ-22">PZ-22</option>
                <option value="PZ-23">PZ-23</option>
                <option value="PZ-24">PZ-24</option>
                <option value="PZ-25">PZ-25</option>
                <option value="PZ-26">PZ-26</option>
            </select><br/>
            <label>First name</label>
            <input type="text" value={name} onChange={validatename} name= "firstname"></input><br/>
            <label>Last name</label>
            <input type="text" value={surname} onChange={validatesurname} name="lastname"></input><br/>
            <label>Gender&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <select name = "gender"   onChange ={(event) => {setgender(event.target.value)}} >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select><br/>
            <label>Birthday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="date" value={birthday}  name="birthday" onChange={validateBirthday}></input><br/>
            <div className={styles.border}></div>
            <input type="submit" className={styles.submitbtn} value="Ok"></input>
            <input type="button"  onClick={props.hide} value="Cancel"></input>
        </form>
    );
}

export default ModalWindow;