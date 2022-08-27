import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getList = createAsyncThunk("get/getList", async () => {
    const res = await fetch("data/mockData.json");
    let val = await res.json();
    let list = await val.data;
    return list
});

export const listSlice = createSlice({
    name: "list",
    initialState: {
        item: [],
        text: "",
        sortedTerm: "",
        filteredList: [],
        sortedList: [],
        error: null,
        status: "idle",
    },
    reducers: {
        filterItems: (state, action) => {
            state.filteredList = state.item.filter(item => item[0].toLowerCase().includes(action.payload));
            state.sortedTerm = "Order by";
            state.sortedList = state.filteredList;
        },
        onChangeHandler: (state, action) => {
            state.text = action.payload;
        },
        onChangeSortHandler: (state, action) => {
            state.sortedTerm = action.payload;
        },
        nameAscending: (state, action) => {
            state.sortedTerm = "Name ascending";
            state.sortedList = state.filteredList ? state.filteredList.sort() : state.item.sort().reverse();
        },
        nameDescending: (state, action) => {
            state.sortedTerm = "Name descending";
            state.sortedList = state.filteredList ? state.filteredList.sort().reverse() : state.item.sort();
        },
        yearAscending: (state, action) => {
            state.sortedTerm = "Year ascending";
            state.sortedList = state.filteredList.sort((a,b)=>Number(a[3].split("/").reverse().join("")) - Number(b[3].split("/").reverse().join("")))
        },
        yearDescending: (state, action) => {
            state.sortedTerm = "Year descending";
            state.sortedList = state.filteredList.sort((a,b)=>Number(b[3].split("/").reverse().join("")) - Number(a[3].split("/").reverse().join("")))
        }
    },
    extraReducers: {
        [getList.pending]: (state, action) => {
            state.status = "loading";
        },
        [getList.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.item = action.payload;
            state.filteredList = action.payload;
        },
        [getList.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
    },
});

export const selectItems = (state) => state.list.item;
export const selectStatus = (state) => state.list.status;
export const selectText = (state) => state.list.text;
export const selectSortedTerm = (state) => state.list.sortedTerm;
export const selectFilteredList = (state) => state.list.filteredList;
export const selectSortedList = (state) => state.list.sortedList;
export const { filterItems, onChangeHandler, onChangeSortHandler, nameAscending, nameDescending, yearAscending, yearDescending } = listSlice.actions;
export default listSlice.reducer;