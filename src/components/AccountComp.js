import React from 'react'
import plus from './plus.svg'
import minus from './minus.svg'
import Account from './account'


const account= new Account('Eva Account', 100);

class AccountComp extends React.Component {

	state={
		balance: '',
	}
	
  	clickHandler = (event) => {
    let x = event.target.id;
	let a = Number(document.getElementById("transaction").value);

		if (x === 'Deposit'){
			this.setState({balance: account.deposit(a)})
		}

		if (x === "Withdrawl"){
			this.setState({balance: account.withdrawl(a)})
		
		}
	}

	render(){
		
		return (
		<div >
			<h2> ACCOUNT </h2>
				<div className= "accountDiv">
					<h2> {account.accName} </h2>
					<input id="transaction" type="number" name="transaction"/>
					<br></br>
					<br></br>
					<button className= 'button' id='Deposit' onClick={this.clickHandler} >
					<img  src={plus} className="mathicon" alt="icon" /></button>
					<button className= 'button' id='Withdrawl' onClick={this.clickHandler} >
					<img  src={minus} className="mathicon" alt="icon" /></button>
					<h2> {account.balance}</h2>
				</div>

		</div>
		)
	}
}


export default AccountComp