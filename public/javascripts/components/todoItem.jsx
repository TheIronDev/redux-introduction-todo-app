/**
 * This component represents a single todo item within a todo list.
 */

import React from 'react';

export default React.createClass({

	updateTodoIsCompleted() {
		this.props.updateTodoIsCompleted(this.props.id, !this.props.isCompleted);
	},

	render() {
		let isCompleted = this.props.isCompleted || false;
		let className = isCompleted ? 'todoMVC_todoItem_completed' : 'todoMVC_todoItem';

		return (<div className={className}>
			<input onChange={this.updateTodoIsCompleted} className="todoMVC_todoItemIsCompleteCheckbox" type="checkbox" checked={this.props.isCompleted ? 'checked' : ''} />
			{this.props.content}
			<div className="todoMVC_todoItemDelete">x</div>
		</div>);
	}
});