// Styles
import styles from "./AddButton.module.scss";

// React router
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AddButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={()=>navigate("/addlink")} className={styles.button}>Add new record</button>
    </>
  )
}

export default AddButton