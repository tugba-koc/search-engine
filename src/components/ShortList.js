import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ShortListItem from './ShortListItem';
import { selectFilteredList, selectStatus, getList } from '../redux/list/listSlice';
import styles from './ShortList.module.css';

const ShortList = () => {
  const dispatch = useDispatch();
  let status = useSelector(selectStatus);
  let filteredList = useSelector(selectFilteredList);

  useEffect(() => {
    if (status === "idle") dispatch(getList());
  }, [dispatch, status])

  console.log(filteredList);

  return (
    <div className={styles.shortListMainWrapper}>
      {filteredList.map((item, index) => (
        <ShortListItem key={index} item={item} />
      ))}
    </div>
  )
}

export default ShortList