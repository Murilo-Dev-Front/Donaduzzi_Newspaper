import styles from './userRegister.module.css'
import { useState } from 'react'
import json from './userRegister.json'
import emailicon from '/envelope.svg'
import passwordicon from '/lockclosed.svg'
import usernameicon from '/hashtag.svg'

const UserRegister = ({ Field }) => {
    return (
        <article className={`${styles.contents} mainpanel`}>
            <img className={styles.blob} src='/backgroundblob.svg' />
            <div className={styles.innerContent}>
                <div className={styles.overflowInnercontent}>
                    <section className={styles.separationSection}>
                        <h1 className={styles.msg}>{json.maintext}</h1>
                        <h3 className={styles.textDescription}>{json.desc}</h3>

                    </section>
                    <section className={styles.separationSection}>
                        <Field
                            title="insira seu email"
                            type="text"
                            placeholder="email"
                            icon={emailicon}
                        />
                        <Field
                            title="insira sua senha"
                            type="text"
                            placeholder="senha"
                            icon={passwordicon}
                        />
                        <Field
                            title="insira sua nome"
                            type="text"
                            placeholder="nome de usuário"
                            icon={usernameicon}
                        />
                        <section className={styles.signinfooter}>
                            <button className={styles.signinbutton}>CRIAR MINHA CONTA</button>
                        </section>
                    </section>
                </div>
            </div>
        </article>
    )
}

export default UserRegister