import {Tooltip} from "@mui/material";

import {Sidebar} from "../Sidebar/Sidebar";
import styles from './CatalogPage.module.css';

export const CatalogPage = () => {


    const data = [
        {
            name: 'Lamborghini',
            image: 'https://images.carandbike.com/car-images/large/lamborghini/huracan/lamborghini-huracan.jpg?v=14',
            price: 2000,
            hint: 'it is labmo!'
        },
        {
            name: 'Ferrari',
            image: 'https://images.drive.ru/i/0/619b5a1cf5001c46d7dc0320.jpg',
            price: 3000,
            hint: 'it is ferrari!'

        },
        {
            name: 'Lada',
            image: 'https://static.lada.ru/images/v6/promo/niva_legend_bronto.jpg',
            price: 4000,
            hint: 'it is super LADA!'
        },
    ]


    return (
        <Sidebar containerStyles={styles.container} >
                {data.map(({name, image, price, hint}) =>
                    <div key={name} className={styles.row} style={{justifyContent: 'initial', margin: '50px 15px 15px 55px'}}>
                        <div className={styles.centered}>
                            <Tooltip title={hint} arrow>
                                <img src={image} alt="avatar img" className={styles.image}/>
                            </Tooltip>
                            <span className={styles.row} style={{justifyContent: 'center'}}>
                           {name}
                        </span>
                            <span>
                            Price: {price}$
                        </span>
                        </div>
                    </div>
                )}
        </Sidebar>



    )
}
