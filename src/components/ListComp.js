import React from "react";
import '.././App.css';
import LinkedList from './LinkedList'
import LinkedListNode from './LinkedListNode'

class ListComp extends React.Component {
	constructor(){
		super();	
		this.LinkedList = new LinkedList
	}

	createNewNode = () => {
		let subject = document.getElementById('input1').value;
		let amount = document.getElementById('input2').value;
		this.LinkedList.insert(subject, amount);
		console.log('you clicked add', this.LinkedList);
		this.setState({LinkedList: this.LinkedList})
	}


	deleteCurrentNode = () => {
		this.LinkedList.delete();
		this.setState({LinkedList: this.LinkedList})
	}

	first = () => {
		this.LinkedList.first();
		this.setState({LinkedList: this.LinkedList})
	}

	last = () => {
		this.LinkedList.last();
		this.setState({LinkedList: this.LinkedList})
	}

	next = () => {
		this.LinkedList.next();
		this.setState({LinkedList: this.LinkedList})
	}

	previous = () => {
		this.LinkedList.previous();
		this.setState({LinkedList: this.LinkedList})
	}


	render(){

		return (
			<div>
			<h2> LIST </h2>
			<input placeholder='Subject' id='input1'/>
			<input placeholder='Amount' id='input2' />
			<button className= 'button2' id='ok' onClick= {this.createNewNode}>Add</button>
			<br></br>
			<button className= 'button2' id='first' onClick={this.first}>{'|<'}</button>
			<button className= 'button2' id='previous' onClick={this.previous}>{'<<'}</button>
			<button className= 'button2' id='delete' onClick={this.deleteCurrentNode}>DELETE</button>
			<button className= 'button2' id='next' onClick={this.next}>{'>>'}</button>
			<button className= 'button2' id='last' onClick={this.last}>{'>|'}</button>
			<h2>Current:{this.LinkedList.showCurrent()}</h2>

			
			</div>
		)
			
			
	}
}

export default ListComp