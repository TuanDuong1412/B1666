import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeContact } from './store/couter';

function ContactList() {
    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();

    function Remove(contact) {
        return () => {
            dispatch(removeContact(contact));
        }
    }

    function addFavorite(contact) {
        return () => {
            dispatch(addToFavorites(contact));
        }
    }

    return (
        <ul>
            {contacts.map(contact => (
                <li key={contact.id}>
                    {contact.name} - {contact.phoneNumber}
                    <button onClick={Remove(contact)}>Remove</button>
                    <button onClick={addFavorite(contact)}>Add to favorite</button>
                </li>
            ))}
        </ul>
    );
}

export default ContactList;