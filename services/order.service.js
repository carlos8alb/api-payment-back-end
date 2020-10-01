class OrderService {

    constructor({ OrderBusiness }) {
        this._orderBusiness = OrderBusiness;
    }

    async getAll() {
        const orders = await this._orderBusiness.getAll();
        return orders;
    }

    async create(order) {
        const createdOrder = await this._orderBusiness.create(order);
        return createdOrder;
    }

    async get(id) {
        const order = await this._orderBusiness.get(id);
        return order;
    }

}

module.exports = OrderService;