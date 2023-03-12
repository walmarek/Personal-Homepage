import {createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
    name: "app",
    initialState: {
        darkTheme: false,
        
    }, 
    reducers: {
toggleDarkTheme: state => {
    state.darkTheme = !state.darkTheme;
}
    }
})

export const {toggleDarkTheme } = appSlice.actions;

export const selectAppState = state => state.app;
export const selectDarkTheme = state => selectAppState(state).darkTheme;

export default appSlice.reducer