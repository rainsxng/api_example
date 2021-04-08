import { v4 as uuidv4 } from 'uuid';
import {UpdateUserDTO, UserBitcoinDTO, UserDepositDTO, UserSignUpDTO} from '../dto/user.dto';
import { UserModel } from '../types/user.interface';
import { bitcoin } from '../mocks/bitcoin.mock';
import HttpException from '../exceptions/http.exception';

export default class User implements UserModel {

    constructor(payload?: UserSignUpDTO) {
        Object.assign(this, payload);
        this.updateTimestamps();
        this.id = uuidv4();
    }

    id: string;

    name: string;

    username: string;

    email: string;

    bitcoinAmount: number = 0;

    usdBalance: number = 0;

    createdAt: Date;

    updatedAt: Date;

    get balance() {
        // A user’s balance is balance = Amount(usd) + Amount(bitcoin) × conversion price
        return (this.usdBalance + this.bitcoinAmount) * bitcoin.price;
    }


    private updateTimestamps() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    public updateFields(payload: UpdateUserDTO) {
        Object.assign(this, payload);
        this.updatedAt = new Date();
    }

    public updateUsdAmount({ action, amount }: UserDepositDTO) {
        if (action === 'withdraw') {
            if (amount > this.usdBalance) {
                throw new HttpException(409, 'The amount on the account is insufficient for the transaction')
            }
            this.usdBalance -= amount;
        } else {
            this.usdBalance += amount;
        }
        this.updatedAt = new Date();
    }

    public updateBitcoinAmount({ action, amount }: UserBitcoinDTO) {
        if (action === 'sell') {
            if (amount > this.bitcoinAmount) {
                throw new HttpException(409, 'Not enough bitcoins to process this transaction')
            }
            this.bitcoinAmount -= amount;
            this.usdBalance += amount * bitcoin.price;
        } else {
            if (amount * bitcoin.price > this.usdBalance) {
                throw new HttpException(409, 'Not enough usd to process this transaction')
            }
            this.bitcoinAmount += amount;
            this.usdBalance -= amount * bitcoin.price;
        }
        this.updatedAt = new Date();
    }
}
