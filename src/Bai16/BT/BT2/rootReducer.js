import { combineReducers } from '@reduxjs/toolkit';
import studentReducer from './studentSlice';

const rootReducer = combineReducers({
    students: studentReducer,
});

export default rootReducer;