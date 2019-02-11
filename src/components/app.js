import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min' //This is needed for the full library to get all the functionality, only if needed!!
import '../assets/css/app.scss';
import StudentGradeTable  from "./student_grade_table";
import AddStudent from './add_students';
import studentData from '../data/get_all_students';

class App extends Component {
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
    render(){
        return (
            <div>
                <h1 className="center">SGT</h1>
                <div className="row">
                    <div className="col s12 m8">
                        <StudentGradeTable studentList={this.state.students}/>
                    </div>
                    <div className="col s12 m4">
                        <AddStudent/>
                    </div>
                </div>
            </div>
        );
    }  
}
export default App;
