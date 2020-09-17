import React, {useState} from "react"
import styles from './RegistrationForm.module.css'
import Input from "../../ui/Input/Input"
import Button from "../../ui/Button/Button"
import axios from 'axios'
import {connect} from "react-redux";
import {registration} from "../../store/actions/registration.action";

function RegistrationForm(props) {
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

    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(null)

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
        if (!/@/.test(value)) {
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
            passwordValidator(value, passwordRepeat)
        }
    }

    function handlerPasswordRepeat(value) {
        setPasswordRepeat(value)
        passwordValidator(password, value)
    }

    function passwordValidator(password, passwordRepeat) {
        if (password === passwordRepeat) {
            setPasswordRepeatValid(true)
            setPasswordRepeatMessage(null)
        } else {
            setPasswordRepeatValid(false)
            setPasswordRepeatMessage('Паролі не співпадають')
        }
    }

    function registrationHandler(event) {
        if (!nameValid && !emailValid && !passwordValid && !passwordRepeatValid) {
            return setMessage('Будь ласка, заповніть всі поля правильно.')
        }
        setLoading(true)
        props.registration(name, email, password)
        setLoading(false)
        event.preventDefault()
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
                <Button type="submit"
                        className="mt-1"
                        size="lg"
                        onClick={(event) => registrationHandler(event)}
                        loading={loading}
                        block
                >Зареєструватися</Button>
                <small className="mt-1" style={{"color":"#CF5D53"}}>{message}</small>
            </form>
        </div>
    )
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        registration: (name, email, password) => dispatch(registration(name, email, password))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm)