export const validateUpdateUser = (fields) => {
    const allowedFields = ['name', 'email', 'password', 'age'];
    const isValidOperation = fields.every((field) => allowedFields.includes(field));
    return isValidOperation;
};
