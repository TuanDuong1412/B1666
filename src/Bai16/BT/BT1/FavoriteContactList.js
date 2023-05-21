import { removeFavorites } from './store/couter';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
function FavoriteContactList() {
    const dispatch = useDispatch();

    const favoriteContacts = useSelector(state =>
        state.contacts.filter(contact => contact.isFavorite)
    );

    function addFavorite(contact) {
        return () => {
            dispatch(removeFavorites(contact));
        }
    }

    return (
        <>
            <h3>Favorite Contacts</h3>
            <ul>
                {favoriteContacts.map(contact => (
                    <li key={contact.id}>
                        {contact.name} - {contact.phoneNumber}
                        <button onClick={addFavorite(contact)}>Remove favorite</button>
                    </li>
                ))}
            </ul>

        </>
    );
}

export default FavoriteContactList;