import {Route, Routes} from "react-router-dom";

import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {MainPage} from "./components/MainPage/MainPage";
import {AboutUsPage} from "./components/AboutUsPage/AboutUsPage";
import {ContactsPage} from "./components/ContactsPage/ContactsPage";

import styles from './App.module.css';


function App() {

  return (
    <div className={styles.app}>
      <Header />

        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/contacts" element={<ContactsPage />}/>
            <Route path="/about" element={ <AboutUsPage />}/>
        </Routes>

      <Footer />
    </div>
  );
}

export default App;
