const express= require('express');
const router=express.Router();
// importing controllers
const { createTodo } = require('../controllers/createTodo');
const { getTodos, getTodoById } = require('../controllers/getTodo');
const { updateTodo } = require('../controllers/updateTodo');
const { deleteTodo } = require('../controllers/deleteTodo');

// defining routes
router.post('/createTodo',createTodo );
router.get('/getTodos',getTodos );
router.get('/getTodos/:id',getTodoById );
router.put('/updateTodo/:id',updateTodo );
router.delete('/deleteTodo/:id',deleteTodo );


// exporting
module.exports = router;