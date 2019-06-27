import React from "react";
import '.././App.css';


class ProjectComp extends React.Component {
	constructor(){
		super();	
		this.state = {
			json : [],
			querycomp : 0
			
		}
	}

componentDidMount(){
// let querycomp = Number(document.getElementById('inputcomp').value)
// this.setState({compdisplay: querycomp })
	
}	

studentDetails = () => {
		let queryname = document.getElementById('inputname').value
		// console.log(queryname)
		// this.setState({name : queryname })
		fetch('http://localhost:5000/search/' + String(queryname))
    	.then(result => result.json())
    .then(json => this.setState ({json: json}))
    .catch((err => console.log('err', err)))
		// console.log('test name in input', this.state.name)
		
}

studentRemove = () => {
	console.log('Hello')
	let queryname = document.getElementById('inputname').value
	console.log("name",queryname )
	fetch('http://localhost:5000/remove', {
		method: "POST",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify({
			name: queryname
		})
	})
    .then(result => result.json())
    .then(json => this.setState ({json: json}))
    .catch((err => console.log('err', err)))
    console.log('Student Has Been Deleted')
    this.setState({json: []})
    document.getElementById('inputname').value = ''
    return "Student Deleted"
}

editComp = async () => {
	console.log('Hello edit comp')
	let queryname = document.getElementById('inputname').value
	let querycomp = Number(document.getElementById('inputcomp').value)
	console.log('Test', querycomp, queryname)
	await fetch('http://localhost:5000/editcomp', {
		method: "POST",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify({
			name: queryname,
			comp: querycomp
		})
	})
    .then(result => result.json())
    .then(json => this.setState ({json: json}))
    .catch((err => console.log('err', err)))
    await this.studentDetails()
    // console.log('Student Has Been edited')
    // this.setState({querycomp: querycomp})
    // console.log('state', this.state.compdisplay)
    // return "Student Deleted"

}

	render(){

		 console.log("test", this.state.json)

		let files = this.state.json

		let list = files.map((a, b) => {
			
			return (
				<td className= "list" key={b}>
					<tr>Student Name: {a.First_Name} {a.Last_Name}</tr>
					<tr>LinkedIn: <a href={a.LinkedIn} target="blank">{a.LinkedIn}</a></tr>
					<tr>Git Hub: <a href={a.GitHub} target="blank">{a.GitHub}</a></tr>
					<tr>Project: {a.Project}</tr>
					<tr>Competency: {a.Competency}</tr>
					<tr>Percentage Complete: </tr>
					<button className='button2' type='button' onClick={this.studentRemove}>Delete</button>
				</td>
			)
		})	

		
			
		

		return (
			<div>
				<h2>HELLO WORLD</h2>
				<input id= 'inputname' placeholder="Enter First Name"></input>
				<button className='button2' type="button" id='search' onClick= {this.studentDetails} >Search</button>
				<input id='inputcomp' placeholder= {this.state.querycomp}></input>
				<button className='button2' onClick={this.editComp}>Edit</button>

				<table id= 'table' align="center">
					<tbody>
						<tr align='left'>{list}</tr>
					</tbody>
				</table>
			</div>
		)
			
			
	}
}

export default ProjectComp