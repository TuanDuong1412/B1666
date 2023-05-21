import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from './store/couter';

function AddContactForm() {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const newContact = {
            id: nanoid(),
            name,
            phoneNumber,
            isFavorite: false,
        };
        dispatch(addContact(newContact));
        setName('');
        setPhoneNumber('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Tên"
                value={name}
                onChange={event => setName(event.target.value)}
            />
            <input
                type="text"
                placeholder="Số điện thoại"
                value={phoneNumber}
                onChange={event => setPhoneNumber(event.target.value)}
            />
            <button type="submit">Thêm</button>
        </form>
    );
}

export default AddContactForm;