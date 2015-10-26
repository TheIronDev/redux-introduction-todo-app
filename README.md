# An introduction to Redux

The goal of this repo is provide a nearly-complete TodoMVC App.. given clean and clear comments on the different parts
of a redux webapp, as well as giving a set instruction on how to "finish" our app.

Todo Apps have been done to death... which makes it the perfect "target" for this time of project, everyone has already
used or made their own todo app countless times, making the translation from Backbone or Angular much easier.

## Redux broken down by concept

* Actions
    * actions are a set of functions that returns an object.
    * The `action object` should always include a type, which will get matched by the appropriate reducer
    * actions provide a language to communicate dispatched events to our reducers.
* Reducers
    * reducers are a set of "pure functions". Given a state and an action, they should always return the same result
    * reducers should **never** mutate the state object. Convention encourages using `Object.assign({}, state, actionOverrides)`
* (Linking the) Store
    * provider
        * `Provider` wraps our smart component and exposes the redux store.
        * [More info here](https://github.com/rackt/react-redux/blob/master/docs/api.md#provider-store)
    * connect
        * `connect` binds a React component with a Redux Store, and is used to define which parts of our store should map to the component.
        * [More info here](https://github.com/rackt/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options)


Also good to know about:

* Redux Middleware
    * "provides a third-party extension point between dispatching an action, and the moment it reaches the reducer."


## Running this WebApp

```
npm install
npm run dev
npm start
```

Then, go to: `http://localhost:3000/`


## Todo List

- [ ] Write a "remove todo item" action
- [ ] Write a reducer for removing our todo item
- [ ] Dispatch the "remove" event

## Todo List (Advanced?)

### Creating an asynchronous action

- [ ] Use `redux-thunk` middleware to create a `storeWithMiddleware`
    * [more info here](http://rackt.org/redux/docs/advanced/AsyncActions.html#-index-js)
- [ ] Write an `action` that returns a function.
    * The function will have a `dispatch` function as its first argument
- [ ] Use a library to fetch data from `/todoList`

### Persist the Todo List

- [ ] Persist the todo list using client-side storage (localstorage or a cookie)
- [ ] Persist the todo list using a server-side storage (in memory, mongo, etc)