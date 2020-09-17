import React, {useState} from "react";
import styles from './Header.module.css';
import Button from "../../ui/Button/Button";
import Logo from "../../ui/Logo/Logo";
import {faUser} from '@fortawesome/free-solid-svg-icons'
import Modal from "../../ui/Modal/Modal";
import LoginForm from "../LoginForm/LoginForm";

function Header() {
    const [displayModal, setDisplayModal] = useState(false)

    return (
        <header className={styles.HeaderWrap}>
            <div className="container">
                <div className={styles.Header}>

                    <Logo color="main" fontSize={24}/>
                    <Button icon={faUser} onClick={() => {setDisplayModal(true)}}>Увійти в аккаунт</Button>
                    {
                        displayModal
                            ?
                            <Modal closeModal={() => {
                                setDisplayModal(false)
                            }}>
                                <LoginForm/>
                            </Modal>
                            : null
                    }
                </div>
            </div>
        </header>
    )
}

export default Header
