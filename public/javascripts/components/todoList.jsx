/**
 * This component renders an array of todo items, passing in a todoItem from the list that was passed in from the
 * todomvc component one level up.
 */

import React from 'react';
import TodoItem from './todoItem.jsx';

let count = 0;

export default React.createClass({
	render() {
		let items = this.props.list.map((todoItem) => (<TodoItem key={todoItem.id} {...todoItem} updateTodoIsCompleted={this.props.updateTodoIsCompleted} />) );
		return (<div>
			{items}
		</div>);
	}
});