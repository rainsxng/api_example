import { Response, Request }  from 'express';
import { BitcoinUpdateRequest } from '../types/request.type';
import BitcoinService from '../services/bitcoin.service';
import { bitcoin } from '../mocks/bitcoin.mock';

export default class BitcoinController {

    static async updatePrice(req: BitcoinUpdateRequest, res: Response) {
        const result = await BitcoinService.updatePrice(bitcoin, req.body.price);
        res.status(200).send(result);
    }

    static async getBitcoin(req: Request, res: Response) {
        res.status(200).send(bitcoin);
    }
};

