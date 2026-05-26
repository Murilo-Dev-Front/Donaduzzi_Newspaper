import styles from './userLogin.module.css'
import { useState } from 'react'

const UserLogin = () => {
    const [msg, setmsg] = useState("Olá")
    return (
        <article className={`${styles.contents} mainpanel`}>
            <div className={styles.innerContent}>
                <div className={styles.overflowInnercontent}>
                <section className={styles.separationSection}>
                    <h1 className={styles.msg}>{msg}!</h1>
                    <h3 className={styles.textDescription}>bem vindo ao jornal donaduzzi</h3>

                </section>
                <section className={styles.separationSection}>
                    <section className={styles.fieldcontainer}>
                        <h2 className={styles.title}>insira seu email</h2>
                        <input className={styles.field}
                            type="text"
                            placeholder="email"
                        />
                    </section>
                    <section className={styles.fieldcontainer}>
                        <h2 className={styles.title}>insira sua senha</h2>
                        <input className={styles.field}
                            type="password"
                            placeholder="senha"
                        />

                    </section>
                    <button className={styles.signinbutton}>criar minha conta</button>
                </section>
                </div>
            </div>
        </article>
    )
}

export default UserLogin