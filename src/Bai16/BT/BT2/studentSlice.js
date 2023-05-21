import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const studentSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        addStudent: (state, action) => {
            state.push(action.payload);
        },
        removeStudent: (state, action) => {
            const id = action.payload;
            return state.filter((student) => student.id !== id);
        },
        addCourse: (state, action) => {
            const { studentId, course } = action.payload;
            const student = state.find((student) => student.id === studentId);
            student.courses.push(course);
        },
        removeCourse: (state, action) => {
            const { studentId, courseId } = action.payload;
            const student = state.find((student) => student.id === studentId);
            student.courses = student.courses.filter((course) => course.id !== courseId);
        },
    },
});

export const { addStudent, removeStudent, addCourse, removeCourse } = studentSlice.actions;
export default studentSlice.reducer;