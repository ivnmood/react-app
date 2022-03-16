import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Footer} from "./components/Footer/Footer";
import styles from './App.module.css';

function App() {
    const imageLink = 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'

  return (
    <div className={styles.app}>
      <Header />
        <Sidebar>
            <h1>H1 text</h1>
            <div className={styles.imgWrapper}>
                <img className={styles.img} src={imageLink} height={200}  alt="image"/>
                <p>Some text in p tag</p>
            </div>

        </Sidebar>
      <Footer />
    </div>
  );
}

export default App;
