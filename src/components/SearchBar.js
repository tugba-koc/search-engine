import React from 'react';
import styles from "./SearchBar.module.scss";
import {useDispatch} from 'react-redux';
import Logo from './Logo';
import { filterItems, onChangeHandler } from '../redux/list/listSlice';
import { selectText } from '../redux/list/listSlice';
import { useSelector } from 'react-redux';
import AddButton from './AddButton';
import SearchButton from './SearchButton';

const SearchBar = ({setCurrentPage}) => {
    const dispatch = useDispatch();
    let text = useSelector(selectText);

    const changeHandler = (e) => {
        let filter = e.target.value;
        filter = filter.trim();
        filter = filter.toLowerCase();
        dispatch(onChangeHandler(filter));
        setCurrentPage(1)

        if(text.length >= 1) {
            dispatch(filterItems(filter)); 
        };
    };

    return (
        <div className={styles.searchbarMainWrapper}>
            <Logo />
            <input value={text} onChange={(e)=>changeHandler(e)} className={`${styles.searchbarInput} primary-font-regular`} type="text" name="text" />
            <SearchButton />
            <AddButton/>
        </div>
    );
};

export default SearchBar;
