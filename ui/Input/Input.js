import React from "react"
import styles from "./Input.module.css"

export default function Input(props) {
    const type = props.type || 'text'
    const classes = [
        styles.Input,
    ]

    if (props.valid && props.touched) {
        classes.push(styles.inputSuccess)
    }

    if (!props.valid && props.touched) {
        classes.push(styles.inputError)
    }

    return (
        <div className={styles.InputGroup}>
            <label className={styles.Label} htmlFor={props.id}>{props.label}</label>
            <input
                className={classes.join(' ')}
                type={type}
                id={props.id}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
            <small className={styles.error}>{props.errorMessage}</small>
        </div>
    )
}