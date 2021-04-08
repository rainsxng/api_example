export interface UpdateUserDTO {
    name: string;

    email: string;
}


export interface UserSignUpDTO extends UpdateUserDTO {
    username: string;
}

export interface UserDepositDTO {
    action: 'deposit' | 'withdraw';

    amount: number;
}

export interface UserBitcoinDTO {
    action: 'buy' | 'sell';

    amount: number;
}

