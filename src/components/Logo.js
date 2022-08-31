// Assets
import logo from '../utils/img/tesodev_logo.png';

// Styles
import styles from "./Logo.module.scss";

// Recat router
import { useLocation } from 'react-router-dom';
import {Link} from "react-router-dom"

const Logo = () => {
    const location = useLocation();
    return (
        <div className={styles.logoPartWrapper}>
            <Link to="/">
            <img src={logo} alt="tesodev_logo" />
            </Link>
            {location.pathname === "/" && <p className={styles.text}>Search app</p>}
        </div>
    )
}

export default Logo