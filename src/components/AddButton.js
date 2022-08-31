// Styles
import styles from "./AddButton.module.scss";

// React router
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <>
      <button className={styles.button}><Link to={`/addlink`}>Add new record</Link></button>
    </>
  )
}

export default AddButton