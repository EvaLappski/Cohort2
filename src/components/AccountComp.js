import React from 'react'
import plus from './plus.svg'
import minus from './minus.svg'
import Account from './account'

class AccountComp extends React.Component {
	constructor(props){ 
		super(props);
			this.state={
				account: '',
			}		
	}

	componentDidMount() {	
		this.account = new Account (this.props.accName, this.props.balance, this.props.accID);
		this.setState({ account: this.account });
	}

	handleChange = (event) => {
 		const { name,value } = event.target;
  		this.setState({ [name]:value });
	}

	withdrawl = () => {
		let b = Number(this.state.input);
		this.account.withdrawl(b);
		this.props.obtainDeposit(this.account.balance,this.account.accID);
		this.setState({ account: this.account });
	}

	deposit = () => {
		let a = Number(this.state.input);
		this.account.deposit(a);
		this.props.obtainDeposit(this.account.balance, this.account.accID);
		this.setState({ account: this.account });
	}

	remove = () => {
		this.props.removeAccount(this.account.accID);
		return this.account.accID;
	}

	render(){
		
		return (
			<div >
			<h2> BASIC ACCOUNT </h2>
				<div className= "accountDiv">
					<h2> { this.props.accName } </h2>
					<input id="transaction" type="number" name="input" onChange={this.handleChange}/>
					<button className= 'button' id='Deposit' onClick={ this.deposit } >
					<img  src={ plus } className="mathicon" alt="icon" /></button>
					<button className= 'button' id='Withdrawl' onClick={ this.withdrawl } >
					<img  src={ minus } className="mathicon" alt="icon" /></button>   
					<button className= 'button2' id='remove' onClick={ this.remove }>Delete</button>
					<h2> Account Balance: { this.props.balance }</h2>
				</div>
			</div>
		)
	}
}


export default AccountComp;