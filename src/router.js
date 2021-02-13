import express from "express";

import userRoute from "./modules/users/user.route";
import taskRoute from "./modules/tasks/task.route";

const router = express.Router();
userRoute(router);
taskRoute(router);

export default router;
