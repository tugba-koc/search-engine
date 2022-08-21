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
        filteredList: [],
        error: null,
        status: "idle",
    },
    reducers: {
        filterItems: (state, action) => {
            state.filteredList = state.item.filter(item => item[0].toLowerCase().includes(action.payload))
        }
    },
    extraReducers: {
        [getList.pending]: (state, action) => {
            state.status = "loading";
        },
        [getList.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.item = action.payload;
        },
        [getList.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
    },
});

export const selectItems = (state) => state.list.item;
export const selectStatus = (state) => state.list.status;
export const selectFilteredList = (state) => state.list.filteredList;
export const { filterItems } = listSlice.actions;
export default listSlice.reducer;