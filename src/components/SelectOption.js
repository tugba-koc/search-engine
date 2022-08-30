import React from 'react';
import styles from "./SelectOption.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { onChangeSortHandler, nameAscending, nameDescending, yearAscending, yearDescending, selectSortedTerm } from '../redux/list/listSlice';

const SelectOption = () => {
    const dispatch = useDispatch();
    let sortedTerm = useSelector(selectSortedTerm);
    let options = ["Name ascending", "Name descending", "Year ascending", "Year descending"];
    const changeHandler = (e) => {
        let sortName = e.target.value;
        sortName = sortName.toLowerCase()
        sortName = sortName.split(" ");
        sortName[1] = sortName[1][0].toUpperCase() + sortName[1].slice(1);
        sortName = sortName.join("");
        dispatch(onChangeSortHandler(sortName))
        sortingHandler(sortName)
    };

    const sortingHandler = (name) => {
        if (name === "nameAscending") dispatch(nameAscending());
        else if (name === "nameDescending") dispatch(nameDescending());
        else if (name === "yearAscending") dispatch(yearAscending());
        else if (name === "yearDescending") dispatch(yearDescending());
    }

    return (
        <>
            <select className={`${styles.selectWrapper}`} value={sortedTerm || "Order by"} name="options" onChange={(e) => changeHandler(e)}>
                <option value="Order by" disabled hidden>Order by</option>
                {options.map((el, index) => (
                    <option className={styles.optionSingle} key={index} value={el}>
                        {el}
                    </option>
                ))}
            </select>

        </>
    )
}

export default SelectOption