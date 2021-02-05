import React, { Component } from 'react';
import * as api from './api'
import AllStudents from './AllStudents'
import AddStudentForm from './AddStudentForm'
import RemoveStudentIdForm from './RemoveStudentIdForm'

class StudentList extends Component {
    state={
        students: null,
        postStudentData : {name: '', startingCohort: ''},
        newStudent: { name: null, _id: null, currentBlock: null, startingCohort: null },
        submitted: false,
        deleteId: '',
        deleted: false
    };

    componentDidMount() {
        api.fetchStudents()
        .then((res) => this.setState(() => {
            return {...res}
        }))
    }


    render () {
        if (!this.state.students) {
            return <img className='nyanCat' src="https://newscrewdriver.files.wordpress.com/2018/10/poptartcat320240.gif?w=700" alt="nyan cat"/>
        }
        return (
            <>
                <h2>All students on course</h2>
                <p>Total Students on the course {this.state.students.length}</p>
                <div className='studentlistcontainer'>
                    <AllStudents studentsData={this.state.students}/>
                    <AddStudentForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} state={this.state} convertBlock={this.convertBlock}/>
                    <RemoveStudentIdForm handleDelete={this.handleDelete} handleChange={this.handleChange} state={this.state}/>
                </div>    
            </>
        );
    }


    handleChange = (event) => {
        if (event.target.id === 'delete') {
            this.setState(() => {
                return { deleteId: event.target.value, deleted: false };
            });
        }
        if (event.target.id === 'startingCohort') {
            this.setState((currentState) => {
                return { postStudentData: { ...currentState.postStudentData, [event.target.id]: Number(event.target.value) }, newStudent: { name: null } };
            })
        } else {
            this.setState((currentState) => {
                return { postStudentData: { ...currentState.postStudentData, [event.target.id]: event.target.value }, newStudent: { name: null } };
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch('https://nc-student-tracker.herokuapp.com/api/students', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(this.state.postStudentData)})
        .then((res) => {
            return res.json()
        })
        .then(({student:{name, _id, currentBlock, startingCohort}}) => {
            this.setState((currentState) => {
                return {'newStudent': {'name': name, '_id': _id, 'currentBlock': currentBlock, 'startingCohort': startingCohort}, submitted: true, postStudentData : {name: '', startingCohort: ''}}
            })
        })
        .then(() => {
            this.addStudentToState(this.state.newStudent)
        })
    }

    handleDelete = (event) => {
        event.preventDefault()
        fetch(`https://nc-student-tracker.herokuapp.com/api/students/${this.state.deleteId}`, { method: 'DELETE' })
            .then(() => {
                this.setState(({students, deleteId}) => {
                    return { submitted: true, deleted: true, deleteId: '', students: api.removeStudentFromState(students, deleteId) };
                });
            })
    }

    convertBlock = (str) => {
        const lookupObj = {'fun': 'Fundamentals', 'be': 'Backend', 'fe': 'Frontend', 'proj': 'Project'}
        return lookupObj[str]
    }

    addStudentToState = (addingStudent) => {
         this.setState((currentState) => {
             return {
                 students: [addingStudent, ...currentState.students]
          };
        })
    }

}

export default StudentList;
