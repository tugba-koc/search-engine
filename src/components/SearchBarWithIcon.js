import React from 'react';
import SearchButton from './SearchButton';
import styles from "./SearchBarWithIcon.module.scss";
import {useDispatch} from 'react-redux';
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
        if(text.length >= 1) {
            dispatch(filterItems(filter));
        };
    };

    return (
        <div className={styles.searchbarMainWrapper}>
            <h3 className={`${styles.searchbarTitle} primary-font-bold`}>Find in Records</h3>
            <svg className={styles.searchbarIcon} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5 18.8569L15.15 14.5069M17.5 8.8569C17.5 13.2752 13.9183 16.8569 9.5 16.8569C5.08172 16.8569 1.5 13.2752 1.5 8.8569C1.5 4.43862 5.08172 0.856903 9.5 0.856903C13.9183 0.856903 17.5 4.43862 17.5 8.8569Z" stroke="#090A0A" />
            </svg>
            <input value={text} onChange={(e)=>changeHandler(e)} className={`${styles.searchbarInput} primary-font-regular`} type="text" name="text" />
            <SearchButton />
        </div>
    );
};

export default SearchBar;
