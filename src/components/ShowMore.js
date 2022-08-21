import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from "./ShowMore.module.css"

const ShowMore = () => {
    const navigate = useNavigate();
  return (
    <p className={`primary-font-bold ${styles.showmoreText}`} onClick={()=>navigate('/list')}>Show more...</p>
  )
}

export default ShowMore