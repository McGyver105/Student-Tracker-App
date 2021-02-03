import React from 'react';

const Blocklist = (props) => {
    return (
        <>
            <header>{props.header}</header>
            <ul>{props.students.map((student) => {
                return <li key={student._id}>{student.name}</li>;
            })}</ul>
        </>
    );
};

export default Blocklist;