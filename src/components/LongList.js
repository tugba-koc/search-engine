import React, { useEffect } from 'react';
import styles from "./LongList.module.css";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectFilteredList, selectStatus, getList } from '../redux/list/listSlice';
import LongListItem from './LongListItem';

const LongList = () => {
    const dispatch = useDispatch();
    let status = useSelector(selectStatus);
    let filteredList = useSelector(selectFilteredList);

    useEffect(() => {
        if (status === "success") dispatch(getList());
    }, [dispatch, status]);

    return (
        <div className={styles.shortListMainWrapper}>
            {filteredList.map((item, index) => (
                <>
                    <LongListItem key={index} item={item} />
                    <div className={styles.shortListBorder}></div>
                </>
            ))}
        </div>
    )
}

export default LongList