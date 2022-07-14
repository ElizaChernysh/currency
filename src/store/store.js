import {configureStore } from '@reduxjs/toolkit';
import currencySlice from './reducers/currencyReducer';

export const store = configureStore({ 
  reducer: {
    currency: currencySlice,
  },
});
