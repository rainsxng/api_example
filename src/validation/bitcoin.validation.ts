import joi from 'joi';

const bitcoinSchema = joi.object().keys({
    price: joi.number().positive().required(),
});


export default bitcoinSchema;
