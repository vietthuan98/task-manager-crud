import User from './user.model';
import { validateUpdateUser } from './user.validator';

export async function getUsers(req, res) {
    try {
        const result = await User.find({});
        res.status(200).send(result);
    } catch (err) {
        res.status(400).send(err);
    }
}

export async function getProfile(req, res) {
    res.send(req.user);
}

export async function getUser(req, res) {
    const _id = req.params.id;
    try {
        const result = await User.findById(_id);
        if (!result) {
            return res.status(404).send('User does not exist.');
        }
        res.status(200).send(result);
    } catch (err) {
        res.status(400).send(err);
    }
}

export async function createUser(req, res) {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(200).send(user);
    } catch (err) {
        res.status(400).send(err);
    }
}

export async function updateProfile(req, res) {
    const fields = Object.keys(req.body);
    const isValidOperation = validateUpdateUser(fields);
    if (!isValidOperation) {
        return res.status(404).send({
            error: 'Invalid params',
        });
    }

    try {
        const { user } = req;
        fields.forEach((field) => {
            user[field] = req.body[field];
        });
        await user.save();
        res.status(200).send(user);
    } catch (err) {
        res.status(400).send(err);
    }
}

export async function updateUser(req, res) {
    const fields = Object.keys(req.body);
    const isValidOperation = validateUpdateUser(fields);
    if (!isValidOperation) {
        return res.status(404).send({
            error: 'Invalid params',
        });
    }

    const _id = req.params.id;
    try {
        const user = await User.findById(_id);
        if (!user) {
            return res.status(404).send('User does not exist.');
        }
        fields.forEach((field) => {
            user[field] = req.body[field];
        });
        await user.save();
        res.status(200).send(user);
    } catch (err) {
        res.status(400).send(err);
    }
}

export async function deleteProfile(req, res) {
    try {
        const { user } = req;
        await user.remove();
        res.status(200).send({ message: 'Delete successfully' });
    } catch (err) {
        res.status(400).send(err);
    }
}

export async function deleteUser(req, res) {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete({ _id: id });
        if (!user) {
            return res.status(404).send('User does not exist.');
        }
        res.status(200).send(user);
    } catch (err) {
        res.status(400).send(err);
    }
}
