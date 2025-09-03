import { createSlice } from "@reduxjs/toolkit";

interface IState {
  productId: { id: number; name: string } | null;
  productCount: number;
}
const initialState: IState = {
  productId: null,
  productCount: 1,
};

export const selectProductSlice = createSlice({
  name: "selectProductSlice",
  initialState,
  reducers: {
    setProductId(state, action) {
      state.productId = action.payload;
    },
    setProductCount(state, action) {
      state.productCount = action.payload;
    },
  },
});

export const { setProductId, setProductCount } = selectProductSlice.actions;

export default selectProductSlice.reducer;
