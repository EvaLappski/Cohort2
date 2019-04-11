import React from 'react';
import './icons.css';
import calculating from './calculating.svg';
import mapsflags from './mapsflags.svg';
import dollarsymbol from './dollarsymbol.svg';
import home from './home.svg';
import tenor from './tenor.gif';
import bank from './bank.svg';
import MathComp from './components/MathComp';
import AccountComp from './components/AccountComp';
import AccountsComp from './components/AccountsComp';

class Icons extends React.Component {
	state = {
		name: '',
		calculator: false,
		home: false,
		accounts: false,
		bank: false,
	}

clickHandler = (event) => {
    let x = event.target.id
    if (x === 'Calculator') { 
    	this.setState(prevState => ({ calculator: !prevState.calculator }))
    	this.setState({home: false, accounts:false, bank:false })
    }
    else if (x === 'Home'){
    	this.setState(prevState => ({ home: !prevState.home }))
    	this.setState({calculator: false, accounts:false, bank:false})
    }

    else if (x === "Accounts"){
    	this.setState(prevState => ({ accounts: !prevState.accounts }))
    	this.setState({calculator: false, home:false, bank:false})
    }

    else if (x === "Bank"){
    	this.setState(prevState => ({ bank: !prevState.bank}))
    	this.setState({calculator: false, home:false, accounts:false})
    }
    // console.log("event.target.id is", x);
}

render(){
	// console.log(this.state.accounts);
	return(
	<div>
	    <h1> EVA'S WORLD </h1>
		<button className= 'button' id='Home' onClick={this.clickHandler} >
			<img  src={home} className="icon" alt="icon" /></button>
		<button className= 'button' id= 'Calculator' onClick={this.clickHandler} >
			<img  src={calculating} className="icon" alt="icon" /></button>
		<button className= 'button' id= 'Accounts' onClick={this.clickHandler} >
			<img  src={dollarsymbol} className="icon" alt="icon" /></button>
		<button className= 'button' id='Bank' onClick={this.clickHandler} >
			<img src={bank} className='icon' alt='icon'/></button>
		<button className= 'button' id= 'City' onClick={this.clickHandler} >
			<img  src={mapsflags} className="icon" alt="icon" /></button>
		{/*<h1>You have selected {this.state.name}</h1>*/}
		<div>
			{this.state.calculator ? <MathComp/> : null}
			{this.state.home ? <img src={tenor}/> : null}
			{this.state.accounts ? <AccountComp/> : null}
			{this.state.bank ? <AccountsComp/> : null} 
		</div>
	</div>
	)

}

} 

export default Icons