import styles from './Sidebar.module.css'


export const Sidebar = ({children}) => {

    return <div className={styles.container}>
        <aside className={styles.sidebar}>
            <form className={styles.center} onSubmit={() => {}}>
                <div className={styles.row}>
                    <input type="checkbox"/>
                    <label htmlFor="scales">Milk</label>
                </div>
                <div className={styles.row}>
                    <input type="checkbox"/>
                    <label htmlFor="scales">Meat</label>
                </div>
                <div className={styles.row}>
                    <input type="checkbox"/>
                    <label htmlFor="scales">Apple</label>
                </div>

                <br/>

                <div className={styles.row}>
                    <input type="radio"  name='choose'/>
                    <label htmlFor="scales">Yes</label>
                </div>
                <div className={styles.row} >
                    <input type="radio"  name='choose'/>
                    <label htmlFor="scales">No</label>
                </div>

                <br/>

                <select>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>

                <br/>

                <div className={styles.row} >
                    <button className={styles.button} type='submit'>Submit</button>
                    <button type='reset'>Reset</button>
                </div>
            </form>


        </aside>
        <main className={styles.content}>
            {children}
        </main>
    </div>
}
