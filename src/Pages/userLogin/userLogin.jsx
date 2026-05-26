import styles from './userLogin.module.css'
import { useState } from 'react'
import json from './userLogin.json'
import { Link } from 'react-router-dom';

const UserLogin = () => {
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
                        <button className={styles.loginbutton}>ENTRAR</button>
                        <section className={styles.linkfooter}>
                            <p>não tem uma conta?</p> <Link to="/register">registre</Link>
                        </section>
                    </section>
                </div>
            </div>
        </article>
    )
}

export default UserLogin