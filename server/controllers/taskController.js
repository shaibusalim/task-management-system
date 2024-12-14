const Task = require('../models/Task');


const getAllTask = async (req, res) => {
    try{
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch(error) {
            console.error(error.message);
            res.status(500).json({message: 'Server Error'});
    }
};

const createTask = async (req, res) => {
    const {title, description} = req.body;

    try{
        const tasks = await Task.create({title, description});
        res.json(tasks);
    } catch (err){
        console.error(error.message);
        res.status(500).json({message: 'Failed to create Task'});
    }
};

const updateTask = async (req, res) => {
    const {id} = req.param;
    const {title, description} = req.body;
    try{
        const tasks = await Task.findByPk(id);
        if(!tasks){
            return res.status(404).json({error: 'Task not found!'});
        }

        tasks.title = title || tasks.title;
        tasks.description = description || tasks.description;
        tasks.status = status || tasks.status;
        
        await tasks.save();
        res.json({message: 'Task updated successfully', tasks});
    } catch(err){
        res.status(500).json({error: 'Failed to update task'});
    }
};

const deleteTask = async (req, res) => {
    const {id} = req.param;
    try{
        const tasks = await Task.findByPk(id);
        if(!tasks){
            return res.status(404).json({eror: 'Task not found'});
        }
        await tasks.destroy();
        res.json({message: 'Task Deleted successfully'});
    }catch(err){
        res.status(500).json({error: 'Failed to delete task'});
    }
}

module.exports = {
    getAllTask,
    createTask,
    updateTask,
    deleteTask
}