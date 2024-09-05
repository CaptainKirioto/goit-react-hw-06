import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.items.fliter((item) => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export const selectedContacts = (state) => state.contacts.items;
export default slice.reducer;

// export const addContact = createAction("contacts/addContact");
// export const deleteContact = createAction("contacts/deleteContact");

// export const contactsReducer = createReducer({ initialState }, (builder) => {
//   builder
//     .addCase(addContact, (state, action) => {
//       state.contacts.push(action.payload);
//     })
//     .addCase(deleteContact, (state, action) => {
//       state.contacts = state.contacts.fliter(
//         (contact) => contact.id !== action.payload
//       );
//     });
// });
