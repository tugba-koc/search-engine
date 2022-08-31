// Styles
import styles from './LongListItem.module.scss';

const ShortListItem = (props) => {
    const { item } = props;

    return (
        <div className={styles.shortListItemSingle}>
            <div>
                <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 9.94846C19 16.9485 10 22.9485 10 22.9485C10 22.9485 1 16.9485 1 9.94846C1 7.56151 1.94821 5.27232 3.63604 3.58449C5.32387 1.89667 7.61305 0.948456 10 0.948456C12.3869 0.948456 14.6761 1.89667 16.364 3.58449C18.0518 5.27232 19 7.56151 19 9.94846Z" stroke="#090A0A" />
                    <path d="M10 12.9485C11.6569 12.9485 13 11.6053 13 9.94846C13 8.2916 11.6569 6.94846 10 6.94846C8.34315 6.94846 7 8.2916 7 9.94846C7 11.6053 8.34315 12.9485 10 12.9485Z" stroke="#090A0A" />
                </svg>
            </div>
            <div>
                <p className={`primary-font-bold ${styles.shortListItemCity}`}>{item[5]}</p>
                <p className={`primary-font-regular ${styles.shortListItemAddress}`}>{item[4]}</p>
            </div>
            <div>
                <p className={`primary-font-regular ${styles.shortListItemName}`}>{item[0]}</p>
                <p className={`primary-font-bold ${styles.shortListItemDate}`}>{item[3]}</p>
            </div>
        </div>
    );
};

export default ShortListItem;