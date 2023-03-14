import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    darkTheme: false,
    loading: false,
    repos: [],
  },
  reducers: {
    toggleDarkTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },

    setLoadingSuccess: (state) => {
      state.loading = true;
    },

    setLoadingError: (state) => {
      state.loading = false;
    },

    setRepos: (state, { payload: repos }) => {
      state.repos = repos;
    },
  },
});

export const { toggleDarkTheme, setRepos, setLoadingSuccess, setLoadingError, setSkills } =
  appSlice.actions;

export const selectAppState = (state) => state.app;
export const selectDarkTheme = (state) => selectAppState(state).darkTheme;
export const selectRepos = (state) => selectAppState(state).repos;
export const selectLoadingState = (state) => selectAppState(state).loading

export default appSlice.reducer;
