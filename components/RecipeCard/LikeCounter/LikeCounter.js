import React from "react";
import style from './LikeCounter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function LikeCounter(props) {
    return (
        <span className={style.LikeCounter}>
            <FontAwesomeIcon icon={faHeart} className={style.icon}/>
            {props.value}
        </span>
    )
}

export default LikeCounter