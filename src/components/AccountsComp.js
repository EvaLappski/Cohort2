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
		this.accountController = this.state.accountController;
		this.setState({accountController: this.accountController});
	}

	obtainDeposit = (balance, accID) => {
		let b = this.accountController.findAccount(accID);
		this.accountController.accountList[b].balance = balance;  
		this.setState({accountController: this.accountController});
	}

	createNewAcct = () => {
		this.accountController.createAccount(this.state.inputName,Number(this.state.inputBalance));
		this.setState({});
		this.getStats();
		this.setState({accountController: this.accountController});
	}


	getTotal = () => {
		let sum =this.accountController.calculateTotal();
		this.setState({sum: sum});
		return sum;
	}

	getHighest = () => {
		let highest = this.accountController.returnHighest();
		this.setState({highest: highest});
		return highest;
	}

	getLowest = () => {
		let lowest = this.accountController.returnLowest();
		this.setState({lowest: lowest});
		return lowest;
	}

	getStats = () => {
		this.getTotal();
		this.getHighest();
		this.getLowest();
	}

	removeAccount = (accID) => {
		this.accountController.deleteAccount(accID);
		this.setState({accountController: this.accountController});
		this.getStats();
	}

	handleChange = (event) =>{
 		const {name,value} = event.target;
  		this.setState({[name]:value});
	}


	render(){
	
		const list = this.state.accountController.accountList.map((a, b) => {

		return <AccountComp 
			obtainDeposit = {this.obtainDeposit}
			key ={b}
			accName = {this.state.accountController.accountList[b].accName}
			balance = {this.state.accountController.accountList[b].balance}
			accID = {this.state.accountController.accountList[b].accID}
			removeAccount = {(accID) => this.removeAccount(accID)}
			/>
		});


		return (
		<div>
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
				
				<h2>Highest {this.state.highest.accName} ${this.state.highest.balance} </h2>
				<h2>Lowest {this.state.lowest.accName} ${this.state.lowest.balance} </h2>

			</div>
			
		</div>
		{list}
		</div>	
		)
	}
}


export default AccountsComp