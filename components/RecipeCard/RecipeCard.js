import React from "react";
import styles from "./RecipeCard.module.css"
import LikeCounter from "./LikeCounter/LikeCounter";

function RecipeCard(props) {
    return (
        <div className={[styles.RecipeCard, 'shadow', 'lift', 'lift-lg'].join(' ')}>
            <img className={styles.img} src={props.img} alt={props.name}/>
            <div className={styles.body}>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <div className={styles.footer}>
                    <LikeCounter value="24"/>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard