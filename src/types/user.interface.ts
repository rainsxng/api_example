import { UserSignUpDTO } from '../dto/user.dto';

export interface UserModel extends UserSignUpDTO {
    id: string;
    bitcoinAmount: number;
    usdBalance: number;
    createdAt: Date;
    updatedAt: Date;
}
