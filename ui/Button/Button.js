import React from "react";
import styles from "./Button.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button(props) {
    const classes = [
        styles.Button,
        props.size ? styles[props.size] : null,
        props.block ? styles.block : null
    ]

    return (
        <button className={classes.join(' ')} onClick={props.onClick}>
            { props.icon ? <FontAwesomeIcon icon={props.icon} className={styles.icon} /> : null }
            {props.children}
        </button>
    )
}

export default Button