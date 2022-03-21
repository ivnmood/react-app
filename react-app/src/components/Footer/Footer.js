import styles from './Footer.module.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {

    return <footer className={styles.footer}>
     <AcUnitIcon />
     <AddModeratorIcon />
     <AddRoadIcon />
     <BlurOnIcon />
     <GitHubIcon />
    </footer>
}
