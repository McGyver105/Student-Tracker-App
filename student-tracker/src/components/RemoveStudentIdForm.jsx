import React from 'react';

const RemoveStudentIdForm = ({handleDelete, state, handleChange}) => {
    return (
        <form onSubmit={handleDelete}>
        <label>
            Delete student
            <input value={state.deleteId} onChange={handleChange} id="delete" placeholder="enter id to be deleted"></input>
        </label>
        <button>Delete</button>
        {state.deleted ? <p>{`Id has been removed`}</p> : <></>}
    </form>
    );
};

export default RemoveStudentIdForm;