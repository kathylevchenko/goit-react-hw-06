import { createSlice,nanoid } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  contacts:{
  items: [],
    }
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {
    addContact: 
      (state, action)=> {
        state.contacts.items.push(action.payload);
      },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (item) => item.id !== action.payload
      );
    },
  },
})
export const selectContacts = (state) => state.contacts.contacts.items;
export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } =
  contactsSlice.actions;