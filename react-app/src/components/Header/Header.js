import styles from './Header.module.css'


export const Header = () => {

    return <header className={styles.header}>
        <div className={styles.links}>
            <a href="http://htmlbook.ru/html/main" className={styles.link}>Main</a>
            <a href="http://htmlbook.ru/html/a" className={styles.link}>A</a>
            <a href="http://htmlbook.ru/html/nav" className={styles.link}>Nav</a>
        </div>

    </header>
}
