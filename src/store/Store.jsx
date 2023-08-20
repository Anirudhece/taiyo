import { configureStore } from "@reduxjs/toolkit";
// import addAssignmentReducer from "./slices/addAssignmentReducer";
import drawerReducer from "./slices/DrawerSlice";
const Store = configureStore({
  reducer: {
    // AddAssignment: addAssignmentReducer,
    drawer: drawerReducer,
  },
});
export default Store;
