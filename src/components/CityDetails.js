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
			<div className='detailsBox'>
				<h2>City: {this.props.passCity.city}</h2>
				<h2>Population: {this.props.passCity.population}</h2>
				<h2>Latitude: {this.props.passCity.latitude}</h2>
				<h2>Longitude: {this.props.passCity.longitude}</h2>
				<h2>How Big: {this.props.passCity.howBig()} </h2>
				<h2>Which Sphere: {this.props.passCommunity.whichSphere(cityID)}</h2>
				<input className= 'inputBox' type= 'text' id='inputIn' placeholder= "Moved In"/>
				<button className='button2'onClick={this.props.passMoveIn}>Move In</button>
				<br></br>
				<input className= 'inputBox' type= 'text' id='inputOut' placeholder= "Moved Out"/>
				<button className='button2' onClick={this.props.passMoveOut}>Move Out</button>
			</div>
		)
	}
}


export default CityDetails