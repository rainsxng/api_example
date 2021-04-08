import * as express from 'express';
import UserController from '../controllers/user.controller';
import validate from '../middlewares/validation.middleware';
import {
    userEditSchema, userDepositSchema, userBitcoinSchema
} from '../validation/user.validation';
import userMiddleware from '../middlewares/user.middleware';

const userRoutes = express.Router();

userRoutes.get('/users/:id',userMiddleware(),UserController.getUserById);
userRoutes.put('/users/:id',[validate(userEditSchema),userMiddleware()],UserController.updateUserById);
userRoutes.post('/users/:id/usd',[validate(userDepositSchema),userMiddleware()],UserController.updateUsdAmount);
userRoutes.post('/users/:id/bitcoins',[validate(userBitcoinSchema),userMiddleware()],UserController.updateBitcoinAmount);
userRoutes.get('/users/:id/balance',userMiddleware(),UserController.getBalance);

export default userRoutes;
