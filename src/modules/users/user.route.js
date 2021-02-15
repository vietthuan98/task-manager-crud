import {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
    getProfile,
    updateProfile,
    deleteProfile,
} from './user.controller';
import { authenticate } from '../auth/auth.controller';

const userRoute = (router) => {
    router.get('/users', authenticate, getUsers);
    router.get('/users/profile', authenticate, getProfile);
    router.get('/users/:id', authenticate, getUser);
    router.post('/users', authenticate, createUser);
    router.patch('/users/profile', authenticate, updateProfile);
    router.patch('/users/:id', authenticate, updateUser);
    router.delete('/users/profile', authenticate, deleteProfile);
    router.delete('/users/:id', authenticate, deleteUser);
};

export default userRoute;
