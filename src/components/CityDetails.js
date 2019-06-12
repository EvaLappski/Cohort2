import React from "react";
import City from './city';
import '.././App.css';
import Community from './community'
import CityComp from './CityComp'

class CityDetails extends React.Component {
	constructor(props){
		super(props);	
	}

	render(){

		let cityID = this.props.passCity.cityID

		return (
			<div class="form-group col" >
				<h3>City: {this.props.passCity.city}</h3>
				<h3>Population: {this.props.passCity.population}</h3>
				<h3>Latitude: {this.props.passCity.latitude}</h3>
				<h3>Longitude: {this.props.passCity.longitude}</h3>
				<h3>How Big: {this.props.passCity.howBig()} </h3>
				<h3>Which Sphere: {this.props.passCommunity.whichSphere(cityID)}</h3>
				<input className= 'inputBox' type= 'text' id='inputIn' placeholder= "Moved In"/>
				<button class="button2" onClick={this.props.passMoveIn}>Move In</button>
				<br></br>
				<input className= 'inputBox' type= 'text' id='inputOut' placeholder= "Moved Out"/>
				<button class="button2" onClick={this.props.passMoveOut}>Move Out</button>
			</div>
		)
	}
}


export default CityDetails