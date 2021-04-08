import { Schema } from 'joi';
import { Request, Response } from 'express';

const validate = (schema: Schema) => {
    return (req: Request, res: Response, next: Function) => {

        const { error } = schema.validate(req.body);
        const valid = error == null;

        if (valid) {
            next();
        } else {
            const { details } = error;
            const message = details.map(i => i.message).join(',');
            res.status(422).json({ error: message }) }
    }
}
export default validate;
