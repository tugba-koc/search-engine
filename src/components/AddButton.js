// Styles
import styles from "./AddButton.module.scss";

// React router
import { useNavigate } from "react-router-dom";

const AddButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={()=>navigate("/add-link")} className={styles.button}>Add new record</button>
    </>
  )
}

export default AddButton