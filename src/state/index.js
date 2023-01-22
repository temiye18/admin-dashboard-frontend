import { configureStore } from "@reduxjs/toolkit";

import globalReducer from "./theme-slice";

export default configureStore({
  reducer: { global: globalReducer },
});
