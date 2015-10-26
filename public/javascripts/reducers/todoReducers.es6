/**
 * Fundamentally... reducers are a set of pure functions that, when given an input,
 * always returns the same output.
 */

import { combineReducers } from 'redux';
import {ADD_TODO_ITEM,  REMOVE_TODO_ITEM, CHANGE_TODO_ITEM_COMPLETION} from '../constants.es6';

const initialTodoState = {
	isFetching: false,
	list: []
};

const defaultAction = {
	type: 'no-op'
};


/**
 * This reducer defines how state changes when ADD and REMOVE items are called.
 * If we pass in an action that is not defined, we pass back the original state,
 * meaning state has not changed.
 */
function todoList(state = initialTodoState, action = defaultAction) {

	switch (action.type) {
		case ADD_TODO_ITEM:
			return Object.assign({}, state, {
				isFetching: false,
				list: [].concat(state.list, action.item)
			});
		case CHANGE_TODO_ITEM_COMPLETION:

			let updateItem = action.item,

				// Important note: I'm using map here to make sure I create a new array that doesn't mutate
				// the original state.
				newState = state.list.map((todoItem) => {
				if (todoItem.id === updateItem.id) {
					todoItem.isCompleted = updateItem.isCompleted;
				}
				return todoItem;
			});
			return Object.assign({}, state, {
				isFetching: false,
				list: [].concat(newState)
			});

		case REMOVE_TODO_ITEM:
			// TODO: Implement Me :)
		default:
			return state;
	}
}

/**
 * We combine the reducers, which maps to different parts of state within our app.
 * For simplicity we are only using 1, but for a more complex app you would want to break out
 */
const todoReducers = combineReducers({
	todoList
});

export default todoReducers;