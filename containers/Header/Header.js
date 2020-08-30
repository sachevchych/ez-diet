import React from "react";
import styles from './Header.module.css';
import Button from "../../ui/Button/Button";
import Logo from "../../ui/Logo/Logo";
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <header className={styles.HeaderWrap}>
            <div className="container">
                <div className={styles.Header}>
                    <Logo color="main" fontSize={24}/>
                    <Button size="large" icon={faUser}>Увійти в аккаунт</Button>
                </div>
            </div>
        </header>
    )
}

export default Header
