import Bitcoin from '../models/bitcoin.model';


export default class BitcoinService {
    static async updatePrice(bitcoin: Bitcoin, price: number) {
       return bitcoin.updatePrice(price);
    }
}
