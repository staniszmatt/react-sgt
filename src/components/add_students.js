import React, { Component } from 'react';

class AddStudent extends Component {
   state = {
      name: "",
      course: "",
      grade: ""
   }
   handleSubmit = (event) => {
   event.preventDefault();  
   this.props.addStudent(this.state);
   this.resetForm();
   
   }
   resetForm = () => {
      this.setState({
         name: "",
         course: "",
         grade: ""
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
      const {name, course, grade} = this.state;
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
                  <input onChange={this.handleKeyPress} name="grade" type="text" id="grade" value={grade}/>
                  <label htmlFor="grade">Grade</label> {/* htmlfor attaches to the input elm */}
               </div>
            </div>
            <div className="row">
               <div className="col s6 center">
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