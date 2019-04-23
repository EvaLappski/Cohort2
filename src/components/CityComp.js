import React from "react";
import City from './city';
import '.././App.css';
import Community from './community'

class CityComp extends React.Component {
	constructor(){
	super()
	this.state = {
		communityController : new Community (),
		input1 : '',
		input2 : 0,
		input3 : 0,
		input4 : 0,
	}


	}

	componentDidMount() {
	this.communityController = this.state.communityController
	this.setState({communityController: this.communityController})

}

	createNewCity = () => {	
		let x = document.getElementById('table');
		let row = x.insertRow(-1);

		let cell1 = row.insertCell(0);
		let cell2 = row.insertCell(1);
		let cell3 = row.insertCell(2);
		let cell4 = row.insertCell(3);
		let cell5 = row.insertCell(4);

		cell1 = document.getElementById('input1').value
		cell2 = document.getElementById('input2').value
		cell3 = document.getElementById('input3').value
		cell4 = document.getElementById('input4').value
		console.log('the inputs', cell1, cell2,cell3, cell4)

		console.log('the array' , this.communityController);

		this.communityController.createCity(cell1, cell2, cell3, cell4)
		// this.setState({});
		this.setState({communityController: this.communityController});
		console.log('the array' , this.communityController);
	}

	handleChange = (event) =>{
 	const {name,value} = event.target;
  	this.setState({[name]:value});

	}


	render(){
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
					</tbody>
			</table> 
		</div>
		)	
	}
}


export default CityComp