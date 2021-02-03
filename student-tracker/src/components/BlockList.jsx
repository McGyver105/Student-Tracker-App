import React from 'react';

const Blocklist = (props) => {
    return (
        <div className="block-list-container">
            <header className='blockListHeader' >{props.header}</header>
            <ul>{props.students.map((student) => {
                return <li key={student._id}>{student.name}</li>;
            })}</ul>
        </div>
    );
};

export default Blocklist;