import Task from './task.model';
import { validateUpdateTask } from './task.validator';

export async function getTasks(req, res) {
    try {
        const result = await Task.find({});
        res.status(200).send(result);
    } catch (err) {
        res.status(400).send(err);
    }
}

export async function getTask(req, res) {
    const _id = req.params.id;
    try {
        const result = await Task.findById(_id);
        if (!result) {
            return res.status(404).send('Task does not exist.');
        }
        res.status(200).send(result);
    } catch (err) {
        res.status(400).send(err);
    }
}

export async function createTask(req, res) {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(200).send(task);
    } catch (err) {
        res.status(400).send(err);
    }
}

export async function updateTask(req, res) {
    const fields = Object.keys(req.body);
    const isValid = validateUpdateTask(fields);
    if (!isValid) {
        return res.status(404).send({
            error: 'Invalid params',
        });
    }
    try {
        const _id = req.params.id;
        const task = await Task.findById(_id);
        if (!task) {
            return res.status(404).send('Task does not exist.');
        }
        fields.forEach((field) => {
            task[field] = req.body[field];
        });
        await task.save();
        res.status(200).send(task);
    } catch (err) {
        res.status(400).send(err);
    }
}

export async function deleteTask(req, res) {
    const { id } = req.params;
    try {
        const task = await Task.findByIdAndDelete({ _id: id });
        if (!task) {
            return res.status(404).send('Task does not exist.');
        }
        res.status(200).send(task);
    } catch (err) {
        res.status(400).send(err);
    }
}
