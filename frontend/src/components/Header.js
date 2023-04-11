import React from "react";
import styles from "./Header.module.css"

const Header = (props) => {
    return(
        <div className={styles.header}>
            <h2 className={styles.headtext}>CMS</h2>
            
        </div>
    );
}

export default Header;