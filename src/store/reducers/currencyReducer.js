import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currency: [],
  money: '',
  currentCurrencyOption: "EUR",
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState, 
  reducers: {
    loadCurrency: (state, action) => {
      state.currency = action.payload;
    },

    setCurrencyOption: (state,action) => {
      state.currentCurrencyOption = action.payload;
    },

    getAmount: (state, action) => {
      state.money = action.payload;
    },
  },
});

export const { loadCurrency, setCurrencyOption, getAmount
} = currencySlice.actions;
export default currencySlice.reducer;