import { login, signUp, logOut, logOutAll, authenticate } from './auth.controller';

const authRoute = (router) => {
    router.post('/login', login);
    router.post('/signup', signUp);
    router.post('/logout', authenticate, logOut);
    router.post('/logoutAll', authenticate, logOutAll);
};

export default authRoute;
