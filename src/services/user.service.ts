import { users } from '../mocks/user.mock';
import {UpdateUserDTO, UserBitcoinDTO, UserDepositDTO} from '../dto/user.dto';
import User from '../models/user.model';

export default class UserService {
    static async getUserById(id: string) {
       return users.find(u => u.id === id);
    }

    public static updateUserFields(user: User, payload: UpdateUserDTO) {
        user.updateFields(payload);
        return user;
    }

    public static updateUsdAmount(user: User, payload: UserDepositDTO) {
        user.updateUsdAmount(payload);
        return user;
    }

    public static updateBitcoinAmount(user: User, payload: UserBitcoinDTO) {
        user.updateBitcoinAmount(payload);
        return user;
    }
}
