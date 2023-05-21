import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addContact: (state, action) => {
            state.push(action.payload);
        },
        removeContact: (state, action) => {
            console.log(action.payload);
            return state.filter(contact => contact.id !== action.payload.id);
        },
        addToFavorites: (state, action) => {
            const contact = state.find(contact => contact.id === action.payload.id);
            contact.isFavorite = true;
        },
        removeFavorites: (state, action) => {
            const contact = state.find(contact => contact.id === action.payload.id);
            contact.isFavorite = false;
        },
    },
});

const contactsReducer = contactsSlice.reducer

export const { addContact, removeContact, addToFavorites, removeFavorites } = contactsSlice.actions;

export default contactsReducer;