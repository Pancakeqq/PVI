import React from "react";
import styles from "./ModalWindow.module.css";
import { useState } from "react";

const ModalWindow = (props) =>{
    const [group, setgroup]  = useState("PZ-21");
    const [name, setname]  = useState("");
    const [surname, setsurname]  = useState("");
    const [gender, setgender]  = useState("Male");
    const [birthday, setbirthday]  = useState("");
    const [isnamevalid, setisnamevalid] = useState(false);
    const [issurnamevalid, setissurnamevalid] = useState(false);
    const [isbirthdayvalid, setisbirthdayvalid] = useState(false);


    const groups = [ {value: "PZ-21"},{value: "PZ-22"},{value: "PZ-23"},{value: "PZ-24"},{value: "PZ-25"},{value: "PZ-26"} ];


    const validatename = (event) =>{
        setname(event.target.value)
        if (event.target.value.length < 4){
            setisnamevalid(false);
        }else{
            setisnamevalid(true);
        }
    }
    const validatesurname = (event) =>{
        setsurname(event.target.value)
        if (event.target.value.length < 4){
            setissurnamevalid(false);
        }else{
            setissurnamevalid(true);
        }
    }

    const submitForm = (event) =>{
        event.preventDefault();
        if (isnamevalid && issurnamevalid && isbirthdayvalid){

        var student = {group : group, name: name, surname: surname, gender: gender, birthday: birthday, status: "Online"}
        const reqbody = {
            "name": student.name,
            "surname": student.surname,
            "stgroup": student.group,
            "birthday": student.birthday,
            "gender": student.gender
        }

            fetch("http://localhost:3001/students", {
                method: "POST",
                body: JSON.stringify(reqbody),
            }).then(response => response.json())
            .then(data => {
                console.log(data)
                props.hide()
            })
            props.render()
        }
    }
    const validateBirthday = (event) =>{
        setbirthday(event.target.value);

        if(event.target.value.split('-')[0] > 2023 || event.target.value.split('-')[0] < 1920){
            setisbirthdayvalid(false);
        }else{
            setisbirthdayvalid(true);
        }
    }

    return(
        <form className={styles.window} onSubmit={submitForm}>
            <h2>{props.type === "add" ? "Add student": "Change info"}</h2>
            <input className={styles.closebutton} value="X" onClick={props.hide} type="button"></input>
            <div className={styles.border}></div>
            <label>Group&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <select name = "group" onChange ={(event) => {setgroup(event.target.value)}}>
                {groups.map( (el) =>{
                    return(
                        <option value={el.value}>{el.value}</option>
                    )
                })}
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