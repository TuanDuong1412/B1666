import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from './studentSlice';

const StudentForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = Date.now().toString();
        const courses = [];
        dispatch(addStudent({ id, name, age, courses }));
        setName('');
        setAge('');
    };

    return (
        <div>
            <h2 style={{color:'red'}}>Add Student</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name :</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="age">Age  :</label>
                    <input
                        type="number"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default StudentForm;