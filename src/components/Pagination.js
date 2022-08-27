import React from 'react';
import styles from "./Pagination.module.css";
import { useNavigate } from 'react-router-dom';
import { selectText } from '../redux/list/listSlice';
import { useSelector } from 'react-redux';

const Pagination = (props) => {
    const navigate = useNavigate();
    let text = useSelector(selectText);
    const { pages, setCurrentPage, currentPage } = props;

    return (
        <div className={styles.paginationButtonGroup}>
            <button className={styles.paginationButtonItem} disabled={currentPage === 1 ? true : false} 
            onClick={() => {
                navigate(`/list?q=${text}&p=${currentPage - 1}`)
                setCurrentPage(currentPage - 1)
            }}>Previous</button>
            {pages.length <= 6 && pages.map((page, index) => (
                <div onClick={() => {
                    navigate(`/list?q=${text}&p=${Number(index) + 1}`)
                    setCurrentPage(Number(index) + 1)
                }} key={index} id={Number(index) + 1 === currentPage ? `${styles.active}` : ""} className={styles.paginationButtonItem}>
                    {page}
                </div>
            ))}


            {currentPage > 3 && pages.length > 6 && <>
                <div onClick={() => {
                    navigate(`/list?q=${text}&p=1`);
                    setCurrentPage(1)
                }} key={0} id={Number(0) + 1 === currentPage ? `${styles.active}` : ""} className={styles.paginationButtonItem}>
                    1
                </div>
                <div>...</div></>}

            {(currentPage !== 1 && currentPage !== 2) && pages.length > 6 && pages.map((page, index) => (
                <div onClick={() => {
                    navigate(`/list?q=${text}&p=${Number(index) + 1}`)
                    setCurrentPage(Number(index) + 1)
                }} key={index} id={Number(index) + 1 === currentPage ? `${styles.active}` : ""} className={`${styles.paginationButtonItem} ${((Number(index) > Number(currentPage) + 1) || (Number(index) + 2 < Number(currentPage))) ? styles.hidden : ""}`}>
                    {page}
                </div>

            ))}

            {(currentPage === 1 || currentPage === 2) && pages.length > 6 && pages.map((page, index) => (
                <div onClick={() => {
                    navigate(`/list?q=${text}&p=${Number(index) + 1}`)
                    setCurrentPage(Number(index) + 1)
                }} key={index} id={Number(index) + 1 === currentPage ? `${styles.active}` : ""} className={`${styles.paginationButtonItem} ${((Number(index) + 1 > Number(currentPage) + 3) || (Number(index) + 4 < Number(currentPage))) ? styles.hidden : ""}`}>
                    {page}
                </div>

            ))}

            {currentPage + 3 < pages.length && pages.length > 6 && <div>...</div>}

            {currentPage + 2 < pages.length && pages.length > 6 && pages.map((page, index) => (
                <div onClick={() => {
                    navigate(`/list?q=${text}&p=${Number(index) + 1}`)
                    setCurrentPage(Number(index) + 1)
                }} key={index} id={Number(index) + 1 === currentPage ? `${styles.active}` : ""} className={`${styles.paginationButtonItem} ${(Number(index) + 1 !== pages.length) ? styles.hidden : ""}`}>
                    {page}
                </div>

            ))}
            <button className={styles.paginationButtonItem} disabled={currentPage === pages.length ? true : false} 
            onClick={() => {
                navigate(`/list?q=${text}&p=${currentPage + 1}`)
                setCurrentPage(currentPage + 1)
            }}>Next</button>
        </div>
    );
};

export default Pagination;