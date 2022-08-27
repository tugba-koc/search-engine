import React from 'react';
import styles from "./SearchButton.module.css";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectText } from '../redux/list/listSlice';

const SearchButton = () => {
  const text = useSelector(selectText)
  return (
    <>
      <button className={styles.button}><Link to={`/list?q=${text}`}>Search</Link></button>
    </>
  )
}

export default SearchButton