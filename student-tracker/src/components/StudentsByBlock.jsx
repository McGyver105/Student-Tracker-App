import React, { Component } from 'react';
import * as api from './api'
import BlockList from './BlockList'

class StudentsByBlock extends Component {

    state ={
        testData:[{name: 'paul', _id:1}, {name: 'steve', _id:2}, {name:'kieran', _id: 3}]
    };

    componentDidMount() {
        api.fetchStudents()
        .then((res) => this.setState(() => {
            return {...res}
        }))
    }


    render() {
        console.log(this.state.students)
        return (
            <div>
                <BlockList students={this.state.testData}/>   
            </div>
        );
    }
}

export default StudentsByBlock;