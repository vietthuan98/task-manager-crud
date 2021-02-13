import {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
} from "./task.controller";

const taskRoute = (router) => {
  router.get("/tasks", getTasks);
  router.get("/tasks/:id", getTask);
  router.post("/tasks", createTask);
  router.patch("/tasks/:id", updateTask);
  router.delete("/tasks/:id", deleteTask);
};

export default taskRoute;
