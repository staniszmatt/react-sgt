import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import '../assets/css/app.scss';
import StudentGradeTable  from "./student_grade_table";

const App = () => (
    <div>
        <h1 className="center">SGT</h1>
        <StudentGradeTable/>
    </div>
);

export default App;
