import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "./user.controller";

const userRoute = (router) => {
  router.get("/users", getUsers);
  router.get("/users/:id", getUser);
  router.post("/users", createUser);
  router.patch("/users/:id", updateUser);
  router.delete("/users/:id", deleteUser);
};

export default userRoute;
