import React from "react";
import styles from './Logo.module.css'

export default function Logo(props) {
    return <span className={[styles.Logo, styles[props.color]].join(' ')}>EzCook.</span>
}