import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "./slices/DrawerSlice";
import ContactReducer from "./slices/ContactSlice";
const Store = configureStore({
  reducer: {
    drawer: drawerReducer,
    contact: ContactReducer
  },
});
export default Store;
