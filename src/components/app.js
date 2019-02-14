
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min' //This is needed for the full library to get all the functionality, only if needed!!
import '../assets/css/app.scss';
import AddStudent from '../components/add_students';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import StudentGradeTable from '../components/student_grade_table';
import ViewStudent from '../components/view_student';

class App extends Component {
    // state = { //Changing code here, 
	// 	//Need to set a state
	// 	//always set this to what ever is going to be passed here! String as string, array as array and so on.
	// 	//Because it will break when it renders 
	// 	students: [] 
	// };
	// //Life cycle method here! Loads once you have the data or events
	// componentDidMount() {
	// 	this.getStudentData();
	// }
    
    // async getStudentData() {
    //     //Helper function
    //     const resp = await axios.get("server/getstudentlist.php");
        
    //     this.setState({
    //         students: resp.data.data || [] //If resp data is there store it, or set to empty array
    //     })

    //     //The traditional way - moving away to .then away syntax of promises 
    //     // axios.get("http://localhost/server/getstudentlist.php").then((response) => {
    //     //     console.log("server response ",response.data.data);
    //     //     this.setState({
    //     //         students: response.data.data
    //     //     });
    //     // })
    // }
    // /**
    //  * @param {Object} student - Pass in student object 
    //  * @memberof App
    //  */
    // addStudent = async (student) => {

    //     const formattedStudent = formatPostData(student);
    //     //http://localhost is not normal!! Remove it if its on a real server!
    //     await axios.post("server/createstudent.php", formattedStudent);
    //     this.getStudentData();
    //     // student.id = randomString(); //Used for testing only 
    //     // this.setState({                                 //adding student at the end of the list, could place in front if wanted too. 
    //     //     students: [...this.state.students, student] //spread operator, takes all values in an array into this new array
    //     // });
    // }
    // /**
    //  * @param {Number} id - Student id to delete
    //  * @memberof App
    //  */
    // deleteStudent = async (id) => {
    //     const formattedID = formatPostData({id: id});//id: id is the same name so just using id for ES6
    //     await axios.post("server/deletestudent.php", formattedID);
    //     this.getStudentData();
    //     // const indexToDelete = this.state.students.findIndex((student)=>{ //Just JS no react, was used just for testing
    //     //     return student.id === id;
    //     // })
    //     // if (indexToDelete >= 0){
    //     //     const tempStudents = this.state.students.slice();
    //     //     tempStudents.splice(indexToDelete, 1)
    //     //     this.setState({
    //     //         students: tempStudents
    //     //     })
    //     // } else { 
    //     //     return "Student Not Found!"
    //     // }
    // }
    render(){
        return (
            <div className="container">
                <Route exact path="/" component={StudentGradeTable}/>
                <Route path="/add-student" component={AddStudent}/>
                <Route path="/student/:id" component={ViewStudent}/>
            </div>
        );
    }
}
export default App;
