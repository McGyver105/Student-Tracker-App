import React from 'react';

const Blocklist = (props) => {
    console.log(props)
    return (
        <>
         <header>Test Block</header>
         <ul>{props.students.map((student) => {
             return <li key={student._id}>{student.name}</li>
         })}</ul>   
        </>
    );
};

export default Blocklist;