// Styles
import styles from "./Modal.module.css"

const Modal = (props) => {
    const {state, setState} = props
    const closeModalCard = () => {
        setState({...state, isSubmitted:false})
    }
    return (
        <div className={styles.modalWrapper}>
            <div onClick={()=>closeModalCard()} className={styles.closeModal}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 8L8 14M8 8L14 14M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z" stroke="#090A0A" />
                </svg>
            </div>
            <p className={`primary-font-bold`}>Error while adding link element</p>
            <p className={`primary-font-regular`}>Name and surname should contain at least 2 words.</p>
        </div>
    )
}

export default Modal