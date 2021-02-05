import React from 'react';

const AddStudentForm = ({handleChange, handleSubmit, state, convertBlock}) => {
   
    return (
        <form className='newForm' onSubmit={handleSubmit}>
            <label className='label-text'>
                Student name
                <input className='input-button' id='name' value={state.postStudentData.name} onChange={handleChange} placeholder='enter student name'>
                </input>
            </label>
            <label className='label-text'>
                Starting cohort
                <input className='input-button' id='startingCohort' value={state.postStudentData.startingCohort} onChange={handleChange} placeholder='enter student cohort'>
                </input>
            </label>
                <button className='submit-button'>Submit</button>
                {state.newStudent.name ? <p className='pop-up-message'>{`${state.newStudent.name} created with an id of ${state.newStudent._id} in the ${convertBlock(state.newStudent.currentBlock)} block`}</p> : <> </>}
        </form>
    );
};

export default AddStudentForm;