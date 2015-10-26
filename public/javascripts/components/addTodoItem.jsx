/**
 * This component contains the "Add a Todo Item" input form and submission guidelines.
 */


import React from 'react';


export default React.createClass({
	getInitialState() {
		return {
			newTodoTextValue: ''
		};
	},

	updateNewTodoContent(event) {
		let newTodoTextValue = event.target.value;
		this.setState({
			newTodoTextValue
		});
	},

	addTodo(event) {
		if (event) {
			event.preventDefault();
		}
		this.props.addNewTodo(this.state.newTodoTextValue);
		this.setState({
			newTodoTextValue: ''
		});
	},

	render() {
		return (<form onSubmit={this.addTodo}>
			<input className="todoMVC_addItemInput" type="text" value={this.state.newTodoTextValue} onChange={this.updateNewTodoContent} />
		</form>);
	}
});


