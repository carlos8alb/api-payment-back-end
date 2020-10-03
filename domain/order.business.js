class OrderBusiness {
    constructor({ OrderRepository }) {
        this._orderRepository = OrderRepository;
    }
    async getAll() {
        const orders = await this._orderRepository.getAll();
        return orders;
    }

    async get(id) {
        const order = await this._orderRepository.get(id);
        if (!order) return null;
        return order;
    }

    async create(order) {
        const createdOrder = await this._orderRepository.create(order);
        return createdOrder;
    }

    async searchByFilter(filter) {
        const order = await this._orderRepository.searchByFilter(filter);
        if (!order) return null;
        return order;
    }

}

module.exports = OrderBusiness;