import React from 'react';
import Button from './Button';
import styles from "./SearchBar.module.css";
import {useDispatch} from 'react-redux';
import Logo from './Logo';
import { filterItems, onChangeHandler } from '../redux/list/listSlice';
import { selectText } from '../redux/list/listSlice';
import { useSelector } from 'react-redux';

const SearchBar = () => {
    const dispatch = useDispatch();
    let text = useSelector(selectText);

    const changeHandler = (e) => {
        let filter = e.target.value;
        filter = filter.trim();
        filter = filter.toLowerCase();
        dispatch(onChangeHandler(filter));
        if(text.length >= 2) {
            dispatch(filterItems(filter));
        };
    };

    return (
        <div className={styles.searchbarMainWrapper}>
            <Logo />
            <input value={text} onChange={(e)=>changeHandler(e)} className={`${styles.searchbarInput} primary-font-regular`} type="text" name="text" />
            <Button />
        </div>
    );
};

export default SearchBar;
