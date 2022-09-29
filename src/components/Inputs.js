// React
import React, { useState } from 'react';

// Styles
import styles from "./Inputs.module.scss"

// Components
import Modal from './Modal';

const Inputs = () => {
    const [state, setState] = useState({
        nameSurname: "",
        country: "",
        city: "",
        email: "",
        activeButton: false,
        isSubmitted: false
    });
    const onChangeInputHandler = (e) => {
        let value = e.target.value;
        if (e.target.name !== "email") value = value.replace(/[0-9]/gi, "");
        setState({ ...state, [e.target.name]: value, isSubmitted: false });
    };
    let buttonActive = state.nameSurname.length && state.city.length && state.country.length && state.email.length
    const submitHandler = (e) => {
        e.preventDefault();
        setState({ ...state, isSubmitted: true });
        let day = new Date().getDate();
        let monthDefault = new Date().getMonth();
        monthDefault = monthDefault < 10 ? "0" + monthDefault.toString() : monthDefault;
        let year = new Date().getFullYear();
        let fullDate = day + "/" + monthDefault + "/" + year
        // eslint-disable-next-line no-unused-vars
        let user = [state.nameSurname, "Tesodev", state.email, fullDate, state.country, state.city]
        setState({
            nameSurname: "",
            country: "",
            city: "",
            email: "",
            activeButton: false,
            isSubmitted: false
        });
    };
    return (
        <>
            <form onSubmit={(e) => submitHandler(e)} className={`${styles.inputWrapper}`}>
                <div>
                    <label htmlFor="text">Name Surname</label>
                    <input value={state.nameSurname} maxLength={60} onChange={onChangeInputHandler} placeholder='Enter name and surname' className={`${styles.input}`} type="text" name="nameSurname" />
                </div>

                <div>
                    <label htmlFor="text">Country</label>
                    <input value={state.country} maxLength="40" onChange={(e) => onChangeInputHandler(e)} placeholder='Enter a country' className={`${styles.input}`} type="text" name="country" />
                    {state.isSubmitted && !state.country.length && <p>Please don't blank in this field.</p>}
                    {(state.isSubmitted && state.country.length && state.country.length < 2) ? <p>The country name should consist of at least 2 letters.</p> : null}
                </div>

                <div>
                    <label htmlFor="text">City</label>
                    <input value={state.city} maxLength="40" onChange={(e) => onChangeInputHandler(e)} placeholder='Enter a city' className={`${styles.input}`} type="text" name="city" />
                    {state.isSubmitted && !state.city.length && <p>Please don't blank in this field.</p>}
                    {(state.isSubmitted && state.city.length && state.city.length < 2) ? <p>The city name should consist of at least 2 letters.</p> : null}
                </div>

                <div>
                    <label htmlFor="text">Email</label>
                    <input required value={state.email} onChange={(e) => onChangeInputHandler(e)} placeholder='Enter an email address' className={`${styles.input}`} type="email" name="email" />
                    {state.isSubmitted && !state.email.length && <p>Please don't blank in this field.</p>}
                </div>
                <button disabled={!(buttonActive)} className={`${!(buttonActive) ? styles.disabled : styles.activeButton} ${styles.button}`}>Add</button>
            </form>
            {state.isSubmitted && state.nameSurname.split(" ").length < 2 && (
                <div className={styles.modal}>
                    <Modal setState={setState} state={state} />
                </div>
            )}
        </>
    )
}

export default Inputs