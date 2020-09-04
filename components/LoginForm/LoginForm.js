import React, {useState} from "react"
import styles from "./LoginForm.module.css"
import Link from 'next/link'
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import {error} from "next/dist/build/output/log";

export default function LoginForm() {

    const [loginValue, setLoginValue] = useState("")
    const [loginValid, setLoginValid] = useState(false)
    const [loginIsTouched, setLoginIsTouched] = useState(false)
    const [loginErrorMessage, setLoginErrorMessage] = useState(null)

    function handlerLogin(login) {
        setLoginValue(login)
        setLoginIsTouched(true)
        if (login.includes("@") && login.includes(".")) {
            setLoginValid(true)
            setLoginErrorMessage(null)
        } else {
            setLoginValid(false)
            setLoginErrorMessage('Введіть електронну пошту')
        }

    }

    const [passwordValue, setPasswordValue] = useState("")
    const [passwordValid, setPasswordValid] = useState(false)
    const [passwordIsTouched, setPasswordIsTouched] = useState(false)
    const [passwordErrorMessage, setErrorMessage] = useState(null)

    function handlerPassword(password) {
        setPasswordValue(password)
        setPasswordIsTouched(true)
        if (password.length < 6) {
            setPasswordValid(false)
            setErrorMessage("Пароль не може бути менше 6 символів")
        } else {
            setPasswordValid(true)
            setErrorMessage('')
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
                    touched={loginIsTouched}
                    errorMessage={loginErrorMessage}
                    onChange={(event) => handlerLogin(event.target.value)}

                />
                <Input
                    type="password"
                    id="password"
                    label="Пароль:"
                    placeholder="Введіть пароль"
                    value={passwordValue}
                    valid={passwordValid}
                    touched={passwordIsTouched}
                    errorMessage={passwordErrorMessage}
                    onChange={(event) => handlerPassword(event.target.value)}
                />
                <Button size="lg" block>Увійти</Button>
            </form>
            <small>Ще не маєте облікового запису? <Link href="#">Зареєструватися</Link>.</small>
        </form>
    )
}