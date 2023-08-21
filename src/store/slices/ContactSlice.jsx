import { createSlice } from "@reduxjs/toolkit";

const removeElementAtIndex = (array, index) => {
  if (index >= 0 && index < array.length) {
    const newArray = [...array];
    newArray.splice(index, 1);
    return newArray;
  }
  return array;
};
const contacts = [
  {
    id: "",
    firstName: "",
    lastName: "",
    status: "",
  },
];

const contactScreen = createSlice({
  name: "contactScreen",
  initialState: { contacts, isOpen: false, contactCount: 0 },

  reducers: {
    modalReducer: (state, action) => {
      state.isOpen = action.payload.isOpen;
    },
  },
});
export const { modalReducer } = contactScreen.actions;
export default contactScreen.reducer;
