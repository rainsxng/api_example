import { Response}  from 'express';
import {UserSignUpRequest} from '../types/request.type';
import AuthService from '../services/auth.service';

export default class AuthController {

    static async signUp(req: UserSignUpRequest, res: Response) {
        const user = await AuthService.signUp(req.body);
        res.status(200).send(user);
    }
};

