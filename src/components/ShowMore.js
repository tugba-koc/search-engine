import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { selectText } from '../redux/list/listSlice';
import styles from "./ShowMore.module.scss"

const ShowMore = () => {
    const navigate = useNavigate();
    const text = useSelector(selectText)
  return (
    <p className={`primary-font-bold ${styles.showmoreText}`} onClick={()=>navigate(`/list?q=${text}`)}>Show more...</p>
  )
}

export default ShowMore