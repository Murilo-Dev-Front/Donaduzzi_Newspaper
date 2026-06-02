import styles from "./sidebar.module.css"
import { useState } from "react"
import Userpanel from "../userpanel/userpanel"

const Sidebar = () => {
    const [barUp,ToggleBar] = useState(true)

    const OnToggle = () => ToggleBar(prev=>!prev)
    return (
        <article className={`${styles.contents} mainpanel`}>
            <main className={styles.sidebarcontainer}>
                <div className={`${styles.sidebarbody} ${barUp ? styles.sidebarup : styles.sidebardown}`}>
                    <Userpanel/>
                    <button className={styles.arrowbutton} onClick={OnToggle}>
                        <img className={`${styles.arrowicon} ${barUp ? "" : styles.arrowiconbardown}`} src="/arrodown.svg" />
                    </button>
                </div>
            </main>
        </article>
    )
}

export default Sidebar