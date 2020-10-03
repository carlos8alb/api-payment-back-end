class PaymentService {

    constructor({ PaymentBusiness }) {
        this._paymentBusiness = PaymentBusiness;
    }

    async create(payment) {
        const createdPayment = await this._paymentBusiness.create(payment);
        return createdPayment;
    }

    async get(id) {
        const payment = await this._paymentBusiness.get(id);
        return payment;
    }

    async getAll(params) {
        const payments = await this._paymentBusiness.getAll(params);
        return payments;
    }

}

module.exports = PaymentService;