import React from "react";
import styles from "./RecipeCard.module.css"

function RecipeCard(props) {
    return (
        <div className={[styles.RecipeCard, 'shadow', 'lift', 'lift-lg'].join(' ')}>
            <img className={styles.img} src={props.img} alt={props.name}/>
            <div className={styles.body}>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default RecipeCard