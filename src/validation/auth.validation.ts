import joi from 'joi';

const authSchema = joi.object().keys({
    name: joi.string().alphanum().min(3).max(30).required(),
    username: joi.string().alphanum().min(3).max(30).required(),
    email: joi.string().email().required(),
});


export default authSchema;
