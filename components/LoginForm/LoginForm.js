import React, {useState} from "react"
import styles from "./LoginForm.module.css"
import Link from 'next/link'
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import {error} from "next/dist/build/output/log";

export default function LoginForm() {

    const [loginValue, setLoginValue] = useState("")
    const [loginValid, setLoginValid] = useState("")
    const [passwordValue, setPasswordValue] = useState("")
    const [passwordValid, setPasswordValid] = useState(false)

    function handlerLogin(password) {
        setLoginValue(password)
        setLoginValid(false)

    }

    function handlerPassword(password) {
        setPasswordValue(password)
        if (password.length < 6) {
            setPasswordValid(false)
        } else {
            setPasswordValid(true)
        }
    }



    return (
        <form className={styles.LoginForm} onSubmit={(event) => event.preventDefault()}>
            <h2>Вхід до акаунту</h2>
            <span>Сплануй свій раціон на тиждень за лічені хвилини.</span>
            <form>
                <Input
                    type="text"
                    id="login"
                    label="Електронна адреса:"
                    placeholder="example@gmail.com"
                    value={loginValue}
                    valid={loginValid}
                    onChange={(event) => handlerLogin(event.target.value)}
                />
                <Input
                    type="password"
                    id="password"
                    label="Пароль:"
                    placeholder="Введіть пароль"
                    value={passwordValue}
                    valid={passwordValid}
                    onChange={(event) => handlerPassword(event.target.value)}
                />
                <Button size="lg" block>Увійти</Button>
            </form>
            <small>Ще не маєте облікового запису? <Link href="#">Зареєструватися</Link>.</small>
        </form>
    )
}