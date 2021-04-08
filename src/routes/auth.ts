import * as express from 'express';
import AuthController from '../controllers/auth.controller';
import validate from '../middlewares/validation.middleware';
import authSchema from '../validation/auth.validation';

const authRoutes = express.Router();

authRoutes.post('/users', validate(authSchema),AuthController.signUp);

export default authRoutes;
