import React from 'react';
import styles from "./LongList.module.css";
import LongListItem from './LongListItem';

const LongList = ({ currentList }) => {
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