import React from 'react';
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <>
    <button className={styles.button}><Link to="list">Search</Link></button>
    </>
  )
}

export default Button