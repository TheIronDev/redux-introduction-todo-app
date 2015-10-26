var express = require('express');
var router = express.Router();

var dummyHydrateTodoList = {
	list: [
		{id: 1, isCompleted: true, content: 'Create this webapp'},
		{id: 2, isCompleted: false, content: 'Documentation'},
		{id: 3, isCompleted: false, content: 'Tests'}
	]
};

var dummyApiTodoList = {
	list: [
		{id: 1, isCompleted: false, content: 'Laundry'},
		{id: 2, isCompleted: false, content: 'Dishes'},
		{id: 3, isCompleted: false, content: 'Vacuum'},
		{id: 4, isCompleted: true, content: 'Video Games'}
	]
};

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { list: dummyHydrateTodoList });
});

router.get('/todoList', function(req, res) {
	res.json(dummyApiTodoList);
});

module.exports = router;
