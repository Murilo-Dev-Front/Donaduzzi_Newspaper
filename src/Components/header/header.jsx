import styles from './header.module.css'

const HeaderComp = () => {
    return (
        <main className={styles.headerbody}>
            <img className={styles.logo} src='/logo.png'/>
        </main>
    )
}

export default HeaderComp