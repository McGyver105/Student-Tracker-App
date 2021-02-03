import React, { Component } from 'react';
import * as api from './api'

class Graduates extends Component {
    
        state={
            students: null,
        };

        componentDidMount() {
            api.fetchGraduates()
            .then((res) => this.setState(() => {
                return {...res}
            }))
        }
        
        render() {
            if (!this.state.students) {
                return <img className='nyanCat' src="https://newscrewdriver.files.wordpress.com/2018/10/poptartcat320240.gif?w=700" alt="nyan cat"/>
            }
            return (
                <>
                <h2>All Graduates</h2>
                <ul>
                    {this.state.students.map((student) => {
                        return <li key={student._id}>{student.name}</li>
                    })}
                </ul>
                </>
            );
        }
}

export default Graduates;