import React from "react"
import garbage from './garbage.svg'
import Accounts from './accounts'
import Account from './account'
import AccountComp from './AccountComp'
import '.././App.css'

class AccountsComp extends React.Component {
constructor(){
	super()
	this.state = {
		sum: 0,
		highest: 0,
		lowest: 0,
		accountController: new Accounts(),
		newAccount: false,
		inputName: '',
		inputBalance: 0,
	}
	

}

componentDidMount() {
	this.accountController = this.state.accountController
	this.setState({accountController: this.accountController})

}

createNewAcct = () => {
	this.accountController.createAccount(this.state.inputName,Number(this.state.inputBalance));
	// console.log('the inputs',this.state.inputName, this.state.inputBalance)
	console.log('the array' , this.accountController);
	this.setState({})
	this.getStats();
	this.setState({accountController: this.accountController})
}

getTotal = () => {
	let sum =this.accountController.calculateTotal();
	console.log('the total', sum)
	this.setState({sum: sum})
	return sum
}

getHighest = () => {
	let highest = this.accountController.returnHighest()
	// console.log('the highest', highest)
	this.setState({highest: highest});
	return highest;
}
getLowest = () => {
	let lowest = this.accountController.returnLowest()
	// console.log('the lowest', lowest)
	this.setState({lowest: lowest});
	return lowest;
}

getStats = () => {
	this.getTotal()
	this.getHighest()
	this.getLowest()
}

removeAccount = (accID) => {
	console.log('i run comp remove')
	this.accountController.deleteAccount(accID);
	this.setState({accountController: this.accountController})
}

handleChange = (event) =>{
 	const {name,value} = event.target;
  	this.setState({[name]:value});

	}




render(){
	const list = this.state.accountController.accountList.map((a, b) => {

		return <AccountComp
			key ={b}
			accName = {this.state.accountController.accountList[b].accName}
			balance = {this.state.accountController.accountList[b].balance}
			accID = {this.state.accountController.accountList[b].accID}
			removeAccount = {(accID) => this.removeAccount(accID)}
			/>
	});

	return (

	<div className= 'bankDiv'>
		<div className= 'rightDiv'>
		
			<button className= 'button2' id='newAccount'> New</button>
			

			<div>
				<input id="initialName" type="text" name="inputName" placeholder= 'Account Name' onChange= {this.handleChange} />
				<input id="initialBalance" type="number" name="inputBalance" placeholder= 'Starting Balance' onChange= {this.handleChange} />
				<br></br>
				<br></br>
				<button className= 'button2' id='okAdd' onClick= {this.createNewAcct}>OK!</button>
			</div> 
		</div>
		
		<div className= "leftDiv">
			<h2>Total ${this.state.sum}</h2>
			<h2>{list}</h2>
			<h2>Highest {this.state.highest.accName} ${this.state.highest.balance} </h2>
			<h2>Lowest {this.state.lowest.accName} ${this.state.lowest.balance} </h2>

		</div>
	</div>
			
		)





	}
}


export default AccountsComp