import {Link} from "react-router-dom";
import styles from './Header.module.css'


export const Header = () => {

    return <header className={styles.header}>
        <p className={styles.logo}>Logo</p>
        <nav className={styles.links}>
            <Link to="/">Main</Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/about">About us</Link>
        </nav>

    </header>
}
