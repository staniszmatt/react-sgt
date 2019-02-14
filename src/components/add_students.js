import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { formatPostData } from '../helpers'; //Don't need file, just the folder for helper files if its named index.js

class AddStudent extends Component {
   state = {
      name: "",
      course: "",
      grade: "",
      instructor: "",
      notes: "",
   }
   /**
    * 
    * @memberof AddStudent
    */
   handleSubmit = async (event) => {
      event.preventDefault();
      const formattedStudent = formatPostData(this.state);
      await axios.post('/server/createstudent.php', formattedStudent);
      this.props.history.push('/');

   // event.preventDefault();  //Stops the refresh and submitting the form when clicked because of the form element.
   // this.props.addStudent(this.state);
   // this.resetForm();
   }
   resetForm = () => {
      this.setState({
         name: "",
         course: "",
         grade: "",
         instructor: "",
         notes: ""
      });
   }
   handleKeyPress = (event) => {
      this.setState({
         [event.target.name]: event.target.value,
      });
   }
   //need to add type button to keep clear from submitting the form by default
   //name needed for all inputs and id's
   render(){
      const {name, course, grade, instructor, notes} = this.state;
      return (
         <div>
            <h1 className="center">Add Student</h1>
            <div className="row">
               <div className="col s12 right-align">
                     <Link className="btn blue" to="/">Home</Link>
               </div>
            </div>
            <form onSubmit={this.handleSubmit}>
               <div className="row">
                     <div className="col input-field s10 offset-s1">
                        <input onChange={this.handleKeyPress} name="name" type="text" id="name" value={name} autoComplete="off" />
                        <label htmlFor="name">Name</label>
                     </div>
               </div>
               <div className="row">
                     <div className="col input-field s10 offset-s1">
                        <input onChange={this.handleKeyPress} name="course" type="text" id="course" value={course} autoComplete="off" />
                        <label htmlFor="course">Course</label>
                     </div>
               </div>
               <div className="row">
                     <div className="col input-field s10 offset-s1">
                        <input onChange={this.handleKeyPress} name="grade" type="number" id="grade" value={grade} autoComplete="off" />
                        <label htmlFor="grade">Grade</label>
                     </div>
               </div>
               <div className="row">
                     <div className="col input-field s10 offset-s1">
                        <input onChange={this.handleKeyPress} name="instructor" type="text" id="instructor" value={instructor} autoComplete="off" />
                        <label htmlFor="instructor">Instructor</label>
                     </div>
               </div>
               <div className="row">
                     <div className="col input-field s10 offset-s1">
                        <input onChange={this.handleKeyPress} name="notes" type="text" id="notes" value={notes} autoComplete="off" />
                        <label htmlFor="notes">Notes</label>
                     </div>
               </div>
               <div className="row">
                     <div className="col s6 center">
                        <button onClick={this.resetForm} type="button" className="btn red darken-2 waves-effect waves-light">Clear</button>
                     </div>
                     <div className="col s6 center">
                        <button className="btn green darken-2">Add</button>
                     </div>
               </div>
            </form>
         </div>
      );
   }
}

export default AddStudent;