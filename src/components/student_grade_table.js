import React from 'react';
import StudentRow from './student_row';

const StudentGradeTable = (props) => {
	const { studentList } = props;
	let studentRows = []; //We will assign something in here, so no need to assign in this case, may be better too for error checking

	if (Array.isArray(studentList) && studentList.length){
		studentRows = props.studentList.map((student)=>{
			return <StudentRow delete={props.deleteStudent} key={student.id} student={student}/>
		});
	} else {
		studentRows.push(
			<tr key="no-data" >
				<td colSpan="4" >
					<h4 className="center grey-text" >No Student Data Available</h4>
				</td>
			</tr>
		);
	}
	

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Course</th>
					<th>Grade</th>
					<th className="center">Actions</th>
				</tr>
			</thead>
			<tbody>
				{studentRows}
			</tbody>
		</table>
	);
}
export default StudentGradeTable;
