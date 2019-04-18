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
		this.setState({account: this.account})
	}

	handleChange = (event) => {
 		const {name,value} = event.target
  		this.setState({[name]:value});
	}

	withdrawl = () => {
		let b = Number(this.state.input);
		// console.log('the input', b)
		// console.log('hello withdrawl')
		this.account.withdrawl(b);
		this.setState({account: this.account})
	}

	deposit = () => {
		let a = Number(this.state.input);
		console.log('the input', a)
		console.log('hello deposit')
		this.account.deposit(a);
		this.setState({account: this.account})
	}

	remove = () => {
		// console.log('hello from delete button')
		// console.log('account', this.account.accID)
		this.props.removeAccount(this.account.accID);
		return this.account.accID;
	}

	render(){
		
		return (
		<div >
				<div className= "accountDiv">
					<h2> {this.state.account.accName} </h2>
					<input id="transaction" type="number" name="input" onChange={this.handleChange}/>
					<br></br>
					<br></br>
					<button className= 'button' id='Deposit' onClick={this.deposit} >
					<img  src={plus} className="mathicon" alt="icon" /></button>
					<button className= 'button' id='Withdrawl' onClick={this.withdrawl} >
					<img  src={minus} className="mathicon" alt="icon" /></button>
					<h2> {this.state.account.balance}</h2>
					<button className= 'button2' id='remove' onClick={this.remove}>Delete</button>
				</div>

		</div>
		)
	}
}


export default AccountComp