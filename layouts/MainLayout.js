import React from "react"
import Header from "../containers/Header/Header"
import styles from "./MainLayout.module.css"

export default function MainLayout({children}) {
    return (
        <div className={styles.MainLayoutWrap}>
            <Header/>
            <main>
                {children}
            </main>
        </div>
    )
}