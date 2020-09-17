import React, {Fragment} from "react";
import styles from "./Button.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons/faSpinner";

function Button(props) {
    const classes = [
        styles.Button,
        props.className ? props.className : null,
        props.size ? styles[props.size] : null,
        props.block ? styles.block : null
    ]

    return (
        <button
            type={props.type ? props.type : 'button'}
            className={classes.join(' ')}
            onClick={props.onClick}
            disabled={props.loading ? "disabled" : false}
        >
            {
                props.loading
                    ?
                    <Fragment>
                        <FontAwesomeIcon icon={faSpinner} className={styles.icon} spin/>
                        Завантаження...
                    </Fragment>
                    :
                    <Fragment>
                        { props.icon ? <FontAwesomeIcon icon={props.icon} className={styles.icon}/> : null }
                        { props.children }
                    </Fragment>
            }

        </button>
    )
}

export default Button