// React
import React, { useEffect, useState } from 'react'

// Styles
import styles from "./List.module.css"

// Components
import LongList from '../components/LongList'
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import SelectOption from '../components/SelectOption';
import NoDataView from '../components/NoDataView';

// React redux
import { useDispatch, useSelector } from 'react-redux';
import { getList, selectFilteredList, selectSortedList, selectStatus } from '../redux/list/listSlice';

const List = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  let status = useSelector(selectStatus);
  useEffect(() => {
    if (status === "idle") {
      dispatch(getList());
    }
  }, [dispatch, status]);

  let sortedList = useSelector(selectSortedList);
  let filteredList = useSelector(selectFilteredList)
  // paginate filtered data
  let numPerPage = 4;
  let numPages = ""
  if (!sortedList.length) {
    numPages = Math.ceil(filteredList.length / numPerPage);
  } else {
    numPages = Math.ceil(sortedList.length / numPerPage);
  }
  let pages = [];
  for (let i = 1; i <= numPages; i++) {
    pages.push(i);
  }
  let start = (currentPage - 1) * numPerPage;
  let end = currentPage * numPerPage;
  let currentList = [];
  if (!sortedList.length) {
    currentList = filteredList.slice(start, end);
  } else {
    currentList = sortedList.slice(start, end);
  }

  return (
    <>
      <SearchBar setCurrentPage={setCurrentPage} />
      {currentList.length ? (
        <>
          <div className={styles.bodyLayout}>
            <LongList currentList={currentList} />
            <SelectOption />
          </div>
          ({currentList.length > 3 || currentPage !== 1 ? <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} /> : null})
        </>
      ) : <NoDataView />}
    </>
  )
}

export default List