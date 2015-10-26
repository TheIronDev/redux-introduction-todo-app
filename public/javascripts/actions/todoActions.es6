
import {ADD_TODO_ITEM,  REMOVE_TODO_ITEM, CHANGE_TODO_ITEM_COMPLETION} from '../constants.es6';


/**
 * This action defines adding a new todo item
 * @param content {String} Todo MVC content
 * @param id {Integer} Unique id
 * @returns {Object}
 */
export function addTodoItem (content, id) {
	let item = {
		content,
		id,
		isCompleted: false
	};
	return {
		type: ADD_TODO_ITEM,
		item
	}
}

/**
 * This action changes a todo-item's completion status
 * @param id {Integer} Unique id
 * @param isCompleted {Boolean}
 * @returns {Object}
 */
export function setTodoItemCompletion (id, isCompleted) {
	let item = {
		id,
		isCompleted
	};
	return {
		type: CHANGE_TODO_ITEM_COMPLETION,
		item
	}
}


// TODO: Implement Me :)
export function removeTodoItem (todoItem) {
	return {}
}