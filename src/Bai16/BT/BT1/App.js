import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import AddContactForm from './AddContactForm';
import ContactList from './ContactList';
import FavoriteContactList from './FavoriteContactList';
import contactsReducer from './store/couter';

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    },
});

function B16BT1() {
    return (
        <Provider store={store}>
            <div>

                <h1 style={{color:'red'}}>Danh bạ</h1>
                <AddContactForm />
                <ContactList />
                <FavoriteContactList />
            </div>
        </Provider>
    );
}

export default B16BT1;