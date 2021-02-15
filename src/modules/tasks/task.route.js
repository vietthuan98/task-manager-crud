import {
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask,
    getTasksByUser,
    updateTaskByUser,
    deleteTaskByUser,
} from './task.controller';
import { authenticate } from '../auth/auth.controller';

const taskRoute = (router) => {
    router.get('/tasks', getTasks);
    router.get('/tasks/profile', authenticate, getTasksByUser);
    router.get('/tasks/:id', getTask);
    router.post('/tasks', authenticate, createTask);
    router.patch('/tasks/profile/:id', authenticate, updateTaskByUser);
    router.patch('/tasks/:id', updateTask);
    router.delete('/tasks/profile/:id', authenticate, deleteTaskByUser);
    router.delete('/tasks/:id', deleteTask);
};

export default taskRoute;
