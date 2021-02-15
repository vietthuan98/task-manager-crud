import User from '../users/user.model';
import jwt from 'jsonwebtoken';

export async function authenticate(req, res, next) {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });
        if (!user) {
            throw { message: 'User does not exist' };
        }
        req.token = token;
        req.user = user;
        next();
    } catch (err) {
        res.status(400).send({ message: 'Please authenticate' });
    }
}

export async function logOut(req, res) {
    try {
        const { user, token } = req;
        user.tokens = user.tokens.filter((_token) => _token.token !== token);
        await user.save();
        res.status(200).send();
    } catch (err) {
        res.status(500).send(err);
    }
}

export async function logOutAll(req, res) {
    try {
        const { user } = req;
        user.tokens = [];
        await user.save();
        res.status(200).send();
    } catch (err) {
        res.status(500).send(err);
    }
}

export async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findByCredentials(email, password);
        const token = await user.generateAuthToken();
        res.status(200).send({ user, token });
    } catch (err) {
        res.status(400).send(err);
    }
}

export async function signUp(req, res) {
    try {
        const user = new User(req.body);
        await user.save();
        const token = await user.generateAuthToken();
        res.status(200).send({ user, token });
    } catch (err) {
        res.status(400).send(err);
    }
}
