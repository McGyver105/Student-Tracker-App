import React from 'react';

const RemoveStudentIdForm = ({handleDelete, state, handleChange}) => {
    return (
        <form className='newForm' onSubmit={handleDelete}>
        <label className='label-text'>
            Delete student
            <input className='input-button' value={state.deleteId} onChange={handleChange} id="delete" placeholder="enter id to be deleted"></input>
        </label>
        <button className='submit-button'>Delete</button>
        {state.deleted ? <p>{`Id has been removed`}</p> : <></>}
    </form>
    );
};

export default RemoveStudentIdForm;