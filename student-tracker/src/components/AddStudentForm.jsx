import React from 'react';

const AddStudentForm = ({handleChange, handleSubmit, state, convertBlock}) => {
   
    return (
        <form className='newStudentForm' onSubmit={handleSubmit}>
            <label>
                Student name
                <input id='name' value={state.postStudentData.name} onChange={handleChange} placeholder='enter student name'>
                </input>
            </label>
            <label>
                Starting cohort
                <input id='startingCohort' value={state.postStudentData.startingCohort} onChange={handleChange} placeholder='enter student cohort'>
                </input>
            </label>
                <button>Submit</button>
                {state.newStudent.name ? <p>{`${state.newStudent.name} created with an id of ${state.newStudent._id} in the ${convertBlock(state.newStudent.currentBlock)} block`}</p> : <> </>}
        </form>
    );
};

export default AddStudentForm;