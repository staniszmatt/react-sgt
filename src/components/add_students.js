import React, { Component } from 'react';

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
   handleSubmit = (event) => {
   event.preventDefault();  //Stops the refresh and submitting the form when clicked because of the form element.
   this.props.addStudent(this.state);
   this.resetForm();
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
   render() { //input for materialize 
      const {name, course, grade, instructor, notes} = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="row">
               <div className="col input-field s10 offset-s1" >
                  <input onChange={this.handleKeyPress} name="name" type="text" id="name" value={name}/>
                  <label htmlFor="name">Name</label> {/* htmlfor attaches to the input elm */}
               </div>
            </div>
            <div className="row">
               <div className="col input-field s10 offset-s1" >
                  <input onChange={this.handleKeyPress} name="course" type="text" id="course" value={course}/>
                  <label htmlFor="course">Course</label> {/* htmlfor attaches to the input elm */}
               </div>
            </div>
            <div className="row">
               <div className="col input-field s10 offset-s1" >
                  <input onChange={this.handleKeyPress} name="grade" type="number" id="grade" value={grade}/>
                  <label htmlFor="grade">Grade</label> {/* htmlfor attaches to the input elm */}
               </div>
            </div>
            <div className="row">
               <div className="col input-field s10 offset-s1" >
                  <input onChange={this.handleKeyPress} name="instructor" type="text" id="instructor" value={instructor}/>
                  <label htmlFor="instructor">Instructor</label> {/* htmlfor attaches to the input elm */}
               </div>
            </div>
            <div className="row">
               <div className="col input-field s10 offset-s1" >
                  <input onChange={this.handleKeyPress} name="notes" type="text" id="notes" value={notes}/>
                  <label htmlFor="notes">Notes</label> {/* htmlfor attaches to the input elm */}
               </div>
            </div>
            <div className="row">
               <div className="col s6 center"> {/* Set type button inside form to keep it from submitting form. */}
                  <button onClick={this.resetForm} type="button" className="btn red darken-2 wave-effect waves-light">Clear</button>
               </div>
               <div className="col s6 center">
                  <button className="btn green darken-2">Add</button>
               </div>
            </div>
			</form>
		);
	}
}
export default AddStudent;