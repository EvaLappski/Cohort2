import React from "react";
import City from './city';
import '.././App.css';
import Community from './community'

class CityComp extends React.Component {
	constructor(){
		super()

	

		this.state = {
		communityController : new Community (),
		}

	this.state.communityController.createCity('Edmonton', 100, 99, 9000)
	this.state.communityController.createCity('Calgary', 100, 99, 9000)
	this.state.communityController.createCity('Vancouver', 100, 99, 9000)
	console.log(this.state.communityController)
	}

	componentDidMount() {
		this.communityController = this.state.communityController
		this.setState({communityController: this.communityController})

	}

	createNewCity = () => {	
		
		let name = document.getElementById('input1').value
		let lati = document.getElementById('input2').value
		let long = document.getElementById('input3').value
		let pop = document.getElementById('input4').value

		this.communityController.createCity(name, lati, long, pop)
		this.setState({communityController: this.communityController});
		console.log('the array' , this.communityController);

	}

	handleChange = (event) =>{
 	const {name,value} = event.target;
  	this.setState({[name]:value});

	}

	render(){


		let list = this.state.communityController.community.map((a, b) => {
			return (
			<tr>
				<td>{this.state.communityController.community[b].city}</td>
				<td>{this.state.communityController.community[b].latitude}</td>
				<td>{this.state.communityController.community[b].longitude}</td>
				<td>{this.state.communityController.community[b].population}</td>
				<td>which sphere</td>
				<td>how big</td>
				<td><button className= 'button2'>Edit</button></td>
				<td><button className= 'button2'>Delete</button></td>
				<td></td>
			</tr>
			)
							
			
	}	)

		return (
		<div>
			<h2> CITIES </h2>
			<table id= 'table'>
				<tbody>
						<tr>
							<td><input className= 'inputBox' type= 'text' id='input1' placeholder= "Enter Location"/></td>
							<td><input className= 'inputBox' type= 'number' id='input2' placeholder= "Enter Latitude"/></td>
							<td><input className= 'inputBox' type= 'number' id='input3' placeholder= "Enter Longitude"/></td>
							<td><input className= 'inputBox' type= 'number' id='input4' placeholder= "Enter Population"/></td>
							<td><button className='button2' id='button' onClick= {this.createNewCity}>Submit </button></td>
						</tr>
						<tr>
							<th>City</th>
							<th>Latitude</th>
							<th>Longitude</th>
							<th>Population</th>
							<th>Which Sphere</th>
							<th>How Big</th>

						</tr>
						{list}
				</tbody>
			</table>
		</div>
		)	
	}
}


export default CityComp