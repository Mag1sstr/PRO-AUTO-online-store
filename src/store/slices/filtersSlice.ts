import { createSlice } from "@reduxjs/toolkit";
import type { IItems } from "../../types/interfaces";
import type { AppDispatch } from "../store";
import axios from "axios";

interface IFiltersSlice {
  currentPage: number;
  available: number;
  brands: IItems[];
  models: IItems[];
  gens: IItems[];
  brandId: number;
  modelId: number;
  genId: number;
}

const initialState: IFiltersSlice = {
  currentPage: 1,
  available: 0,
  brands: [],
  models: [],
  gens: [],
  modelId: 0,
  brandId: 0,
  genId: 0,
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
    setBrands(state, action) {
      state.brands = action.payload;
    },
    setModels(state, action) {
      state.models = action.payload;
    },
    setGens(state, action) {
      state.gens = action.payload;
    },
    setBrandId(state, action) {
      state.brandId = action.payload;
    },
    setModelId(state, action) {
      state.modelId = action.payload;
    },
    setGenId(state, action) {
      state.genId = action.payload;
    },
  },
});

export function getBrands() {
  return function (dispatch: AppDispatch) {
    axios
      .get("https://frost.runtime.kz/api/brands")
      .then((resp) => dispatch(setBrands(resp.data)));
  };
}

export function brandChange(id: number) {
  return function (dispatch: AppDispatch) {
    if (id === -1) {
      dispatch(setBrandId(0));
      dispatch(setModelId(0));
      dispatch(setGenId(0));

      dispatch(setModels([]));
      dispatch(setGens([]));
    } else {
      axios
        .get(`https://frost.runtime.kz/api/models?brandId=${id}`)
        .then((resp) => dispatch(setModels(resp.data)));
    }
  };
}

export function modelChange(id: number) {
  return function (dispatch: AppDispatch) {
    if (id === -1) {
      dispatch(setModelId(0));
      dispatch(setGenId(0));

      dispatch(setGens([]));
    } else {
      axios
        .get(`https://frost.runtime.kz/api/generations?modelId=${id}`)
        .then((resp) => dispatch(setGens(resp.data)));
    }
  };
}

export function genChange(id: number) {
  return function (dispatch: AppDispatch) {
    if (id === -1) {
      dispatch(setGenId(0));
    } else {
      dispatch(setGenId(id));
    }
  };
}

export const {
  setAvailable,
  setCurrentPage,
  setBrands,
  setGens,
  setModels,
  setBrandId,
  setGenId,
  setModelId,
} = filtersSlice.actions;

export default filtersSlice.reducer;
