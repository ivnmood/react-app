import styles from './Sidebar.module.css'


export const Sidebar = ({children}) => {
    console.log(children)

    return <div className={styles.container}>
        <aside className={styles.sidebar}>
            Sidebar
        </aside>
        <main className={styles.content}>
            {children}
        </main>
    </div>
}
