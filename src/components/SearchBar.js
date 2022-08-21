import React, {useState} from 'react';
import Button from './Button';
import styles from "./SearchBar.module.css";
import {useDispatch} from 'react-redux';
import { filterItems } from '../redux/list/listSlice';

const SearchBar = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const onchangeHandler = (e) => {
        let filter = e.target.value;
        filter = filter.trim();
        filter = filter.toLowerCase();
        setText(filter);
        if(filter.length >= 2) {
            dispatch(filterItems(filter));
        };
    };

    return (
        <>
            <h3 className={`${styles.searchbarTitle} primary-font-bold`}>Find in Records</h3>
            <svg className={styles.searchbarIcon} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5 18.8569L15.15 14.5069M17.5 8.8569C17.5 13.2752 13.9183 16.8569 9.5 16.8569C5.08172 16.8569 1.5 13.2752 1.5 8.8569C1.5 4.43862 5.08172 0.856903 9.5 0.856903C13.9183 0.856903 17.5 4.43862 17.5 8.8569Z" stroke="#090A0A" />
            </svg>
            <input value={text} onChange={(e)=>onchangeHandler(e)} className={`${styles.searchbarInput} primary-font-regular`} type="text" name="text" />
            <Button />
        </>
    );
};

export default SearchBar;