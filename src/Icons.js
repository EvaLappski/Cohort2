import React from 'react';
import './App.css';
import calculating from './calculating.svg';
import mapsflags from './mapsflags.svg';
import dollarsymbol from './dollarsymbol.svg';
import home from './home.svg';
import tenor from './tenor.gif';
import bank from './bank.svg';
import check from './check.svg';
import office from './office.svg';
import logo from './logo.svg'
import MathComp from './components/MathComp';
import AccountComp from './components/AccountComp';
import AccountsComp from './components/AccountsComp';
import CityComp from './components/CityComp'
import ListComp from './components/ListComp'
import account from './components/account';
import accounts from './components/accounts';
import WorkflowComp from './components/WorkflowComp'

class Icons extends React.Component {
	constructor(props){
		super(props);
		// console.log('constructor props', props)
	this.state = {
		name: '',
		calculator: false,
		home: false,
		accounts: false,
		bank: false,
		city: false, 
		list: false,
		state: false,
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
    	this.setState({stack: false,home: false, accounts:false, bank:false, city: false, list: false })
    }
    else if (x === 'Home'){
    	this.setState(prevState => ({ home: !prevState.home }))
    	this.setState({stack: false,calculator: false, accounts:false, bank:false, city: false, list: false})
    }

    else if (x === "Accounts"){
    	this.setState(prevState => ({ accounts: !prevState.accounts }))
    	this.setState({stack: false,calculator: false, home:false, bank:false,city: false, list: false})	
    }

    else if (x === "Bank"){
    	this.setState(prevState => ({ bank: !prevState.bank}))
    	this.setState({stack: false,calculator: false, home:false, accounts:false, city: false, list: false})
    }

    else if ( x === "City"){
    	this.setState(prevState => ({ city: !prevState.city}))
    	this.setState({stack: false,calculator: false, home:false, accounts:false,bank: false, list: false})
    }

    else if (x === "List"){
    	this.setState(prevState => ({ list: !prevState.list}))
    	this.setState({stack: false, calculator: false, home:false, accounts:false,bank: false, city:false})
    }

    else if (x === "Stack"){
    	this.setState(prevState => ({ stack: !prevState.stack}))
    	this.setState({list: false, calculator: false, home:false, accounts:false,bank: false, city:false})
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
		<button className= 'button' id='List' onClick={this.clickHandler} >
			<img src={check} className='icon' alt='icon'/></button>
		<button className= 'button' id='Stack' onClick={this.clickHandler} >
			<img src={office} className='icon' alt='icon'/></button>
		<div>
			{this.state.calculator ? <MathComp/> : null}
			{this.state.home ? <img className='icon' src={logo}/> : null}
			{this.state.accounts ? <AccountComp  accName= 'Eva Lapp Savings' balance= {this.state.balance} obtainDeposit={this.obtainDeposit} /> : null}
			{this.state.bank ? <AccountsComp  /> : null} 
			{this.state.city ? <CityComp /> : null}
			{this.state.list ? <ListComp /> : null}
			{this.state.stack ? <WorkflowComp /> : null}
		</div>
	</div>
	)

}

}

export default Icons