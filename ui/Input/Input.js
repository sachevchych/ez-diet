import React, { useState } from "react"
import styles from "./Input.module.css"

/*
* type - string - default: text
* label - string
* id - string
* placeholder - string
*
* onChange - function
*
* validate - boolean - default: false
* valid - boolean
* errorMessage - string
*
*/


export default function Input(props) {
    const [touched, setTouched] = useState(false)
    const validate = props.validate || false
    const type = props.type || 'text'
    const classes = [
        styles.Input,
    ]

    if (props.valid && touched) classes.push(styles.inputSuccess)
    if (validate && !props.valid && touched) classes.push(styles.inputError)

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
                onBlur={() => setTouched(true)}
            />
            <small className={styles.error}>{touched ? props.errorMessage : null}</small>
        </div>
    )
}