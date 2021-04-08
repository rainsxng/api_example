import { Request, Response }  from 'express';
import {UpdateUserDTO, UserBitcoinDTO, UserDepositDTO, UserSignUpDTO} from '../dto/user.dto';
import {UpdateBitcoinDTO} from '../dto/bitcoin.dto';

export type UserSignUpRequest = Request<{}, {}, UserSignUpDTO>

export type BitcoinUpdateRequest = Request<{}, {}, UpdateBitcoinDTO>

export type GetUserRequest = Request<{ id: string }, {}, {}>

export type UpdateUserRequest = Request<{ id: string }, {}, UpdateUserDTO>

export type UserDepositRequest = Request<{ id: string }, {}, UserDepositDTO>

export type UserBitcoinRequest = Request<{ id: string }, {}, UserBitcoinDTO>
