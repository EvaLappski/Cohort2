import React from "react"
import garbage from './garbage.svg'
import Accounts from './accounts'
import Account from './account'
import AccountComp from './AccountComp'
import '.././App.css'

class AccountsComp extends React.Component {
constructor(){
	super()
	this.state={
		newAccount: false,
		accountList: new Accounts(),
		counter: 0,
		balance: 0,
		accName: '',
		display: false,
		account:''

		
	}
}

	obtainDeposit = (balance, marker) => {
		console.log('balance', balance, 'i', marker)
		console.log('this account list', this.state.accountList.account)
		let clone = this.state.accountList
		console.log('the clone', clone.accountList[0].accName)
		clone.accountList[marker].balance = balance
		this.setState({balance: balance})
		this.setState({account: clone})
	}

	clickHandler = (event) => {
    let x = event.target.id;
    let a = document.getElementById("initialName").value;
	let b = Number(document.getElementById("initialBalance").value);
	// console.log("a is", a, "b is", b)
	this.state.accountList.createAccount(a,b);
	this.setState({counter : this.state.counter+1})
	// console.log("accountList", this.state.accountList) // do not use, hard render
	return this.state.accountList;
	
	}

	clickHandler2 = (event) => {
	let x = event.target.id;
	console.log(x)

		if (x === 'newAccount'){
		this.setState(prevState => ({ newAccount: !prevState.newAccount }))
    	
		}
	}	

	clickHandler3 = (event) => {
   	 let x = event.target.id;
   		this.state.accountList.deleteAccount(x);
   		this.setState({counter: this.state.counter-1})
   	 console.log('x is',x);


	}

	clickHandler4 = (event) => {
		let x = event.target.id;
		let grabName = this.state.accountList.accountList[x].accName;
		let grabBalance = this.state.accountList.accountList[x].balance;
		console.log('state before', this.state.accName)
		console.log('grab balance', grabBalance, 'grab name', grabName)
		this.setState({accName: grabName, balance: grabBalance, display: true})
		console.log('state after', this.state.accName)
		// console.log('you clicked on ', x);
		// console.log(this.state.accountList.accountList[x]);
		// console.log("show me the money",this.state.accName, this.state.balance,)

	}
	
	render() {

		const list = this.state.accountList.accountList.map((a, b) => {

			return <AccountComp
				key ={b}
				marker= {b}
				accName = {this.state.accountList.accountList[b].accName}
				balance = {this.state.accountList.accountList[b].balance}
				obtainDeposit = {(b, marker) => this.obtainDeposit(b, marker)}


			/>

		}
		//	<div key={b} >
			//	<a id={b} onClick={this.clickHandler4}> 
				//	<button id={b} className= 'button2' onClick={this.clickHandler3}>
				//		<img className= 'mathicon' src={garbage} />
				//	</button>
				//	Account Name: {this.state.accountList.accountList[b].accName} Balance: ${this.state.accountList.accountList[b].balance} 
			//	</a>
		//	</div>
		);
		

	return(

	<div className= 'bankDiv'>
		<div className= 'rightDiv'>
			
			<button className= 'button2' id='newAccount' onClick={this.clickHandler2}> New</button>
			{this.state.newAccount?	

				<div>
					<input id="initialName" type="text" name="initialName" placeholder= 'Account Name'/>
					<input id="initialBalance" type="number" name="initialBalance" placeholder= 'Starting Balance'/>
					<br></br>
					<br></br>
					<button className= 'button2' id='okAdd' onClick={this.clickHandler}>OK!</button>
				</div> :null }
					{this.state.display ? <AccountComp/> : null }
			
		</div>
		<div className= "leftDiv">
					<h2>TOTAL ${this.state.accountList.calculateTotal()}</h2>
					<h2>{list}</h2>
					<h2>highest {this.state.accountList.returnHighest().accName} ${this.state.accountList.returnHighest().balance}</h2>
					<h2>lowest {this.state.accountList.returnLowest().accName} ${this.state.accountList.returnLowest().balance}</h2>
					
			</div>	
	</div>
		);
	}
};


export default AccountsComp