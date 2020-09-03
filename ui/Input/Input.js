import React from "react"
import styles from "./Input.module.css"

export default function Input(props) {
    const type = props.type || 'text'
    const classes = [
        styles.Input,
        props.valid ? styles.inputSuccess : styles.inputError
    ]

    return (
        <div className={styles.InputGroup}>
            <label className={styles.Label} htmlFor={props.id}>{props.label}</label>
            <input
                className={classes.join(' ')}
                type={type}
                id={props.id}
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
            />
            <small className={styles.error}>{props.errorMessage}</small>
        </div>
    )
}