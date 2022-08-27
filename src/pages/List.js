import React, { useState } from 'react'
import LongList from '../components/LongList'
import SearchBar from '../components/SearchBar';
import { useSelector } from 'react-redux';
import { selectSortedList } from '../redux/list/listSlice';
import Pagination from '../components/Pagination';
import SelectOption from '../components/SelectOption';
import styles from "./List.module.css"
import NoDataView from '../components/NoDataView';

const List = () => {
  const [currentPage, setCurrentPage] = useState(1)
  let sortedList = useSelector(selectSortedList);
  // paginate filtered data
  let numPerPage = 4;
  let numPages = Math.ceil(sortedList.length / numPerPage);
  let pages = [];
  for (let i = 1; i <= numPages; i++) {
    pages.push(i);
  }
  let start = (currentPage - 1) * numPerPage;
  let end = currentPage * numPerPage;
  let currentList = sortedList.slice(start, end);

  return (
    <>
      <SearchBar setCurrentPage={setCurrentPage} />
      {currentList.length ? (
        <>
          <div className={styles.bodyLayout}>
            <LongList currentList={currentList} />
            <SelectOption />
          </div>
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} />
        </>
      ): <NoDataView />}

    </>
  )
}

export default List