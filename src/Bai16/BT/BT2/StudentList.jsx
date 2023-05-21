import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeStudent, removeCourse } from './studentSlice';

const StudentList = () => {
    const students = useSelector((state) => state.students);
    const dispatch = useDispatch();

    const handleRemoveStudent = (id) => {
        dispatch(removeStudent(id));
    };

    const handleRemoveCourse = (studentId, courseId) => {
        dispatch(removeCourse({ studentId, courseId }));
    };

    return (
        <div>
            <h2>List Students</h2>
            <ul>
                {students.map((student) => (
                    <li key={student.id}>
                        {student.name} ({student.age})
                        <button onClick={() => handleRemoveStudent(student.id)}>Remove</button>
                        <ul>
                            {student.courses.map((course) => (
                                <li key={course.id}>
                                    {course.name}
                                    <button onClick={() => handleRemoveCourse(student.id, course.id)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;