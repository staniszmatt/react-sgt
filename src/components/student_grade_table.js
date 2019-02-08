import React, { Component } from 'react';
import studentData from '../data/get_all_students';
import StudentRow from './student_row'

class StudentGradeTable extends Component {
	state = {
		//Need to set a state
		//always set this to what ever is going to be passed here! String as string, array as array and so on.
		//Because it will break when it renders 
		students: [] 
	};
	//Life cycle method here! Loads once you have the data or events
	componentDidMount() {
		this.getStudentData();
	}
	getStudentData() {
		//Helper function
		//TODO: Call server to get student data
		this.setState({
			students: studentData
		});
	}

	render() {
      const studentRows = this.state.students.map((student)=>{
			return <StudentRow key={student.id} student={student}/>
      });

		return (
			<div className="row">
				<div className="col s12 m8">
					<table>
						<thead>
							<tr>
								<th>Name</th>
								<th>Course</th>
								<th>Grade</th>
							</tr>
						</thead>
						<tbody>
                     {studentRows}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default StudentGradeTable;
