import React from 'react'
import Logo from './Logo';
import styles from "./AddLinkHeader.module.css"
import { Link } from "react-router-dom"

const AddLinkHeader = () => {
    return (
        <div className={styles.header}>
            <div><Logo /></div>
            <div className={styles.content}>
                <Link to="/list">
                    <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.939453 10.9392C0.353604 11.5249 0.353503 12.4747 0.939228 13.0605L10.4842 22.6075C11.0699 23.1933 12.0196 23.1934 12.6055 22.6077C13.1913 22.022 13.1914 21.0722 12.6057 20.4864L4.12132 12.0002L12.6075 3.51583C13.1934 2.93011 13.1935 1.98036 12.6077 1.39451C12.022 0.808661 11.0723 0.80856 10.4864 1.39428L0.939453 10.9392ZM28.0002 10.5027L2.00016 10.5L1.99984 13.5L27.9998 13.5027L28.0002 10.5027Z" fill="#484848" />
                    </svg>
                    <p className={`primary-font-bold`}>Return to List Page</p>
                </Link>
            </div>
        </div>
    )
}

export default AddLinkHeader