import React, {useState} from "react";
import styles from './CreateRecipe.module.css'
import Input from "../../ui/Input/Input";
import Select from "../../ui/Select/Select";

function CreateRecipe() {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')

    const data = [
        {value: 1, label: 'Number 1'},
        {value: 2, label: 'Number 2'},
        {value: 3, label: 'Number 3'},
        {value: 4, label: 'Number 4'},
    ]

    return (
        <div className={styles.CreateRecipe}>
            <h2>Створення нового рецепту</h2>
            <form>
                <Input type="text" label="Назва рецепту" onChange={event => setName(event.target.value)}/>
                <Select placeholder="Оберіть категорію зі списку" label="Категорія" data={data} onChange={event => setCategory(event.target.value)}/>
            </form>
        </div>
    )
}

export default CreateRecipe