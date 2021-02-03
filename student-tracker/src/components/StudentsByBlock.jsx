import React, { Component } from 'react';
import * as api from './api'
import BlockList from './BlockList'
import filterStudentsByBlock from '../utils/utils'

class StudentsByBlock extends Component {

    state ={};

    componentDidMount() {
        api.fetchStudents()
            .then((res) => this.setState(() => {
                return {
                    fun: filterStudentsByBlock(res.students, 'fun'),
                    fe: filterStudentsByBlock(res.students, 'fe'),
                    proj: filterStudentsByBlock(res.students, 'proj'),
                    be: filterStudentsByBlock(res.students, 'be')
                };
            }))
    }


    render () {
        if (!this.state.fun) {
            return <img className='nyanCat' src="https://newscrewdriver.files.wordpress.com/2018/10/poptartcat320240.gif?w=700" alt="nyan cat"/>
        }
        return (
            <div>
                <BlockList students={this.state.fun} header='Fundamentals Block' />
                <BlockList students={this.state.be} header='Backend Block' />   
                <BlockList students={this.state.fe} header='Frontend Block' />   
                <BlockList students={this.state.proj} header='Project Block'/>   
            </div>
        );
    }
}

export default StudentsByBlock;