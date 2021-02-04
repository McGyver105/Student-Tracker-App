import React, { Component } from 'react';
import * as api from './api'

class StudentList extends Component {
    state={
        students: null,
        postStudentData : {name: '', startingCohort: ''},
        newStudent: { name: null, id: null, currentBlock: null },
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

    componentDidUpdate() {
        if (this.state.submitted) {
            console.log('updating')
            api.fetchStudents()
            .then((res) => {
                this.setState(() => {
                  return {...res, submitted: false}  
                })
            })
        }
    }

    render () {
        console.log(this.state.deleteId)
        if (!this.state.students) {
            return <img className='nyanCat' src="https://newscrewdriver.files.wordpress.com/2018/10/poptartcat320240.gif?w=700" alt="nyan cat"/>
        }
        return (
            <>
                <h2>All students on course</h2>
                <p>Total Students on the course {this.state.students.length}</p>
                <div className='studentlistcontainer'>
                <ul className='all-students-container'>
                    {this.state.students.map((student) => {
                        return <li key={student._id}>Name: {student.name}<br></br> Starting Cohort: {student.startingCohort}<br></br><br></br></li>
                    })}
                </ul>
                <form className='newStudentForm' onSubmit={this.handleSubmit}>
                    <label>
                        Student name
                        <input id='name' onChange={this.handleChange} placeholder='enter student name'>
                        </input>
                    </label>
                    <label>
                        Starting cohort
                        <input id='startingCohort' onChange={this.handleChange} placeholder='enter student cohort'>
                        </input>
                    </label>
                    <button>Submit</button>
                    {this.state.newStudent.name ? <p>{`${this.state.newStudent.name} created with an id of ${this.state.newStudent.id} in the ${this.convertBlock(this.state.newStudent.currentBlock)} block`}</p> : <> </>}
                    </form>
                    <form onSubmit={this.handleDelete}>
                        <label>
                            Delete student
                            <input onChange={this.handleChange} id="delete" placeholder="enter id to be deleted"></input>
                        </label>
                        <button>Delete</button>
                        {this.state.deleted ? <p>{`Id ${this.state.deleteId} has been removed`}</p> : <></>}
                    </form>
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
        .then(({student:{name, _id, currentBlock}}) => {
            this.setState(() => {
                return {'newStudent': {'name': name, 'id': _id, 'currentBlock': currentBlock}, submitted: true}
            })
        })
    }

    handleDelete = (event) => {
        event.preventDefault()
        fetch(`https://nc-student-tracker.herokuapp.com/api/students/${this.state.deleteId}`, { method: 'DELETE' })
            .then(() => {
                this.setState(() => {
                    return { submitted: true, deleted: true }
                });
            });
    }

    convertBlock = (str) => {
        const lookupObj = {'fun': 'Fundamentals', 'be': 'Backend', 'fe': 'Frontend', 'proj': 'Project'}
        return lookupObj[str]
    }
}

export default StudentList;