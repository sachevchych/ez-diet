import React from "react";
import style from "./RecipesList.module.css"
import RecipeCard from "../../components/RecipeCard/RecipeCard";

function RecipesList() {
    const recipes = [
        { img: "https://picsum.photos/id/237/500/300", name: "Вареники з маком", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam aspernatur at cupiditate impedit molestias."},
        { img: "https://picsum.photos/id/1/500/240", name: "Рис з овочами", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam aspernatur at."},
        { img: "https://picsum.photos/id/2/500/210", name: "Картопля по китайські", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam aspernatur at cupiditate impedit."},
        { img: "https://picsum.photos/id/3/500/230", name: "Цинабони з яблуками", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
        { img: "https://picsum.photos/id/4/500/250", name: "Омлет по французькі", description: "Lorem ipsum dolor sit amet, consectetur adipisicing."},
    ]
    return (
        <div className={style.RecipesList}>
            { recipes.map((recipe, index) => {
                return <RecipeCard key={index} img={recipe.img} name={recipe.name} description={recipe.description}/>
            })}
        </div>
    )
}

export default RecipesList