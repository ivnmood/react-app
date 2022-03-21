import {Sidebar} from "../Sidebar/Sidebar";
import styles from './MainPage.module.css'
import {useState} from "react";
import {TextField} from "@mui/material";

export const MainPage = () => {
    const [name, setName] = useState('Unknown!')
    const imageLink = 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <Sidebar>
            <h1 className={styles.title}>Hello {name}</h1>
            <TextField id="outlined-basic" label="Your Name" variant="outlined" value={name} onChange={handleChange}/>
            <div className={styles.imgWrapper}>
                <img className={styles.img} src={imageLink} height={200} alt="image"/>
                <p>Some text in p tag</p>
            </div>

        </Sidebar>
    )
}
