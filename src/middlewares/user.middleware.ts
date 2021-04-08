import { Request, Response } from 'express';
import UserService from '../services/user.service';

const userMiddleware = () => {
    return async (req: Request, res: Response, next: Function) => {
        const user = await UserService.getUserById(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        next();
    }
};

export default userMiddleware;
