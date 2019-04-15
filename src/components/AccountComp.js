import React from 'react'
import plus from './plus.svg'
import minus from './minus.svg'
import Account from './account'



class AccountComp extends React.Component {
	constructor(props){
		super(props)
		this.state={
			obj: new Account(),
			balance: '',
			transaction: '',
		}
	}

	onChange =() => {
		this.setState({transaction: Number(document.getElementById("transaction").value) })
	}
	
  	clickHandler = (event) => {
    let x = event.target.id;
    let a = this.state.transaction

		if (x === 'Deposit'){
			this.setState({balance: this.state.obj.deposit(a)})
		}

		if (x === "Withdrawl"){
			this.setState({balance: this.state.obj.withdrawl(a)})
		
		}
	
	}

	render(){
		
		return (
		<div >
			<h2> ACCOUNT </h2>
				<div className= "accountDiv">
					<h2> {this.props.accName} </h2>
					<input id="transaction" type="number" name="transaction" onChange={this.onChange}/>
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