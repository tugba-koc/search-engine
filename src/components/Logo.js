import React from 'react';
import logo from '../utils/img/tesodev_logo.png';
import styles from "./Logo.module.css"

const Logo = () => {
    return (
        <div className={styles.logoPartWrapper}>
            <img src={logo} alt="tesodev_logo" />
            <p className={styles.text}>Search app</p>
        </div>
    )
}

export default Logo