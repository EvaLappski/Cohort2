import React from 'react'
import plus from './plus.svg'
import minus from './minus.svg'
import multiply from './multiply.svg'
import division from './division.svg'
import math from './math'
import '.././App.css'

class MathComp extends React.Component {

		state = {
		result: '',
		
	}
	
	clickHandler = (event) => {
    let x = event.target.id;
	let a = Number(document.getElementById("num1").value);
	let b = Number(document.getElementById("num2").value);

        if (x === 'Add') { 
        	const y = math.sum(a,b);
        	this.setState({result: y});

        }
      	else if (x === 'Sub'){
      		const y = math.difference(a,b);
        	this.setState({result: y});
      	}
      	else if (x === 'Multiply'){
      		const y = math.product(a,b);
        	this.setState({result: y});
      	}
      	else if (x === 'Divide'){
      		const y = math.quotient(a,b);
        	this.setState({result: y});
      	}
    	
    }

	render(){
		return (
		<div>
			<h2> BASIC CALCULATOR </h2>
			<input id="num1" type="number" name="firstNumber" />
			<input id="num2" type="number" name="secondNumber"/>
			<br></br>
			<br></br>
		<button className= 'button' id='Add' onClick={this.clickHandler}  >
			<img  src={plus} className="mathicon" alt="icon" /></button>
		<button className= 'button' id= 'Sub' onClick={this.clickHandler}  >
			<img  src={minus} className="mathicon" alt="icon" /></button>
		<button className= 'button' id= 'Multiply' onClick={this.clickHandler}>
			<img  src={multiply} className="mathicon" alt="icon" /></button>
		<button className= 'button' id= 'Divide' onClick={this.clickHandler} >
			<img  src={division} className="mathicon" alt="icon" /></button>
			<h2> {this.state.result}</h2>
	</div>
		)
	}
}


export default MathComp


