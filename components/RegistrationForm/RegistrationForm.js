import React, {useState} from "react";
import styles from './RegistrationForm.module.css'
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";

export default function RegistrationFrom() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')

    const [nameValid, setNameValid] = useState(false)
    const [emailValid, setEmailValid] = useState(false)
    const [passwordValid, setPasswordValid] = useState(false)
    const [passwordRepeatValid, setPasswordRepeatValid] = useState(false)

    const [nameMessage, setNameMessage] = useState(null)
    const [emailMessage, setEmailMessage] = useState(null)
    const [passwordMessage, setPasswordMessage] = useState(null)
    const [passwordRepeatMessage, setPasswordRepeatMessage] = useState(null)

    function handlerName(value) {
        setName(value)
        if (!value) {
            setNameValid(false)
            setNameMessage("Поле не може бути пустим")
        } else {
            setNameValid(true)
            setNameMessage(null)
        }
    }

    function handlerEmail(value) {
        setEmail(value)
        const regexp = /@/
        if (!regexp.test(value)) {
            setEmailValid(false)
            setEmailMessage('Пошта повинна містити символ @')
        } else {
            setEmailValid(true)
            setEmailMessage(null)
        }
    }

    function handlerPassword(value) {
        setPassword(value)
        if (value.length < 6) {
            setPasswordValid(false)
            setPasswordMessage('Пароль повинен бути не менше ніж 6 символів')
        } else {
            setPasswordValid(true)
            setPasswordMessage(null)
        }
    }

    function handlerPasswordRepeat(value) {
        if (value) setPasswordRepeat(value)

        if (value !== password) {
            setPasswordRepeatValid(false)
            setPasswordRepeatMessage('Паролі не співпадають')
        } else {
            setPasswordRepeatValid(true)
            setPasswordRepeatMessage(null)
        }
    }

    return (
        <div className={styles.RegistrationForm}>
            <h2 className="mb-1">Реєстрація новго акануту</h2>
            <small className="text-muted mb-2">Сплануй свій раціон на тиждень за лічені хвилини.</small>
            <form>
                <Input label="Ім'я та прізвище"
                       id="registration-name"
                       placeholder="Введіть ваше ім'я та прізвище"
                       validate={true}
                       valid={nameValid}
                       errorMessage={nameMessage}
                       onChange={(event) => handlerName(event.target.value)}
                />
                <Input label="Електронна адреса"
                       type="email"
                       id="registration-email"
                       placeholder="Введіть ваш e-mail"
                       validate={true}
                       valid={emailValid}
                       errorMessage={emailMessage}
                       onChange={(event) => handlerEmail(event.target.value)}
                />
                <Input label="Пароль"
                       type="password"
                       id="registration-password"
                       placeholder="Введідь бажаний пароль"
                       validate={true}
                       valid={passwordValid}
                       errorMessage={passwordMessage}
                       onChange={(event) => handlerPassword(event.target.value)}
                />
                <Input label="Перевірка паролю"
                       type="password"
                       id="registration-password-repeat"
                       placeholder="Повторіть пароль ще раз"
                       validate={true}
                       valid={passwordRepeatValid}
                       errorMessage={passwordRepeatMessage}
                       onChange={(event) => handlerPasswordRepeat(event.target.value)}
                />
                <Button type="submit" className="mt-1" size="lg" onClick={(event) => event.preventDefault()}
                        block>Зареєструватися</Button>
            </form>
        </div>
    )
}