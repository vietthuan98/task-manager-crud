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

//task by user profile
//GET /tasks/profile?completed=true
export async function getTasksByUser(req, res) {
    const match = {};
    const sort = {};
    const { completed, limit, skip, sortBy } = req.query;

    if (completed) {
        match.completed = completed === 'true';
    }

    if (sortBy) {
        const [field, order] = sortBy.split(':');
        sort[field] = order === 'asc' ? 1 : -1;
    }

    try {
        const { user } = req;
        // c1: const result = await Task.find({ owner: user._id });
        // c2:
        await user
            .populate({
                path: 'tasks',
                match,
                options: {
                    limit: +limit,
                    skip: +skip,
                    sort,
                },
            })
            .execPopulate();
        res.status(200).send(user.tasks);
    } catch (err) {
        res.status(400).send(err);
    }
}

export async function createTask(req, res) {
    try {
        const { user } = req;
        const task = new Task({
            ...req.body,
            owner: user._id,
        });
        await task.save();
        res.status(200).send(task);
    } catch (err) {
        res.status(400).send(err);
    }
}

export async function updateTaskByUser(req, res) {
    const fields = Object.keys(req.body);
    const isValid = validateUpdateTask(fields);
    if (!isValid) {
        return res.status(404).send({
            error: 'Invalid params',
        });
    }
    try {
        const { user } = req;
        const _id = req.params.id;
        const task = await Task.findOne({ _id, owner: user._id });
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

export async function deleteTaskByUser(req, res) {
    try {
        const { user } = req;
        const _id = req.params.id;
        const task = await Task.findOneAndDelete({ _id, owner: user._id });
        if (!task) {
            return res.status(404).send('Task does not exist.');
        }
        res.status(200).send(task);
    } catch (err) {
        res.status(400).send(err);
    }
}
