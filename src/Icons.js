import React from 'react';
import './icons.css';
import calculating from './calculating.svg';
import mapsflags from './mapsflags.svg';
import dollarsymbol from './dollarsymbol.svg';
import home from './home.svg';
import tenor from './tenor.gif'
import MathComp from './components/MathComp'


class Icons extends React.Component {
	state = {
		name: '',
		calculator: false,
		home: false,
	}

clickHandler = (event) => {
    let x = event.target.id
    if (x === 'Calculator') { 
    	this.setState(prevState => ({ calculator: !prevState.calculator}))
    	this.setState({home: false})
    }
    else if (x === 'Home'){
    	this.setState(prevState => ({home: !prevState.home}))
    	this.setState({calculator: false})
    }
    // console.log("event.target.id is", x);
}

render(){
	return(
	<div>
	    <h1> EVA'S WORLD </h1>
		<button className= 'button' id='Home' onClick={this.clickHandler} >
			<img  src={home} className="icon" alt="icon" /></button>
		<button className= 'button' id= 'Calculator' onClick={this.clickHandler} >
			<img  src={calculating} className="icon" alt="icon" /></button>
		<button className= 'button' id= 'Accounts' onClick={this.clickHandler} >
			<img  src={dollarsymbol} className="icon" alt="icon" /></button>
		<button className= 'button' id= 'City' onClick={this.clickHandler} >
			<img  src={mapsflags} className="icon" alt="icon" /></button>
		{/*<h1>You have selected {this.state.name}</h1>*/}
		<div>
			{this.state.calculator ? <MathComp/> : null}
			{this.state.home ? <img src={tenor}/> : null}
		</div>
	</div>
	)

}

} 

export default Icons