import React from 'react';
//For the delete btn on click, we can't directly call the function delete, so pass in anonymous function with the ID.   
/** 
 * @param {Object} props - Receive the data of the added student to add to the row. 
 * @memberof add_students
*/
import { Link } from 'react-router-dom';

const StudentRow = (props) => {
    const { name, course, grade, id } = props.student;
    return (
        <tr>
            <td>
                <Link to={`/student/${id}`}>{name}</Link>
            </td>
            <td>{course}</td>
            <td>{grade}</td>
            <td className="center">
                <button onClick={() => { props.delete(id) }} className="btn btn-small red darken-2">Delete</button>
            </td>
        </tr>
    );
}
export default StudentRow;