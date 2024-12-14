const express = require('express');
const  {getAllTask, createTask, updateTask, deleteTask} = require('../controllers/taskController');

const router = express.Router();

router.get('/', getAllTask);
router.post('/', createTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

module.exports = router;