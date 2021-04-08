import { UserSignUpDTO } from '../dto/user.dto';
import User from '../models/user.model';
import { users } from '../mocks/user.mock';

export default class AuthService {
    static async signUp(payload: UserSignUpDTO) {
        const user = new User(payload);
        users.push(user);
        return user;
    }
}
