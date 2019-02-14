import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import StudentRow from './student_row';
import { formatPostData } from '../helpers';

class StudentGradeTable extends Component {
	state = {
		students: null
	}
	componentDidMount(){
		this.getStudentData();
	}
	deleteStudent = async (id) => {
		const formattedId = formatPostData({id: id});
		await axios.post('/server/deletestudent.php', formattedId);
		this.getStudentData();
	}
	async getStudentData(){
		const resp = await axios.get('/server/getstudentlist.php');
		this.setState({
				students: resp.data.data || []
		});
	}
	render(){
		const { students } = this.state;
		let studentRows = [];
		if(Array.isArray(students) && students.length){
				studentRows = students.map((student) => {
					return <StudentRow delete={this.deleteStudent} key={student.id} student={student}/>
				});
		} else if (students === null){
			studentRows.push(
				<tr key="no-data">
					<td colSpan="4">
							<h4 className="center grey-text">Student Data Loading ... </h4>
					</td>
				</tr>
			);
		}
		else {
			studentRows.push(
				<tr key="no-data">
					<td colSpan="4">
							<h4 className="center grey-text">No Student Data Available</h4>
					</td>
				</tr>
			);
		}
		return (
				<div>
					<h1 className="center">Student Grade Table</h1>
					<div className="row">
						<div className="col s12 right-align">
								<Link className="btn blue" to="/add-student">Add Student</Link>
						</div>
					</div>
					<table>
						<thead>
								<tr>
									<th>Name</th>
									<th>Course</th>
									<th>Grade</th>
									<th>Actions</th>
								</tr>
						</thead>
						<tbody>
								{studentRows}
						</tbody>
					</table>
				</div>
		);
	}
	// const { studentList } = props; //Changing out code, saving for review later. 
	// let studentRows = []; //We will assign something in here, so no need to assign in this case, may be better too for error checking

	// if (Array.isArray(studentList) && studentList.length){
	// 	studentRows = props.studentList.map((student)=>{
	// 		return <StudentRow delete={props.deleteStudent} key={student.id} student={student}/>
	// 	});
	// } else {
	// 	studentRows.push(
	// 		<tr key="no-data" >
	// 			<td colSpan="4" >
	// 				<h4 className="center grey-text" >No Student Data Available</h4>
	// 			</td>
	// 		</tr>
	// 	);
	// }
	

	// return (
	// 	<table>
	// 		<thead>
	// 			<tr>
	// 				<th>Name</th>
	// 				<th>Course</th>
	// 				<th>Grade</th>
	// 				<th className="center">Actions</th>
	// 			</tr>
	// 		</thead>
	// 		<tbody>
	// 			{studentRows}
	// 		</tbody>
	// 	</table>
	// );
}
export default StudentGradeTable;
