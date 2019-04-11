import React from "react"
import Accounts from './accounts'
import Account from './account'
import '.././icons.css'
import '.././App.css'



class AccountsComp extends React.Component {
constructor(){
	super()
	this.state={
		newAccount: false,
		accountList: new Accounts(),
		counter: 0
		
	}
}

	clickHandler = (event) => {
    let x = event.target.id;
    let a = document.getElementById("initialName").value;
	let b = Number(document.getElementById("initialBalance").value);
	// console.log("a is", a, "b is", b)
	this.state.accountList.createAccount(a,b);
	this.setState({counter : this.state.counter+1})
	// console.log("accountList", this.state.accountList)
	return this.state.accountList;
	
	}

	clickHandler2 = (event) => {
	let x = event.target.id;
	console.log(x)

		if (x === 'newAccount'){
		this.setState(prevState => ({ newAccount: !prevState.newAccount }))
    	
		}
	}	
	

	render() {

		const list = this.state.accountList.accountList.map((a,b) =>
			<li>Account Name: {a.accName} Balance: {a.balance} </li>
		);

		return(
	
			<div>
			<h2> Hello I'm a AccountsComp</h2>
			<button className= 'button2' id='newAccount' onClick={this.clickHandler2}> New</button>
			{this.state.newAccount?	
				<div>
				<input id="initialName" type="text" name="initialName" placeholder= 'Account Name'/>
				<input id="initialBalance" type="number" name="initialBalance" placeholder= 'Starting Balance'/>
				<br></br>
				<br></br>
				<button className= 'button2' id='okAdd' onClick={this.clickHandler}>OK!</button>
				</div> :null }
			<li>{list}</li>
			</div>

		);
	}
};


export default AccountsComp