// React
import React, { useEffect } from 'react';

// React redux
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectFilteredList, selectStatus, getList, selectText } from '../redux/list/listSlice';

// Components
import ShowMore from './ShowMore';
import styles from './ShortList.module.scss';
import ErrorView from './ErrorView';
import Spinner from './Spinner';
import ShortListItem from './ShortListItem';

const ShortList = () => {
  const dispatch = useDispatch();
  let status = useSelector(selectStatus);
  let filteredList = useSelector(selectFilteredList);
  let text = useSelector(selectText);

  useEffect(() => {
    if((status === "idle")){
      dispatch(getList())
    } 
  }, [dispatch, status])

  if(status === "failed"){
    return <ErrorView />
  }else if(status === "loading") {
    return <Spinner />
  }else if(text.length >= 2 && filteredList.length > 0) {
    return (
      <div className={styles.shortListMainWrapper}>
        {filteredList.slice(0,3).map((item, index) => (
          <ShortListItem key={index} item={item} />
        ))}
        {filteredList.length > 3 && <ShowMore />}
      </div>
    )
  }
}

export default ShortList