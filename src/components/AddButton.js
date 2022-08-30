import React from 'react';
import styles from "./AddButton.module.scss";
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <>
      <button className={styles.button}><Link to={`/addlink`}>Add new record</Link></button>
    </>
  )
}

export default AddButton