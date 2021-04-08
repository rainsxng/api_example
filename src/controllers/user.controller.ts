import { Response } from 'express';
import {
    GetUserRequest,
    UpdateUserRequest,
    UserBitcoinRequest,
    UserDepositRequest
} from '../types/request.type';
import UserService from '../services/user.service';


export default class UserController {
    static async getUserById(req: GetUserRequest, res: Response) {
        const user = await UserController.findUserById(req.params.id);
        return res.status(200).send(user);
    }

    static async updateUserById(req: UpdateUserRequest, res: Response) {
        const user = await UserController.findUserById(req.params.id);
        const updated = await UserService.updateUserFields(user,req.body);
        return res.status(200).send(updated);
    }

    static async updateUsdAmount(req: UserDepositRequest, res: Response, next: Function) {
          try {
              const user = await UserController.findUserById(req.params.id);
              const updated = await UserService.updateUsdAmount(user, req.body);
              return res.status(200).send(updated);
          }
          catch (e) {
              next(e.message);
          }
    }

    static async updateBitcoinAmount(req: UserBitcoinRequest, res: Response, next: Function) {
        try {
            const user = await UserController.findUserById(req.params.id);
            const updated = await UserService.updateBitcoinAmount(user, req.body);
            return res.status(200).send(updated);
        }
        catch (e) {
            next(e.message)
        }
    }

    static async getBalance(req: GetUserRequest, res: Response) {
        const user = await UserController.findUserById(req.params.id);
        return res.status(200).send({
            balance: user.balance
        });
    }


    private static async findUserById(id: string) {
        return UserService.getUserById(id);
    }
};

