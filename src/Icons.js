import React from 'react';
import './App.css';
import calculating from './calculating.svg';
import mapsflags from './mapsflags.svg';
import dollarsymbol from './dollarsymbol.svg';
import home from './home.svg';
import tenor from './tenor.gif';
import bank from './bank.svg';
import MathComp from './components/MathComp';
import AccountComp from './components/AccountComp';
import AccountsComp from './components/AccountsComp';
import account from './components/account';
import accounts from './components/accounts';

class Icons extends React.Component {
	constructor(props){
		super(props);
		console.log('constructor props', props)
	this.state = {
		name: '',
		calculator: false,
		home: false,
		accounts: false,
		bank: false,
		balance:0
	}

	}

	obtainDeposit = (balance) => {
		this.setState({balance: balance})
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
	const e = new accounts();
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
			{this.state.accounts ? <AccountComp  accName= 'Lapp' balance= {this.state.balance} obtainDeposit= {this.obtainDeposit} /> : null}
			{this.state.bank ? <AccountsComp  /> : null} 
		</div>
	</div>
	)

}

}

export default Icons