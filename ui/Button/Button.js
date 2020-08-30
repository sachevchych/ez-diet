import React from "react";
import styles from "./Button.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button(props) {
    const classes = [
        styles.btn,
        styles[props.size]
    ]
    const icon = props.icon ? <FontAwesomeIcon icon={props.icon} className={styles.icon} /> : null

    return (
        <button className={classes.join(' ')}>
            { icon }
            {props.children}
        </button>
    )
}

export default Button