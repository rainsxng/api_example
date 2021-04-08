import * as express from 'express';
import validate from '../middlewares/validation.middleware';
import BitcoinController from '../controllers/bitcoin.controller';
import bitcoinSchema from '../validation/bitcoin.validation';

const bitcoinRoutes = express.Router();

bitcoinRoutes.put('/bitcoin', validate(bitcoinSchema),BitcoinController.updatePrice);
bitcoinRoutes.get('/bitcoin',BitcoinController.getBitcoin);

export default bitcoinRoutes;
