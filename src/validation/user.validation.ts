import joi from 'joi';

const userEditSchema = joi.object().keys({
    name: joi.string().alphanum().min(3).max(30),
    email: joi.string().email(),
});

const userDepositSchema = joi.object().keys({
    action: joi.string().valid('deposit', 'withdraw').required(),
    amount: joi.number().positive().required(),
});

const userBitcoinSchema = joi.object().keys({
    action: joi.string().valid('buy', 'sell').required(),
    amount: joi.number().positive().required(),
});

export {
    userEditSchema,
    userDepositSchema,
    userBitcoinSchema
};
