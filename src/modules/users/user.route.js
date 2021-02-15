import {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
    getProfile,
    updateProfile,
    deleteProfile,
    uploadAvatar,
    handleErrorUploadAvatar,
    deleteAvatar,
    getAvatar,
} from './user.controller';
import { authenticate } from '../auth/auth.controller';
import upload from '../../middleware/uploadAvatar';

const userRoute = (router) => {
    router.get('/users', authenticate, getUsers);
    router.get('/users/:id/avatar', getAvatar);
    router.get('/users/profile', authenticate, getProfile);
    router.get('/users/:id', authenticate, getUser);
    router.post(
        '/users/profile/avatar',
        authenticate,
        upload.single('avatar'),
        uploadAvatar,
        handleErrorUploadAvatar
    );
    router.post('/users', authenticate, createUser);
    router.patch('/users/profile', authenticate, updateProfile);
    router.patch('/users/:id', authenticate, updateUser);
    router.delete('/users/profile/avatar', authenticate, deleteAvatar);
    router.delete('/users/profile', authenticate, deleteProfile);
    router.delete('/users/:id', authenticate, deleteUser);
};

export default userRoute;
