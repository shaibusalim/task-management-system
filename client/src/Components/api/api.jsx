import axios from 'axios';

// defining our api url
const API_URL = 'http://localhost:5000/tasks';

//Fetch all Task

export const getAllTask = async () => {
    const response = await axios.get(API_URL);
    return response.data
};

// creating a new Task

export const createTask = async (task) => {
    const response = await axios.post(API_URL, task)
    return response.data;
};

// Updating a task

export const updateTask = async (id, update) => {
    const response = await axios.put(`${API_URL}/${id}`, update);
    return response.data;
};

//Deleting a task

export const deleteTask = async (id) =>{
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data
;}