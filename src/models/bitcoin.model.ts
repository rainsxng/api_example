import BitcoinModel from '../types/bitcoin.inteface';

export default class Bitcoin implements BitcoinModel {
    price: number = 100;

    public updatedAt: Date;

    public updatePrice(price: number) {
        this.price = this.price - price;
        this.updatedAt = new Date();
    }
}
