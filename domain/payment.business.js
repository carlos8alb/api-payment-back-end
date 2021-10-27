const axios = require('axios').default;

class PaymentBusiness {

    constructor({ PaymentRepository, config }) {
        this._paymentRepository = PaymentRepository;
        this._config = config;
        // this.ACCESS_TOKEN = this._config.MERCADO_PAGO.ACCESS_TOKEN;
    }

    async create(payment) {
        const createdPayment = await this._paymentRepository.create(payment);
        return createdPayment;
    }

    async get(id) {
        const payment = await axios.get(`https://api.mercadopago.com/v1/payments/${ id }`, {
            params: {
                access_token: this.ACCESS_TOKEN
            }
        });
        if (!payment) return null;
        return payment.data;
    }

    async getAll(params) {
        const payments = await axios.get(`https://api.mercadopago.com/v1/payments/search`, {
            params: {
                access_token: this.ACCESS_TOKEN,
                limit: params.limit || 10,
                offset: params.offset || 0
            }
        });
        if (!payments) return null;
        return payments.data;
    }

    async searchByFilter(filter) {
        const payment = await this._paymentRepository.searchByFilter(filter);
        if (!payment) return null;
        return payment;
    }

}

module.exports = PaymentBusiness;