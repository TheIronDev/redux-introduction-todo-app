/**
 * TodoMVC is our smart component that is aware of the state of our application. You'll notice this component is the only
 * one looking into the redux store, and that is 100% intentional.
 *
 * The other components (aka dumb components) get passed in the UI state that they need, and don't need to be aware of
 * anything other than itself.
 */

import React from 'react';
import { connect } from 'react-redux';

import {addTodoItem, setTodoItemCompletion} from '../actions/todoActions.es6';

import TodoList from './todoList.jsx';
import AddTodo from './addTodoItem.jsx';

let App = React.createClass({

	addNewTodo(todoContent) {
		let superDuperUniqueId = Date.now();
		this.props.dispatch(addTodoItem(todoContent, superDuperUniqueId));
	},

	updateTodoIsCompleted(todoItemId, todoItemIsCompleted) {
		this.props.dispatch(setTodoItemCompletion(todoItemId, todoItemIsCompleted));
	},

	render() {
		return (<div className="todoMVC_container">
			<h1 className="todoMVC_title">Redux TodoMVC</h1>
			<AddTodo addNewTodo={this.addNewTodo}/>
			<TodoList list={this.props.todoList.list} updateTodoIsCompleted={this.updateTodoIsCompleted} />
		</div>);
	}
});

/**
 * Given the state from our store, this function determines what props get defined and mapped to the redux store
 * @param state
 * @returns {Object}
 */
function select(state) {
	return {
		todoList: state.todoList
	};
}

// connect decorates App, giving it the properties defined in the "select" function as well as a dispatch function
export default connect(select)(App);