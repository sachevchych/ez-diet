import React from "react"
import Header from "../containers/Header/Header"
import styles from "./MainLayout.module.css"

 function MainLayout(props) {

        return (
            <div className={styles.MainLayoutWrap}>
                <Header/>
                <main className={[styles.main, 'container'].join(' ')}>
                    {props.children}
                </main>
            </div>
 )
}

export default MainLayout