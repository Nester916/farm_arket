import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";

const Market = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default Market;
