import {Link} from "react-router-dom";
import styles from './Header.module.css'
import logo from '../../logo512.png'


export const Header = () => {

    return <header className={styles.header}>
        <img src={logo} alt="logo" className={styles.logo} height={100} />
        <nav className={styles.links}>
            <Link to="/">Main</Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/about">About us</Link>
            <Link to="/catalog">Catalog</Link>
        </nav>

    </header>
}
