import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min' //This is needed for the full library to get all the functionality, only if needed!!
import '../assets/css/app.scss';
import StudentGradeTable  from "./student_grade_table";
import AddStudent from './add_students';

const App = () => (
    <div>
        <h1 className="center">SGT</h1>
        <div className="row">
            <div className="col s12 m8">
                <StudentGradeTable/>
            </div>
            <div className="col s12 m4">
                <AddStudent/>
            </div>
        </div>
    </div>
);
export default App;
