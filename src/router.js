import express from 'express';

import userRoute from './modules/users/user.route';
import taskRoute from './modules/tasks/task.route';
import authRoute from './modules/auth/auth.route';

const router = express.Router();
userRoute(router);
taskRoute(router);
authRoute(router);

export default router;
