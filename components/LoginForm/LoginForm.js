import React, {useState} from "react"
import styles from "./LoginForm.module.css"
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import axios from 'axios'
import Link from "../../ui/Link/Link";

export default function LoginForm() {
    const [email, setEmail] = useState({value: '1', valid: false, message: ''})
    const [password, setPassword] = useState({value: '1', valid: false, message: ''})

    function emailHandler(value) {
        if (!value.includes("@") && !value.includes(".")) {
            setEmail({value, valid: false, message: 'Некоректна електронна адреса'})
        } else {
            setEmail({value, valid: true, message: ''})
        }

    }

    function passwordHandler(value) {
        if (value.length < 6) {
            setPassword({value, valid: false, message: "Пароль не може бути менше 6 символів"})
        } else {
            setPassword({value, valid: true, message: ""})
        }
    }

    async function handleSubmit(event) {
        event.preventDefault()
        await axios.post('/api/auth/login', {email: email.value, password: password.value})
    }

    return (
        <form className={styles.LoginForm} onSubmit={(event) => handleSubmit(event)}>
            <h2>Вхід до акаунту</h2>
            <span>Сплануй свій раціон на тиждень за лічені хвилини.</span>
            <form>
                <Input
                    type="email"
                    id="email"
                    label="Електронна адреса"
                    placeholder="example@gmail.com"
                    valid={email.valid}
                    errorMessage={email.message}
                    onChange={(event) => emailHandler(event.target.value)}

                />
                <Input
                    type="password"
                    id="password"
                    label="Пароль"
                    placeholder="Введіть пароль"
                    valid={password.valid}
                    errorMessage={password.message}
                    onChange={(event) => passwordHandler(event.target.value)}
                />
                <Button size="lg" type="submit" block>Увійти</Button>
            </form>
            <small>Ще не маєте облікового запису? <Link href="/registration" color="main">Зареєструватися</Link>.</small>
        </form>
    )
}