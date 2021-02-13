export const validateUpdateUser = (data) => {
  const updates = Object.keys(data);
  const allowedUpdate = ["name", "email", "password", "age"];
  const isValidOperation = updates.every((update) =>
    allowedUpdate.includes(update)
  );
  return isValidOperation;
};
