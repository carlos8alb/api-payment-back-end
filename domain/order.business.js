const axios = require('axios').default;

class OrderBusiness {
    constructor({ OrderRepository, config }) {
        this._orderRepository = OrderRepository;
        this._config = config;
        // this.ACCESS_TOKEN = this._config.MERCADO_PAGO.ACCESS_TOKEN;
    }
    async create(order) {
        const createdOrder = await this._orderRepository.create(order);
        return createdOrder;
    }

    async get(id) {
        const order = await axios.get(`https://api.mercadopago.com/merchant_orders/${ id }`, {
            params: {
                access_token: this.ACCESS_TOKEN
            }
        });
        if (!order) return null;
        return order.data;
    }

    async getAll(params) {
        const orders = await axios.get(`https://api.mercadopago.com/merchant_orders/search`, {
            params: {
                access_token: this.ACCESS_TOKEN,
                limit: params.limit || 10,
                offset: params.offset || 0
            }
        });
        if (!orders) return null;
        return orders.data;
    }

    async searchByFilter(filter) {
        const order = await this._orderRepository.searchByFilter(filter);
        if (!order) return null;
        return order;
    }

}

module.exports = OrderBusiness;