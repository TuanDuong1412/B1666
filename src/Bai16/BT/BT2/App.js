import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import StudentForm from './StudentForm';
import StudentList from './StudentList';
import CourseForm from './CourseForm';

const store = configureStore({
    reducer: rootReducer,
});

const B16BT2 = () => {
    return (
        <Provider store={store}>
            <div>
                <StudentForm />
                <StudentList />
                <CourseForm />
            </div>
        </Provider>
    );
};

export default B16BT2;