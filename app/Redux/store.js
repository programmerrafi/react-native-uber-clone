import { configureStore } from "@reduxjs/toolkit";
// import dataReducer from './slices/dataSlice'
import navReducer from "./slice/navSlice";

export const store = configureStore({
  reducer: {
    // data: dataReducer,
    nav: navReducer,
  },
});
