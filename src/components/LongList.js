import React, { useEffect } from 'react';
import styles from "./LongList.module.css";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectStatus, getList, selectFilteredList } from '../redux/list/listSlice';
import LongListItem from './LongListItem';

const LongList = ({currentList}) => {
    const dispatch = useDispatch();
    let status = useSelector(selectStatus);
    let filteredList = useSelector(selectFilteredList);

    useEffect(() => {
        if (status === "idle") dispatch(getList());
    }, [dispatch, status]);

    return (
        <div className={styles.shortListMainWrapper}>
            {currentList.map((item, index) => (
                <React.Fragment key={index}>
                    <LongListItem item={item} />
                    <div className={styles.shortListBorder}></div>
                </React.Fragment>
            ))}
        </div>
    )
}

export default LongList