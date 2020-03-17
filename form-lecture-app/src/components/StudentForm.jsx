import React, { Component } from 'react';


class StudentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName: '',
            studentGrade: 0,
            studentArray: [],
        }
    }

    handleSubmission = (evt) => {
        //Prevent the default which is to reload the page
        evt.preventDefault();
        // //sanity
        // console.log(this.state.studentName);
        // console.log(this.state.studentGrade);

        //push created object literal into the current array in state
        this.state.studentArray.push({
            name : this.state.studentName,
            grade: this.state.studentGrade
        })

        this.setState(
            {
                studentArray: this.state.studentArray
            }
        )
        //console the current array
        console.log(this.state.studentArray)
        //How to reset the form fields
        this.setState(
            {
                studentName: '',
                studentGrade: 0, 
            }
        )
    }

    //Another way to update the value of each input
    handleInputChanges = (event) => {
        if(event.target.name=='studentName'){
            this.setState(
                {
                    studentName: event.target.value
                }
            )
        } else if (event.target.name=='studentGrade'){
            this.setState(
                {
                    studentGrade: event.target.value
                }
            )
        }
    }

    handleNameChange = (event) => {
        // //sanity
        // console.log(event.target)

        this.setState(
            {
                studentName: event.target.value
            }
        )
    }

    handleGradeChange = (event) => {
        // //sanity
        // console.log(event.target)

        this.setState(
            {
                studentGrade: event.target.value
            }
        )
    }

    render() {
        return (
            <div>
                <h2>Student Form Component</h2>

                <form action="">

                    <fieldset className='border'>
                        <legend><h2>Student Form</h2></legend>

                        <label htmlFor="sname" className='label'>Student Name:</label>
                        <input type="text" name='studentName' id='sname' value={this.state.studentName}className='input' onChange={this.handleNameChange}/>

                        <label htmlFor="grade" className='label'>Student Grade:</label>
                        <input type="text" name='studentGrade' id='grade'value={this.state.studentGrade} className='input'onChange={this.handleGradeChange}/>

                        <br/>
                        <br/>

                        <button onClick={this.handleSubmission} className='button'>Submit</button>

                    </fieldset>
                </form>

                <div>
                    {
                        this.state.studentArray.map((student, index) => {
                            return(
                                //Pass in a key when you iterate through an array by giving a second parameter and setting it inside of the div
                                <div key = {index}>
                                    <p>Student Name: {student.name}</p>
                                    <p>Student Grade: {student.grade}</p>

                                    < hr className='lineBreak'/>

                                </div>
                                
                            )
                        }

                        )
                    }
                </div>
                
            </div>
        );
    }
}

export default StudentForm;