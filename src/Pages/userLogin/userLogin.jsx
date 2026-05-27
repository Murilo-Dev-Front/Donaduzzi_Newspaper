import styles from './userLogin.module.css'
import { useState } from 'react'
import json from './userLogin.json'
import { Link } from 'react-router-dom';
import emailicon from '/envelope.svg'
import passwordicon from '/lockclosed.svg'

const UserLogin = ({ Field }) => {
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
                        <section className={styles.midsection}>
                            <Link className={styles.passwordlink} to={"/login/passwordreset"}>esqueceu sua senha?</Link>
                        </section>
                        <section className={styles.loginfooter}>
                            <button className={styles.loginbutton}>ENTRAR</button>
                            <section className={styles.linkfooter}>
                                <p className={styles.reglink}>não tem uma conta? <Link to="/register">registre</Link></p>
                            </section>
                        </section>
                    </section>
                </div>
            </div>
        </article>
    )
}

export default UserLogin