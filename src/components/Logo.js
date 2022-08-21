import React from 'react';
import logo from '../utils/img/tesodev_logo.png';
import styles from "./Logo.module.css";
import { useLocation } from 'react-router-dom';

const Logo = () => {
    const location = useLocation();
    return (
        <div className={styles.logoPartWrapper}>
            <img src={logo} alt="tesodev_logo" />
            {location.pathname === "/" && <p className={styles.text}>Search app</p>}
        </div>
    )
}

export default Logo