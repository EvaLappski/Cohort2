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
		this.account = new Account (this.props.accName, this.props.balance);
		this.setState({account: this.account})
	
	}

	handleChange = (event) =>{
 	const {name,value} = event.target
  	this.setState({[name]:value});
  	// console.log(this.state.newAccountType)

	}
	
  	clickHandler = (event) => {

    let x = event.target.id;
    console.log("x",x)
    // let a = this.state.transaction
    console.log(event.target)
    let a = Number(this.state.input);

		if (x === 'Deposit'){
			let sample = this.account.deposit(a);
			this.setState({account: this.account})
			this.props.obtainDeposit(sample,this.props.marker);
		}
		console.log('the balance is', this.state)

		if (x === "Withdrawl"){
			let sample = this.account.withdrawl(a);
			this.setState({account: this.account})
			this.props.obtainDeposit(sample,this.props.marker)
		}
	}

	render(){
		
		return (
		<div >
			<h2> ACCOUNT </h2>
				<div className= "accountDiv">
					<h2> {this.props.accName} </h2>
					<input id="transaction" type="number" name="input" onChange={this.handleChange}/>
					<br></br>
					<br></br>
					<button className= 'button' id='Deposit' onClick={this.clickHandler} >
					<img  src={plus} className="mathicon" alt="icon" /></button>
					<button className= 'button' id='Withdrawl' onClick={this.clickHandler} >
					<img  src={minus} className="mathicon" alt="icon" /></button>
					<h2> {this.props.balance}</h2>
				</div>

		</div>
		)
	}
}


export default AccountComp