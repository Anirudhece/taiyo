import { createSlice } from "@reduxjs/toolkit";

const removeElementAtIndex = (array, index) => {
  if (index >= 0 && index < array.length) {
    const newArray = [...array];
    newArray.splice(index, 1);
    return newArray;
  }
  return array;
};

const contactScreen = createSlice({
  name: "contactScreen",
  initialState: { contacts: [], isOpen: false },

  reducers: {
    modalReducer: (state, action) => {
      state.isOpen = action.payload.isOpen;
    },
    saveContactInfoReducer: (state, action) => {
      const newContact = {
        id: Date.now(),
        ...action.payload,
      };
      state.contacts.push(newContact);
    },
  },
});
export const { modalReducer, saveContactInfoReducer } = contactScreen.actions;
export default contactScreen.reducer;
