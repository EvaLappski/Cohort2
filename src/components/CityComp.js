import React from "react";
import City from './city';
import '.././App.css';
import Community from './community'
import CityDetails from './CityDetails'


class CityComp extends React.Component {
	constructor(){
		super();

		this.state = {
			communityController : new Community (),
			displayDetails: false,
			whichCity: '',
		}

		this.state.communityController.createCity('Edmonton', 100, 99, 9000)
		this.state.communityController.createCity('Calgary', 100, 99, 9000)
		this.state.communityController.createCity('Vancouver', 100, 99, 9000)
	}

	componentDidMount() {
		this.communityController = this.state.communityController
		this.setState({communityController: this.communityController})
	}

	createNewCity = () => {	
		let name = document.getElementById('input1').value;
		let lati = document.getElementById('input2').value;
		let long = document.getElementById('input3').value;
		let pop = document.getElementById('input4').value;
		this.communityController.createCity(name, lati, long, pop);
		this.setState({communityController: this.communityController});
	}

	handleChange = (event) =>{
 		const {name,value} = event.target;
  		this.setState({[name]:value});
	}

	deleteCity = (cityID) => {
		this.communityController.deleteCity(cityID);
		this.setState({communityController: this.communityController});
	}

	showDetails = (cityID) => {
		let x = this.communityController.findCityIndex(cityID);//return index
		this.setState({communityController: this.communityController});
		// console.log("im here", this.communityController.community[x].city);
		this.setState({whichCity: this.communityController.community[x]});
		// console.log("state", this.state.whichCity);
		this.setState({displayDetails: true});
	}



	render(){
		
		let list = this.state.communityController.community.map((a, b) => {
		let target = this.state.communityController.community[b]

		return (
			<tr key={b}>
				<td>{target.city}</td>
				<td>{target.latitude}</td>
				<td>{target.longitude}</td>
				<td>{target.population}</td>
				<td><button className= 'button2'onClick={(cityID)=>this.showDetails(target.cityID)} 
				>Edit</button></td>
				<td><button className= 'button2' onClick={(cityID)=>this.deleteCity(target.cityID)}>Delete</button></td>	
			</tr>
			)
		}	
	)

		return (
			<div>
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
						</tr>
						{list}
					</tbody>
				</table>
					<br></br>
				<div>
					<h2>Total {this.state.communityController.getPopulationTotal()} </h2>
					<h2>Most Northern {this.state.communityController.getMostNorthern()} </h2>	
					<h2>Most Southern {this.state.communityController.getMostSouthern()} </h2>		
				</div>

				<div>
					{this.state.displayDetails ? <CityDetails passCity={this.state.whichCity} passCommunity={this.state.communityController} /> : null}
				</div>
				
				
			</div>
		)	
	}
}


export default CityComp