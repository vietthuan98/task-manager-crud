export const validateUpdateTask = (data) => {
  const updates = Object.keys(data);
  const allowedUpdates = ["description", "completed"];
  const isValid = updates.every((update) => allowedUpdates.includes(update));
  return isValid;
};
