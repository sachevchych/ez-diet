import React from 'react'
import styles from './Link.module.css'
import NextLink from 'next/link'

export default function Link(props) {
    const classes = [
        styles.Link
    ]

    if (props.color) classes.push(styles[props.color])

    return (
        <span className={classes.join(' ')}>
            <NextLink href={props.href} as={props.as}>{props.children}</NextLink>
        </span>
    )
}