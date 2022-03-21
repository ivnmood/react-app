import styles from './AboutUsPage.module.css';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import BatteryAlertOutlinedIcon from '@mui/icons-material/BatteryAlertOutlined';

export const AboutUsPage = () => {
    const avatar = 'https://cdn-icons-png.flaticon.com/512/147/147144.png'


    const data = [
        {
            name: 'Alex',
            icon: AirportShuttleIcon,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, veniam.',
            date: '10/15/2015'
        },
        {
            name: 'Max',
            icon: AttachMoneyOutlinedIcon,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, molestiae neque.',
            date: '10/15/2016'
        },
        {
            name: 'Denis',
            icon: BatteryAlertOutlinedIcon,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid harum nostrum perspiciatis totam!',
            date: '10/15/2017'
        },
    ]


    return (
        <main className={styles.container}>
            {data.map(({name, icon: Icon, text, date}) =>
                <div key={name} className={styles.row} style={{justifyContent: 'initial', padding: 15}}>
                    <div className={styles.centered}>
                        <img src={avatar} alt="avatar img" height={60} style={{margin: 5}}/>
                        <div className={styles.row} style={{justifyContent: 'center'}}>
                            <Icon/> {name}
                        </div>
                    </div>
                    {text}
                    <br/>
                    <br/>
                   Date: {date}
                </div>
            )}
        </main>
    )
}
