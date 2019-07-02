import React from "react";
import '.././App.css';


class ProjectComp extends React.Component {
	constructor(){
		super();	
		this.state = {
			json : [],
			querycomp : 0,
			comp: [],
			project : [],
			currentcomp : 250,
			currentproject: 1,
			
		}
	}

componentDidMount(){
// let querycomp = Number(document.getElementById('inputcomp').value)
// this.setState({compdisplay: querycomp })
	
}	


studentDetails = async () => {
	let queryname = document.getElementById('inputname').value
await fetch('http://localhost:5000/search/' + String(queryname))
    .then(result => result.json())
    .then(json => this.setState ({json: json, currentcomp: json[0].Competency, currentproject: json[0].Project}))
    .catch((err => console.log('err', err)))
await fetch('http://localhost:5000/comp/' + String(this.state.currentcomp))
	.then(result => result.json())
	.then(comp => this.setState ({comp : comp}))
	.catch(err => console.log('err', err))
await fetch('http://localhost:5000/project/' + String(this.state.currentproject))
	.then(result => result.json())
	.then(project => this.setState({project: project}))
	.catch(err => console.log('err', err))


}


studentRemove = () => {
	console.log('Hello')
	let queryname = document.getElementById('inputname').value
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
    this.studentDetails()
}

	render(){

		console.log('state', this.state)


		let files = this.state.json

		let list = files.map((a, b) => {
			
			return (
				<td className= "list" key={b}>
					<tr>Student Name: {a.First_Name} {a.Last_Name}</tr><button className='button2' type='button' onClick={this.studentRemove}>Delete</button>
					<tr>LinkedIn: <a href={a.LinkedIn} target="blank">{a.LinkedIn}</a></tr>
					<tr>Git Hub: <a href={a.GitHub} target="blank">{a.GitHub}</a></tr>
					
				</td>
			)
		})	

		
		
		let files2 = this.state.comp

		let list2 = files2.map((a, b) => {
			
			return (
				<td className= "list2" key={b}>
					<tr>Competency:{a.comp_num} </tr>
					<tr>Competency Name: {a.comp_name} </tr>
					<tr>Units of Effort: {a.unit_effort}</tr>
					<tr>Percentage Complete: {a.percent_complete}%</tr>
				</td>
			)
		})	

		let files3 = this.state.project

		let list3 = files3.map((a, b) => {
			
			return (
				<td className= "list3" key={b}>
					<tr>Project:{a.Project_Name}</tr>
				</td>
			)
		})	


		return (
			<div>
				<h2>HELLO WORLD</h2>
				<input id= 'inputname' placeholder="Enter First Name"></input>
				<button className='button2' type="button" id='search' onClick= {this.studentDetails}  >Search</button>
				<input id='inputcomp' placeholder= "Competency" ></input>
				<button className='button2' onClick={this.editComp}>Edit</button>
				

				<table id= 'table' align="center">
					<tbody>
					<td>
						<tr align='left'>{list}</tr>
						<tr align='left'>{list2}</tr>
						<tr align='left'>{list3}</tr>
						</td>
					</tbody>
				</table>

			</div>
		)
			
			
	}
}

export default ProjectComp