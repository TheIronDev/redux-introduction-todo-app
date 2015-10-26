
// Loading Styles
import '../../stylesheets/style.less';

// App Dependencies
import React from 'react';
import { render } from 'react-dom';

// Redux Related
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Redux Middleware
import createLogger from 'redux-logger';
const loggerMiddleware = createLogger();


// Our App's Top-level Components
import TodoMVC from '../components/todomvc.jsx';

// Our App's redicers
import todoReducers from '../reducers/todoReducers.es6'

let createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore);
let store = createStoreWithMiddleware(todoReducers);
let rootElement = document.getElementById('todoMVC');


// Render the App, wrapping our App with a "Provider"
render(
	<Provider store={store}>
		<TodoMVC />
	</Provider>, rootElement);