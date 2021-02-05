import React from 'react';

const AllStudents = ({studentsData}) => {
    return (
        <ul className='all-students-container'>
                {studentsData.map((student) => {
                    return <li className='students-box' key={student._id}>Name: {student.name}<br></br><br></br> Starting Cohort: {student.startingCohort}<br></br><br></br> Student id: {student._id}<br></br><br></br></li>
                })}
            </ul>
    );
};

export default AllStudents;