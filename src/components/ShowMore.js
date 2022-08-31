// Styles
import styles from "./ShowMore.module.scss"

// React redux
import { useSelector } from 'react-redux';
import { selectText } from '../redux/list/listSlice';

// React router
import { useNavigate } from "react-router-dom";

const ShowMore = () => {
    const navigate = useNavigate();
    const text = useSelector(selectText)
  return (
    <p className={`primary-font-bold ${styles.showmoreText}`} onClick={()=>navigate(`/list?q=${text}`)}>Show more...</p>
  )
}

export default ShowMore