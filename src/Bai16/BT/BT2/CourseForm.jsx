import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCourse } from './studentSlice';

const CourseForm = () => {
    const [courseName, setCourseName] = useState('');
    const [studentId, setStudentId] = useState('');
    const students = useSelector((state) => state.students);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const course = { id: Date.now().toString(), name: courseName };
        dispatch(addCourse({ studentId, course }));
        setCourseName('');
        setStudentId('');
    };

    return (
        <div>
            <h2>Add Course</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="courseName">Course Name</label>
                    <input
                        type="text"
                        id="courseName"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="studentId">Student</label>
                    <select
                        id="studentId"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                    >
                        <option value="">-- Select a student --</option>
                        {students.map((student) => (
                            <option key={student.id} value={student.id}>
                                {student.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default CourseForm;