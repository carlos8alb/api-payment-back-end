class OrderService {

    constructor({ OrderBusiness }) {
        this._orderBusiness = OrderBusiness;
    }

    async create(order) {
        const createdOrder = await this._orderBusiness.create(order);
        return createdOrder;
    }

    async get(id) {
        const order = await this._orderBusiness.get(id);
        return order;
    }

    async getAll(params) {
        const orders = await this._orderBusiness.getAll(params);
        return orders;
    }

}

module.exports = OrderService;