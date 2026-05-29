import styles from './header.module.css'

const HeaderComp = () => {
    return (
        <main className={styles.headerbody}>
            <section className={styles.headerleft}>
                <img className={styles.logo} src='/logo.png' />

            </section>
        </main>
    )
}

export default HeaderComp