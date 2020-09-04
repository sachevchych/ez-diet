import React from "react"
import styles from "./Modal.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Modal(props) {
    const picture = "/images/" + Math.floor(Math.random() * 10) + ".jpg"

    return (
        <div className={styles.Backdrop}>
            <div className={styles.Modal}>
                <div className={styles.ModalImageWrap} style={{backgroundImage: `url(${picture})`}}>
                </div>
                <div className={styles.ModalContainer}>
                    <div className={styles.ModalHeader}>
                        <div>

                        </div>
                        <div>
                            <FontAwesomeIcon onClick={props.closeModal} className={styles.Icon} icon={faTimes}/>
                        </div>
                    </div>

                    <div className={styles.ModalContent}>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}