import React from 'react';
import StudentRow from './student_row';

const StudentGradeTable = (props) => {
	const studentRows = props.studentList.map((student)=>{
		return <StudentRow key={student.id} student={student}/>
	});
	return (
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
	);
}
export default StudentGradeTable;
