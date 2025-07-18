import { createSlice } from "@reduxjs/toolkit";

interface IFiltersSlice {
  currentPage: number;
  available: number;
}

const initialState: IFiltersSlice = {
  currentPage: 1,
  available: 0,
};

export const filtersSlice = createSlice({
  name: "filtersSlice",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setAvailable(state, action) {
      state.available = action.payload;
    },
  },
});

export const { setAvailable, setCurrentPage } = filtersSlice.actions;

export default filtersSlice.reducer;
