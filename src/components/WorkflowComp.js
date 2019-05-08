import React from "react";
import '.././App.css';
import Queue from './queue'
import Stack from './stack'

class WorkflowComp extends React.Component {
	constructor(){
		super();
		this.queue = new Queue()
		this.stack = new Stack()
		
	}


	createListItem = () => {
		let item = document.getElementById('input2').value;
		this.queue.push(item);
		this.stack.push(item);
		this.setState({queue: this.queue})
		this.setState({stack: this.stack})
		// console.log(this.queue, this.stack)
	}

	deleteListItem = () => {
		this.queue.shift();
		this.stack.pop();
		this.setState({queue: this.queue})
		this.setState({stack: this.stack})
		// console.log('delete',this.queue, this.stack)
	}

	
	render(){
		let listFifo = this.queue.queue.map((a,b) => {
			return (
			<div key={b}>
				<h2>{a}</h2>
			</div>
			)
		})

		let listLifo = this.stack.stack.map((a,b) => {
			return (
			<div key={b}>
				<h2>{a}</h2>
			</div>
			)
		})
		
		return (
			<div>
				<div>
					<h2> WORKFLOW </h2>
					<input placeholder='List Item' id='input2' />
					<button className= 'button2' id='Add' onClick = {this.createListItem}>Add</button>
					<br></br>
					<button className= 'button2' id='Delete' onClick = {this.deleteListItem}>Delete</button>
				</div>
				<div className='splitdiv'>
					<div className='leftDiv'>
					<h2>QUEUE</h2>
						{listFifo}
					</div>
					<div className='rightDiv'>
					<h2>STACK</h2>
						{listLifo}
					</div>
				</div>

			</div>	
		)
			
			
	}
}

export default WorkflowComp