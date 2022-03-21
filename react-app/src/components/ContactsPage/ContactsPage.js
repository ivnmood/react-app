import styles from './ContactsPage.module.css';

export const ContactsPage = () => {


    return (
        <main className={styles.container}>
            <p>24/7 operating hours</p>
            <address style={{paddingTop: 20}}>Address: Apple Inc. One Apple Park Way. Cupertino, CA 95014. United
                States
            </address>
            <div className={styles.links}>
                <a href="tel:+1234567890">Director's phone number +1234567890</ a>
                <a href="tel:+1234567890">Manager's phone number +1234567890</ a>
                <a href="tel:+1234567890">Seller's phone number +1234567890</ a>
                <a href="mailto:gmail@gmail.com">Our email: gmail@gmail.com</a>
            </div>

        </main>
    )
}
