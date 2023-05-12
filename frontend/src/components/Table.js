import React, { useState } from "react";
import styles from "./Table.module.css"

const Table = (props) =>{
    const removeSt = (el) =>{
        props.remove(el.id)
    }

    const changeSt = (el) => {
        props.show("change");
        removeSt(el);
    }


    return(
        <div>
            <h3>Students</h3>
            <input type ="button" onClick={() => props.show("add")} className={styles.addButton} value = "+"></input>
            <table>
            <thead>
            <tr>
                <td><input type="checkbox"/></td>
                <td>Group</td>
                <td>Name</td>
                <td>Surname</td>
                <td>Gender</td>
                <td>Birthday</td>
                <td>Status</td>
                <td>Options</td>
            </tr>
            </thead>
            <tbody>
            { props.students.length > 0 && props.students.map((el) => {
                return(
                    <tr key = {el.id}>
                        <td><input type="checkbox"/></td>
                        <td>{el.stgroup}</td>
                        <td>{el.name}</td>
                        <td>{el.surname}</td>
                        <td>{el.gender}</td>
                        <td>{el.birthday}</td>
                        <td>{'active'}</td>
                        <td>
                            <input type="button" value="/" onClick={() => changeSt(el)}></input>
                            <input type="button" value="X"  onClick={() => removeSt(el)}></input>
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </table>
        </div>
    );
}

export default Table;