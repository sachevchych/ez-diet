import React from 'react'
import MainLayout from "../layouts/MainLayout";
import CreateRecipe from "../components/CreateRecipe/CreateRecipe";


export default function CreateRecipePage(props) {
    return (
        <MainLayout>
            <CreateRecipe/>
        </MainLayout>
    )
}