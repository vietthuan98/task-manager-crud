export const validateUpdateTask = (fields) => {
    const allowedFields = ['description', 'completed'];
    const isValid = fields.every((field) => allowedFields.includes(field));
    return isValid;
};
